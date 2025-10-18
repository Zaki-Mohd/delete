"use client";
import { useState } from "react";
import ModelViewer from "./ModelViewer.jsx";

const images = [
  "/img1.png",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg"
];

export default function Page() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  // Container size: same as 4 images together
  const imgWidth = 600; // width of one image
  const imgHeight = 400; // height of one image
  const gap = 16; // gap between images
  const containerWidth = imgWidth * 4 + gap * 3;

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Fullscreen 3D Model */}
      <ModelViewer url="/ani.glb" autoRotate={true} />

      {/* Carousel Overlay */}
      <div
        style={{
          width: containerWidth,
          height: imgHeight,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: `${gap}px`,
          zIndex: 20,
        }}
      >
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          style={{
            background: "rgba(255,255,255,0.5)",
            padding: "8px 12px",
            borderRadius: "999px",
            cursor: "pointer",
          }}
        >
          ◀
        </button>

        {/* Current Image */}
        <img
          src={images[current]}
          alt={`slide-${current}`}
          style={{
            width: imgWidth,
            height: imgHeight,
            objectFit: "cover",
            borderRadius: "8px",
            border: "2px solid white",
          }}
        />

        {/* Next Button */}
        <button
          onClick={nextSlide}
          style={{
            background: "rgba(255,255,255,0.5)",
            padding: "8px 12px",
            borderRadius: "999px",
            cursor: "pointer",
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
