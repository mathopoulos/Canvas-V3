import { useEffect } from 'react';
import { drawShapes } from '/src/components/drawingComponents/shapeDrawing.jsx';
import { updateResizingBox } from '/src/components/helpers.jsx';

export const useCanvasUpdate = (canvasRef, resizingBoxRef, shapes, selectedShapeIndex) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;

    canvas.width = 310 * dpr;
    canvas.height = 100 * dpr;
    canvas.style.width = '310px';
    canvas.style.height = '100px';
    
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.scale(dpr, dpr);

    drawShapes(context, shapes, selectedShapeIndex); // pass selectedShapeIndex to drawShapes

    updateResizingBox(resizingBoxRef, selectedShapeIndex, shapes);
  }, [canvasRef, resizingBoxRef, shapes, selectedShapeIndex]);
};