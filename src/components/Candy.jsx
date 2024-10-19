import React, { useEffect } from 'react';

function Candy() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');

    if (!canvas || !canvas.getContext) {
      return;
    }

    const ctx = canvas.getContext('2d');
    let X = (canvas.width = window.innerWidth);
    let Y = (canvas.height = window.innerHeight);
    let mouseX = null;
    let mouseY = null;
    let dist = 190; // Increased from 80 to 100 for larger squares
    let lessThan = Math.sqrt(dist * dist + dist * dist);
    let mouseDist = 150;
    let shapeNum = X > Y ? X / dist : Y / dist;
    let shapes = [];
    let lineWidth = 5;
    const ease = 0.5;
    const friction = 0.5;

    if (X < 768) {
      lineWidth = 2;
      dist = 100; // Increased from 40 to 50 for larger squares on mobile
      lessThan = Math.sqrt(dist * dist + dist * dist);
      mouseDist = 50;
      shapeNum = X > Y ? X / dist : Y / dist;
    }

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (cb) {
        setTimeout(cb, 17);
      };

    function Shape(ctx, x, y, i) {
      this.ctx = ctx;
      this.init(x, y, i);
    }

    Shape.prototype.init = function (x, y, i) {
      this.x = x;
      this.y = y;
      this.xi = x;
      this.yi = y;
      this.i = i;
      this.r = 1; // Radius remains the same
      this.v = {
        x: 0,
        y: 0,
      };
      this.c = Math.floor(Math.random() * 360);
    };

    Shape.prototype.draw = function () {
      const ctx = this.ctx;
      ctx.save();
      ctx.fillStyle = `hsl(${this.c}, 80%, 60%)`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };

    Shape.prototype.mouseDist = function () {
      const x = mouseX - this.x;
      const y = mouseY - this.y;
      const dist = Math.sqrt(x * x + y * y);

      if (dist < mouseDist) {
        const colAngle = Math.atan2(mouseY - this.y, mouseX - this.x);
        this.v.x = -Math.cos(colAngle) * 5;
        this.v.y = -Math.sin(colAngle) * 5;
        this.x += this.v.x;
        this.y += this.v.y;
      } else {
        this.v.x += (this.xi - this.x) * ease;
        this.v.y += (this.yi - this.y) * ease;
        this.v.x *= friction;
        this.v.y *= friction;
        this.x += this.v.x;
        this.y += this.v.y;
      }
    };

    Shape.prototype.drawLine = function (i) {
      for (let j = 0; j < shapes.length; j++) {
        if (i !== j) {
          const x = this.x - shapes[j].x;
          const y = this.y - shapes[j].y;
          const dist = Math.sqrt(x * x + y * y);
          if (dist <= lessThan) {
            ctx.save();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = `hsl(${this.c}, 80%, 60%)`;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(shapes[j].x, shapes[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    Shape.prototype.render = function (i) {
      this.drawLine(i);
      if (mouseX !== null) this.mouseDist();
      this.draw();
    };

    for (let i = 0; i < shapeNum + 1; i++) {
      for (let j = 0; j < shapeNum + 1; j++) {
        if (j * dist - dist > Y) break;
        const s = new Shape(ctx, i * dist, j * dist, i, j);
        shapes.push(s);
      }
    }

    function render() {
      ctx.clearRect(0, 0, X, Y);
      for (let i = 0; i < shapes.length; i++) {
        shapes[i].render(i);
      }
      requestAnimationFrame(render);
    }

    render();

    function onResize() {
      X = (canvas.width = window.innerWidth);
      Y = (canvas.height = window.innerHeight);
      shapes = [];
      shapeNum = X > Y ? X / dist : Y / dist;
      for (let i = 0; i < shapeNum + 1; i++) {
        for (let j = 0; j < shapeNum + 1; j++) {
          if (j * dist - dist > Y) break;
          const s = new Shape(ctx, i * dist, j * dist, i, j);
          shapes.push(s);
        }
      }
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return <canvas id="canvas" style={{ position: 'absolute', top: 0, left: 0 }}></canvas>;
}

export default Candy;
