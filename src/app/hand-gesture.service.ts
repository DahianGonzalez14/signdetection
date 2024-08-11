import { Injectable } from '@angular/core';
import * as handpose from '@tensorflow-models/handpose';
import * as fingerpose from 'fingerpose';

import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import { GE } from './fingere-gesture';

const GestureMap = {
  thumbs_up: 'ok',
  victory: 'two',
  one_finger: 'one',
};

type Gesture = 'one' | 'two' | 'ok' | 'none';

@Injectable({
  providedIn: 'root',
})
export class HandGesture {
  private _stream: MediaStream;
  private _dimensions: [number, number];
  private _lastGestureTimestamp = -1;
  private _lastGesture: Gesture = 'none';
  private _emitGesture = true;

  get stream(): MediaStream {
    return this._stream;
  }

  get lastGesture(): Gesture {
    return this._lastGesture;
  }

  initialize(canvas: HTMLCanvasElement, video: HTMLVideoElement): void {
    this._dimensions = [video.width, video.height];
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this._stream = stream;
        return handpose.load();
      })
      .then((model) => {
        const context = canvas.getContext('2d');
        if (!context) return;
        context.clearRect(0, 0, video.width, video.height);
        context.strokeStyle = 'red';
        context.fillStyle = 'red';

        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        const runDetection = () => {
          model.estimateHands(video).then((predictions) => {
            context.drawImage(
              video,
              0,
              0,
              video.width,
              video.height,
              0,
              0,
              canvas.width,
              canvas.height
            );
            if (predictions && predictions[0]) {
              this._processGesture(predictions[0].landmarks);
            }
            requestAnimationFrame(runDetection);
          });
        };
        runDetection();
      })
      .catch((err) => {
        console.error(err);
      });
  }


  private _processGesture(landmarks: any): void {
    const estimateResult = GE.estimate(landmarks, 7.5);
    const gestures = estimateResult ? estimateResult.gestures : [];

    let gesture = null;
    for (const g of gestures) {
        gesture = g.name;
    }

    if (this._lastGesture !== gesture) {
      this._lastGesture = gesture;
      this._lastGestureTimestamp = Date.now();
      this._emitGesture = true;
    } else {
      if (this._emitGesture && this._toSeconds(Date.now() - this._lastGestureTimestamp) > 1) {
        this._emitGesture = false;
      }
    }
  }

  private _toSeconds(ms: number): number {
    return ms / 1000;
  }
}
