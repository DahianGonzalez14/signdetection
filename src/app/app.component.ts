import { AfterViewInit, Component, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HandGesture } from './hand-gesture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  public gesto: string;

  constructor(private _recognizer: HandGesture, private _router: Router) {
    // Verificar el valor de lastGesture periódicamente
    setInterval(() => {
      const gesture = this._recognizer.lastGesture;
      if (gesture !== this.gesto) {
        this.gesto = gesture;
        if (this.gesto && this.gesto !== 'none') {  // Asegurarse de que el gesto no sea 'none'
          this.speakText(this.gesto);
        }
      }
    }, 1000); // Revisar cada segundo
  }
  

  get stream(): MediaStream {
    return this._recognizer.stream;
  }

  ngAfterViewInit(): void {
    // Inicializar el reconocimiento de gestos con el canvas y el video
    this._recognizer.initialize(
      this.canvas.nativeElement,
      this.video.nativeElement
    );
  }

// Función para leer el texto en voz alta en español
speakText(text: string): void {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Función para establecer la voz en español
    const setSpanishVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const spanishVoice = voices.find(voice => voice.lang.startsWith('es'));

      if (spanishVoice) {
        utterance.voice = spanishVoice;
      } else {
        console.warn('No se encontró una voz en español. Usando la voz por defecto.');
      }

      window.speechSynthesis.speak(utterance);
    };

    // Obtener las voces y establecer la voz en español
    if (window.speechSynthesis.getVoices().length > 0) {
      setSpanishVoice();
    } else {
      // Esperar hasta que las voces estén disponibles
      window.speechSynthesis.onvoiceschanged = () => {
        setSpanishVoice();
      };
    }
  } else {
    console.error('El navegador no soporta la síntesis de voz.');
  }
}

}
