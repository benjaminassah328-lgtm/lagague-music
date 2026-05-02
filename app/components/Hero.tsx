"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-between px-6 md:px-16 py-10 overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Overlay sombre + gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

      
      {/* 🔥 CONTENU PRINCIPAL */}
      <div className="relative z-10 max-w-xl mt-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          LA NOUVELLE <br />
          <span className="text-[#4ade80]">GÉNÉRATION</span> <br />
          D’ARTISTES
        </h1>

        <p className="text-zinc-300 mt-6 text-sm md:text-base">
          Talents. Passions. Créations. <br />
          De Abidjan à la scène mondiale.
        </p>

        {/* 🔘 BOUTONS */}
        <div className="flex gap-4 mt-8">
          <Link href="/artistes" className="bg-[#4ade80] text-black px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
            Découvrir les artistes
          </Link>

          <Link href="/projets" className="border border-zinc-600 px-6 py-2 rounded-full text-sm text-white hover:border-[#4ade80] hover:text-[#4ade80] transition">
            Voir les projets
          </Link>
        </div>

        {/* ▶️ AUDIO */}
        <div className="flex items-center gap-3 mt-8 text-zinc-300 text-sm">
          <div className="w-10 h-10 flex items-center justify-center border border-zinc-600 rounded-full">
            ▶
          </div>
          <span>Écouter notre univers</span>
        </div>
      </div>

      
      
    </section>
  );
};

export default Hero;