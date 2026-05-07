"use client";

import { Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">
      <div className="flex justify-between items-center px-6 md:px-10 py-3 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center text-white font-bold">
          LAGA<span className="text-green-800 font-bold">GUE</span>
        </Link>

        {/* Menu + Search */}
        <div className="flex items-center gap-6">
          
          {/* Menu */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <li>
              <Link href="/artistes" className="hover:text-white transition">
                Artistes
              </Link>
            </li>
            <li>
              <Link href="/projets" className="hover:text-white transition">
                Projets
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
              </li>

              <li>
                 <Link href="/partenaires" className="hover:text-white transition">
                Partenaires
              </Link>
              </li>
          </ul>

          {/* Search */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search..."
              className="bg-zinc-900/50 border border-zinc-800 rounded-full py-1.5 px-4 pr-10 text-xs focus:outline-none focus:border-[#4ade80] w-36 md:w-40 transition-all group-hover:bg-zinc-900"
            />

            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          </div>

        </div>
      </div>
    </nav>
  );
}