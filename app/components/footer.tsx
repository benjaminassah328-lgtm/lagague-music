import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-center gap-8 mt-12 pb-10">
      <a href="#" className="text-zinc-600 hover:text-white transition">
        <FaInstagram size={20} />
      </a>
      <a href="#" className="text-zinc-600 hover:text-white transition">
        <FaTwitter size={20} />
      </a>
      <a href="#" className="text-zinc-600 hover:text-white transition">
        <FaYoutube size={20} />
      </a>
    </div>
  );
}