"use client";
import { useState } from "react";
import { useDraw } from "@/hooks/useDraw";
import { ChromePicker } from 'react-color';

function DrawingBoard() {

    const [color , setColor] = useState<string>('#000');
    const { canvasRef, onMouseDown } = useDraw(drawLine);

    function drawLine({prevPoint, currentPoint, ctx} : Draw) {
        const { x: currX, y: currY } = currentPoint;
        const lineColor = color;
        const lineWidth = 5;

        let startPoint = prevPoint ?? currentPoint;
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        ctx.fillStyle = lineColor;
        ctx.beginPath();
        ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

  return (
    <div className="flex justify-evenly pt-10">
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)}/>
        <canvas onMouseDown={onMouseDown} ref={canvasRef} width={750} height={750} className='border dark:border-white border-black rounded-md'></canvas>
    </div>
  )
}

export default DrawingBoard;
