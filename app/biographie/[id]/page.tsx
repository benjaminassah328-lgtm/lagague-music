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
      
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={artist.image || ""}
          alt={artist.name || ""}
          fill
          className="object-cover opacity-30 blur-[2px]"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* Retour */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          href="/artistes"
          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux artistes
        </Link>
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center px-4 md:px-10 py-20">
        
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr_180px] gap-8 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">
            
            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
                {artist.name}
              </h1>

              <div className="flex gap-3 text-sm text-zinc-400 mt-3">
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
            <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
              {artist.description}
            </p>

            {/* Infos */}
            <div className="space-y-4 text-sm text-zinc-300">
              
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#4ade80]" />
                <span>{artist.localisation}</span>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays className="w-4 h-4 text-[#4ade80]" />
                <span>{artist.actu}</span>
              </div>

              <div className="flex items-center gap-3">
                <Music className="w-4 h-4 text-[#4ade80]" />
                <span>{artist.genre}</span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-sm uppercase text-zinc-500 mb-4">
                Suivez {artist.name}
              </h3>

              <div className="flex gap-3">
                
               

                <div className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#4ade80] hover:text-[#4ade80] transition cursor-pointer">
                  <Music2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="mt-4 bg-[#4ade80] hover:bg-[#38c96b] transition text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3">
              Voir les partenaires
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center">
            
            <div className="relative w-[280px] h-[400px] sm:w-[380px] sm:h-[520px] md:w-[500px] md:h-[650px]">
              
              {/* Glow */}
              <div className="absolute inset-0 bg-[#4ade80]/20 blur-3xl rounded-full scale-90" />

              <Image
                src={artist.image || ""}
                alt={artist.name || ""}
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="hidden lg:flex flex-col gap-4">
            
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

      {/* Bottom stats */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-2xl">
        
        <div className="grid grid-cols-4 bg-black/70 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden">
          
          {[
            ["15+", "TITRES"],
            ["5M+", "STREAMS"],
            ["3", "ALBUMS"],
            ["12", "COLLABS"],
          ].map(([value, label], index) => (
            <div
              key={index}
              className="py-5 text-center border-r last:border-r-0 border-zinc-800"
            >
              <h3 className="text-2xl md:text-3xl font-bold">{value}</h3>
              <p className="text-xs text-zinc-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}