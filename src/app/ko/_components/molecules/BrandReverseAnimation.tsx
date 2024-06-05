"use client";
import React from "react";

export default function BrandAnimation() {
  const images = Array.from({ length: 8 }, (_, i) => `/brand/${i + 1}.png`);
  const totalImages = images.length;
  const duplicateImages = [...images, ...images]; // 이미지 배열을 복제합니다.

  return (
    <div
      className="swiper-container"
      style={{ overflow: "hidden", width: "100%" }}
    >
      <div className="continuous-slider">
        {duplicateImages.map((src, index) => (
          <div key={index} className="slide">
            <img
              src={src}
              alt={`Brand Icon ${(index % totalImages) + 1}`}
              style={{ width: "192px", height: "80px" }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .continuous-slider {
          display: flex;
          white-space: nowrap;
          animation: slideReverse 20s linear infinite;
        }

        .slide {
          flex: 0 0 auto;
          width: 192px; // 슬라이드의 너비를 고정
        }

        @keyframes slideReverse {
          from {
            transform: translateX(-${192 * totalImages}px);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
