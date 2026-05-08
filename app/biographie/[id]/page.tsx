"use client";

import {
  MapPin,
  CalendarDays,
  Music,
  Music2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";


import { artists } from "@/app/data/artiste";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params.id;

  const artist = artists.find((ar) => ar.id == Number(id));

  if (!artist) {
    return <div className="text-white p-10">Artiste introuvable</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={artist.image || ""}
          alt={artist.name || ""}
          fill
          className="object-cover opacity-20 blur-sm"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Retour */}
      <div className="absolute top-5 left-4 md:left-6 z-30">
        <Link
          href="/artistes"
          className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux artistes
        </Link>
      </div>

      {/* Main */}
      <div className="relative z-20 min-h-screen flex items-center py-24 px-4 sm:px-6 md:px-10">
        
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[320px_1fr_180px] gap-10 xl:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="order-2 xl:order-1 space-y-6 text-center xl:text-left">
            
            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
                {artist.name}
              </h1>

              <div className="flex flex-wrap justify-center xl:justify-start gap-2 text-xs sm:text-sm text-zinc-400 mt-4">
                <span className="text-[#4ade80] font-semibold">
                  Rappeur
                </span>

                <span>•</span>

                <span>Auteur</span>

                <span>•</span>

                <span>Compositeur</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base max-w-lg mx-auto xl:mx-0">
              {artist.description}
            </p>

            {/* Infos */}
            <div className="space-y-4 text-sm text-zinc-300">
              
              <div className="flex items-center justify-center xl:justify-start gap-3">
                <MapPin className="w-4 h-4 text-[#4ade80]" />
                <span>{artist.localisation}</span>
              </div>

              <div className="flex items-center justify-center xl:justify-start gap-3">
                <CalendarDays className="w-4 h-4 text-[#4ade80]" />
                <span>{artist.actu}</span>
              </div>

              <div className="flex items-center justify-center xl:justify-start gap-3">
                <Music className="w-4 h-4 text-[#4ade80]" />
                <span>{artist.genre}</span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-xs sm:text-sm uppercase text-zinc-500 mb-4">
                Suivez {artist.name}
              </h3>

              <div className="flex justify-center xl:justify-start gap-3">
                
                <div className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#4ade80] hover:text-[#4ade80] transition cursor-pointer">
                  <Music2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center xl:justify-start">
              <button className="mt-2 bg-[#4ade80] hover:bg-[#38c96b] transition text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-3 text-sm sm:text-base">
                Voir les partenaires
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="order-1 xl:order-2 relative flex justify-center">
            
            <div className="relative w-[260px] h-[360px] sm:w-[340px] sm:h-[470px] md:w-[420px] md:h-[580px] lg:w-[500px] lg:h-[680px]">
              
              {/* Glow */}
              <div className="absolute inset-0 bg-[#4ade80]/20 blur-3xl rounded-full scale-90" />

              <Image
                src={artist.image || ""}
                alt={artist.name || ""}
                fill
                priority
                className="object-cover rounded-[30px] shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="order-3 hidden xl:flex flex-col gap-4">
            
            {[
              "Saluer",
              "Tourner",
              "S'asseoir",
              "Se lever",
              "Regarder",
            ].map((action, index) => (
              <div
                key={index}
                className={`rounded-2xl border ${
                  index === 0
                    ? "bg-[#4ade80] text-black border-[#4ade80]"
                    : "bg-black/40 border-zinc-800 text-zinc-300"
                } p-5 flex items-center justify-between transition hover:border-[#4ade80]`}
              >
                <span className="text-sm font-medium">{action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-20 px-4 pb-8 -mt-10 sm:-mt-6">
        
       <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 bg-black/70 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden">
  
 {artist.stream?.map(([value, label], index) => (
    <div
      key={index}
      className="py-5 sm:py-6 text-center border-b md:border-b-0 border-r even:border-r-0 md:even:border-r border-zinc-800"
    >
      <h3 className="text-2xl sm:text-3xl font-bold">
        {value}
      </h3>

      <p className="text-[10px] sm:text-xs text-zinc-500 mt-1 tracking-wider">
        {label}
      </p>
    </div>
  ))}
</div>



      </div>
    </div>
  );
}