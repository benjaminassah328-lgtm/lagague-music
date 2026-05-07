"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">
      <div className="flex justify-between items-center px-4 md:px-10 py-3 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center text-white font-bold text-lg">
          LAGA<span className="text-green-800 font-bold">GUE</span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-6">
          
          {/* Menu Desktop */}
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
              className="bg-zinc-900/50 border border-zinc-800 rounded-full py-1.5 px-4 pr-10 text-xs focus:outline-none focus:border-[#4ade80] w-28 md:w-40 transition-all group-hover:bg-zinc-900 text-white"
            />

            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          </div>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-6 pt-2 gap-4 text-sm font-medium text-zinc-300 bg-black/95 border-t border-zinc-800">
          <li>
            <Link
              href="/artistes"
              className="hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Artistes
            </Link>
          </li>

          <li>
            <Link
              href="/projets"
              className="hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Projets
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/partenaires"
              className="hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Partenaires
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}