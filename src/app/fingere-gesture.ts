import * as fingerpose from 'fingerpose';

// Definir el gesto "AMOR"
const loveGesture = new fingerpose.GestureDescription('IGUALMENTE');

// Dedo índice sin rizo
loveGesture.addCurl(fingerpose.Finger.Index, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo meñique sin rizo
loveGesture.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo pulgar sin rizo
loveGesture.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo medio con rizo completo
loveGesture.addCurl(fingerpose.Finger.Middle, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo anular con rizo completo
loveGesture.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.FullCurl, 1.0);


// Definir el gesto "YO TAMBIÉN"
const indexPointingGesture = new fingerpose.GestureDescription('AMOR');

// Dedo índice sin rizo
indexPointingGesture.addCurl(fingerpose.Finger.Index, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo pulgar completamente rizado
indexPointingGesture.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo medio completamente rizado
indexPointingGesture.addCurl(fingerpose.Finger.Middle, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo anular completamente rizado
indexPointingGesture.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo meñique completamente rizado
indexPointingGesture.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.NoCurl, 1.0);


// Definir el gesto de "cuatro dedos hacia arriba y el pulgar hacia dentro"
const fourFingersUpThumbIn = new fingerpose.GestureDescription('HOLA');

// Dedo índice sin rizo
fourFingersUpThumbIn.addCurl(fingerpose.Finger.Index, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo medio sin rizo
fourFingersUpThumbIn.addCurl(fingerpose.Finger.Middle, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo anular sin rizo
fourFingersUpThumbIn.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo meñique sin rizo
fourFingersUpThumbIn.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo pulgar en rizo parcial o completo
fourFingersUpThumbIn.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 1.0);

const indexMiddleOpenGesture = new fingerpose.GestureDescription('NOMBRE');

// Dedo índice sin rizo
indexMiddleOpenGesture.addCurl(fingerpose.Finger.Index, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo medio sin rizo
indexMiddleOpenGesture.addCurl(fingerpose.Finger.Middle, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo pulgar completamente rizado
indexMiddleOpenGesture.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo anular completamente rizado
indexMiddleOpenGesture.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo meñique completamente rizado
indexMiddleOpenGesture.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.FullCurl, 1.0);

// Definir el gesto "IS"
const indexUpGesture = new fingerpose.GestureDescription('ES');

// Dedo índice sin rizo
indexUpGesture.addCurl(fingerpose.Finger.Index, fingerpose.FingerCurl.NoCurl, 1.0);

// Dedo pulgar completamente rizado
indexUpGesture.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo medio completamente rizado
indexUpGesture.addCurl(fingerpose.Finger.Middle, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo anular completamente rizado
indexUpGesture.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo meñique completamente rizado
indexUpGesture.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.FullCurl, 1.0);


const victoria = new fingerpose.GestureDescription('Victoria');

// Dedo índice sin rizo
victoria.addCurl(fingerpose.Finger.Index, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo pulgar completamente rizado
victoria.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo medio completamente rizado
victoria.addCurl(fingerpose.Finger.Middle, fingerpose.FingerCurl.FullCurl, 1.0);
// Dedo anular completamente rizado
victoria.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.FullCurl, 1.0);

// Dedo meñique completamente rizado
victoria.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.FullCurl, 1.0);




export const GE = new fingerpose.GestureEstimator([
  loveGesture,
  indexPointingGesture,
  fourFingersUpThumbIn,
  indexMiddleOpenGesture,
  indexUpGesture,
  victoria
]);
