import { useEffect, useRef } from "react";

export default function Silk({
  speed = 5,
  scale = 1,
  color = "#b885e4",
  noiseIntensity = 1.5,
  rotation = 0,
  className = "",
  style = {},
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth || 1080;
        canvas.height = parent.clientHeight || 260;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    // Convert hex color to RGB
    const hexToRgb = (hex) => {
      let c = hex.replace("#", "");
      if (c.length === 3) c = c.split("").map((x) => x + x).join("");
      const num = parseInt(c, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      };
    };

    const rgb = hexToRgb(color);

    const render = () => {
      time += 0.005 * speed;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Create rich deep background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#180e29");
      bgGrad.addColorStop(0.5, "#2b1448");
      bgGrad.addColorStop(1, "#12081f");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render 5 silky flowing ribbons
      const ribbonCount = 5;
      for (let r = 0; r < ribbonCount; r++) {
        ctx.beginPath();
        const offset = r * 0.8;
        const opacity = (0.2 + (r / ribbonCount) * 0.4) * (noiseIntensity / 1.5);

        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;

        const startY = height * 0.3 + Math.sin(time + offset) * 30;
        ctx.moveTo(0, startY);

        for (let x = 0; x <= width; x += 10) {
          const normX = x / width;
          const wave1 = Math.sin(normX * 4 * scale + time + offset) * 35;
          const wave2 = Math.cos(normX * 6 * scale - time * 0.7 + offset * 1.5) * 20;
          const y = height * 0.5 + wave1 + wave2 + (r - 2) * 25;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
      }

      // Add soft silky glow overlay
      const radialGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        10,
        width * 0.5,
        height * 0.5,
        width * 0.6
      );
      radialGrad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)`);
      radialGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, scale, color, noiseIntensity, rotation]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className}`}
      style={style}
    />
  );
}
