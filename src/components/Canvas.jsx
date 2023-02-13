import React, { useEffect, useRef } from "react";

export const Canvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx, canvas) => {
    console.log("canvas", canvas.width);
    const a = canvas.width * 0.1;
    const b = canvas.height * 0.4;
    const c = canvas.width * 0.8;
    const d = canvas.height * 0.2;
    const e = canvas.width * 0.75;
    const f = canvas.height * 0.9;
    ctx.clearRect(0, 0, 200, 200);
    ctx.strokeStyle = "rgba(122, 121,122, 0.5)";
    // ctx.fillRect(0, 0, 20, 20);
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.lineTo(e, f);
    ctx.closePath();
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw(ctx, canvas);
  }, [window]);
  return <canvas ref={canvasRef} {...props} />;
};
