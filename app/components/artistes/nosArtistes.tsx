"use client";

import { useState } from "react";
import Image from "next/image";
import { artists } from "@/app/data/artiste";
import Link from "next/link";


export default function NosArtistes() {
  const [search, setSearch] = useState("");

  const filtered = artists.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0d0f14] px-3 py-6 mt-10">
      {/* Titre */}
      <h1 className="text-white text-center text-xl font-bold mb-4 tracking-wide">
        Nos Artistes
      </h1>

      {/* Barre de recherche */}
      <div className="flex items-center gap-2 bg-[#1a1c25] border border-[#2c2f3e] rounded-lg px-3 py-2.5 mb-5">
        <svg
          className="w-4 h-4 text-[#555] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          type="text"
          placeholder="Rechercher un artiste..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-white text-sm w-full placeholder:text-[#555]"
        />
      </div>

      {/* Grille */}
      <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto">
        {filtered.map((artist) => (
          <div
            key={artist.id}
            className="bg-[#1a1c25] rounded-2xl overflow-hidden border border-[#2c2f3e] hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Image optimisée */}
            <div className="relative w-full aspect-4/5">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Contenu */}
            <div className="px-3 pt-2 pb-3">
              <p className="text-white text-sm font-semibold mb-2">
                {artist.name}
              </p>

              <Link href={"/biographie/"+artist.id} className="flex items-center justify-between w-full bg-[#0e2b1a] hover:bg-[#163d26] transition-colors text-[#2ecc71] text-xs font-semibold px-3 py-2 rounded-lg">
                Voir la biographie

                <span className="w-5 h-5 rounded-full bg-[#2ecc71] flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-[#0e2b1a]"
                    viewBox="0 0 8 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 1l3 3-3 3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-2 text-center text-[#555] text-sm py-10">
            Aucun artiste trouvé.
          </p>
        )}
      </div>
    </div>
  );
}
