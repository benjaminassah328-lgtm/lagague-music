"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
          LA NOUVELLE <br />
          <span className="text-[#4ade80]">GÉNÉRATION</span> <br />
          D’ARTISTES
        </h1>

        {/* Description */}
        <p className="text-zinc-300 mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
          Talents. Passions. Créations. <br />
          De Abidjan à la scène mondiale.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          
          <Link
            href="/artistes"
            className="bg-[#4ade80] text-black px-6 py-3 rounded-full text-sm md:text-base font-medium hover:scale-105 transition text-center"
          >
            Découvrir les artistes
          </Link>

          <Link
            href="/projets"
            className="border border-zinc-600 px-6 py-3 rounded-full text-sm md:text-base text-white hover:border-[#4ade80] hover:text-[#4ade80] transition text-center"
          >
            Voir les projets
          </Link>
        </div>

        {/* Audio */}
        <div className="flex items-center gap-3 mt-8 text-zinc-300 text-sm sm:text-base">
          
          <div className="w-10 h-10 flex items-center justify-center border border-zinc-600 rounded-full hover:border-[#4ade80] transition cursor-pointer">
            ▶
          </div>

          <span>Écouter notre univers</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;