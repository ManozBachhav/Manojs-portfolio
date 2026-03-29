import React, { useEffect, useRef } from "react";
import "./Live2DModel.scss";

const Live2DCharacter = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let app = null;
    let handleMouseMove = null;

    const loadModel = async () => {
      try {
        console.log("⏳ Loading PIXI...");
        const PIXI = await import("pixi.js");
        console.log("✅ PIXI loaded");

        const { Live2DModel } = await import("pixi-live2d-display");
        console.log("✅ pixi-live2d-display loaded");

        Live2DModel.registerTicker(PIXI.Ticker);

        const canvasWidth = 240;
        const canvasHeight = 390;
        app = new PIXI.Application({
          view: canvasRef.current,
          autoStart: true,
          backgroundAlpha: 0,
          width: canvasWidth,
          height: canvasHeight,
          resolution: window.devicePixelRatio || 1,
        });

        console.log("⏳ Loading model...");
        const model = await Live2DModel.from(
          "/models/Haru/Haru.model3.json"
        );
        console.log("✅ Model loaded!");

        model.anchor.set(0.5, 0.5);
        model.scale.set(0.20);
        model.rotation = 0;
        model.x = canvasWidth * 0.40;
        model.y = canvasHeight * 1.3;

        app.stage.addChild(model);

        handleMouseMove = (e) => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          const rect = canvas.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * canvasWidth;
          const y = ((e.clientY - rect.top) / rect.height) * canvasHeight;
          model.focus(x, y);
        };

        window.addEventListener("mousemove", handleMouseMove);
      } catch (err) {
        console.error("❌ Error:", err.message);
      }
    };

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // skip if already loaded
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const init = async () => {
      try {
        await loadScript("/live2d.min.js");
        console.log("✅ Cubism 2 runtime loaded");
        await loadScript("/cubism4.min.js");
        console.log("✅ Cubism 4 runtime loaded");
        await loadModel();
      } catch (err) {
        console.error("❌ Script load failed:", err);
      }
    };

    init();

    return () => {
      if (handleMouseMove) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (app) {
        app.destroy(true, { children: true });
      }
    };
  }, []);

  return (
    <div className="live2d-wrapper">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Live2DCharacter;