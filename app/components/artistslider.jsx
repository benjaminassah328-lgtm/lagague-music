"use client";

import { useEffect, useRef } from "react";

const artists = [
  { name: "Daishikan", image: "/images/arafat.jpg" },
  { name: "Serge Beynaud", image: "/images/beno.jpg" },
  { name: "Didi B", image: "/images/didi.jpg" },
  { name: "Sindika", image: "/images/sindi.jpg" },
  { name: "Himra", image: "/images/himra.jpg" },
  { name: "Dadju", image: "/images/dadju.jpg" },
];

export default function ArtistsSlider() {
  const sliderRef = useRef(null);

  // 🔥 Animation automatique
  useEffect(() => {
    const slider = sliderRef.current;

    let scrollAmount = 0;

    const slide = () => {
      if (!slider) return;

      scrollAmount += 1;
      slider.scrollLeft = scrollAmount;

      // 🔁 Reset fluide
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(slide, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-10 px-4">
      <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <span className="text-green-400">★</span> NOS ARTISTES
      </h2>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide"
      >
        {[...artists, ...artists].map((artist, index) => (
          <div
            key={index}
            className="min-w-40 bg-[#111] rounded-xl overflow-hidden border border-gray-700 hover:scale-105 transition duration-300"
          >
            <div className="relative h-50">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center py-3 text-sm font-semibold">
              {artist.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}