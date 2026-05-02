"use client";

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

      {/*  Bouton retour */}
      <div className="absolute top-15 left-6 z-20 ">
        <Link href="/artistes" className="text-sm opacity-80 hover:opacity-100">
          ← Retour aux artistes
        </Link>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black opacity-60 pointer-events-none"></div>

      {/* 🧩 Contenu principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 gap-10">

        {/* Image */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={artist.image || ""}
            alt={artist.name || ""}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Texte */}
        <div className="max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
            {artist.name}
          </h1>

          <p className="text-gray-300 leading-relaxed font-lora">
            {artist.description}
          </p>
        </div>
      </div>
    </div>
  );
}