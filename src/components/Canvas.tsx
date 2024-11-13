import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useEditorStore } from '../store/editorStore';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const items = useEditorStore((state) => state.items);

  useEffect(() => {
    if (canvasRef.current && !fabricRef.current) {
      fabricRef.current = new fabric.Canvas(canvasRef.current, {
        width: 640,
        height: 360,
        backgroundColor: '#000',
      });
    }

    return () => {
      if (fabricRef.current) {
        fabricRef.current.dispose();
        fabricRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!fabricRef.current) return;

    fabricRef.current.clear();
    
    items.forEach((item) => {
      if (item.type === 'text') {
        const text = new fabric.Text(item.content, {
          left: 100,
          top: 100,
          fill: 'white',
        });
        fabricRef.current?.add(text);
      }
    });

    fabricRef.current.renderAll();
  }, [items]);

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;