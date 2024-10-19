import React, { useEffect, useRef } from 'react';

const FireflyCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    class Firefly {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 3 + 1; // Adjusted size for better visibility
        this.ang = Math.random() * 2 * Math.PI;
        this.v = this.s * this.s / 4;
      }

      move() {
        this.x += this.v * Math.cos(this.ang);
        this.y += this.v * Math.sin(this.ang);
        this.ang += Math.random() * (Math.PI / 9) - (Math.PI / 18);
      }

      show() {
        c.beginPath();
        c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        c.fillStyle = "#fddba3"; // Firefly color
        c.fill();
      }
    }

    let f = [];

    function draw() {
      if (f.length < 100) {
        for (let j = 0; j < 10; j++) {
          f.push(new Firefly());
        }
      }
      for (let i = 0; i < f.length; i++) {
        f[i].move();
        f[i].show();
        if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
          f.splice(i, 1);
        }
      }
    }

    function loop() {
      c.clearRect(0, 0, w, h);
      draw();
      window.requestAnimationFrame(loop);
    }

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    loop();
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default FireflyCanvas;
