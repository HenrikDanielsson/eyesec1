"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageCarousel() {
  const baseImages = [
    { id: 1, src: "/kunder/ahlens.png", alt: "Kund 1" },
    { id: 2, src: "/kunder/akavia.png", alt: "Kund 2" },
    { id: 3, src: "/kunder/breitling.png", alt: "Kund 3" },
    { id: 4, src: "/kunder/filadelfia.png", alt: "Kund 4" },
    { id: 5, src: "/kunder/jaguar.png", alt: "Kund 4" },
    { id: 6, src: "/kunder/webhallen.png", alt: "Kund 4" },
  ];

  const images = [...baseImages, ...baseImages];

  return (
    <div className="w-full overflow-hidden h-40 sm:h-40 relative">
      <div className="absolute top-0 left-0 flex animate-infinite-scroll">
        {images.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="w-20 h-20 sm:w-40 sm:h-40 mr-4 last:mr-0 flex-shrink-0 flex items-center justify-center bg-gray-100/80 rounded-lg"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={150}
              className="object-contain w-full h-full p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
