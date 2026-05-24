"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Conteners() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [messageClient, setMessageClient] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Bonjour Lagague Music,%0A%0A
Nom: ${nom}%0A
Email: ${email}%0A
Message: ${messageClient}`;

    const url = `https://wa.me/2250709294468?text=${message}`;

    window.open(url, "_blank");

    setNom("");
    setEmail("");
    setMessageClient("");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/didi.jpg"
          alt="background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-20">
        
        <div
          className="
            w-full
            max-w-7xl
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
          "
        >
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            <div>
              <p className="uppercase text-[#4ade80] tracking-[0.3em] text-xs font-semibold mb-4">
                Contact
              </p>

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  leading-tight
                "
              >
                PARLONS DE <br />
                <span className="text-[#4ade80]">
                  MUSIQUE
                </span>
              </h1>
            </div>

            <p className="text-zinc-300 leading-8 max-w-xl text-sm sm:text-base">
              Une collaboration ? Une question ? 
              Une proposition artistique ?
              Notre équipe est disponible pour discuter
              de vos projets et collaborations musicales.
            </p>

            {/* INFOS */}
            <div className="space-y-5">
              
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-zinc-700
                    flex
                    items-center
                    justify-center
                    text-[#4ade80]
                  "
                >
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Email
                  </p>

                  <p className="font-medium">
                    contact@lagaguemusic.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-zinc-700
                    flex
                    items-center
                    justify-center
                    text-[#4ade80]
                  "
                >
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Téléphone
                  </p>

                  <p className="font-medium">
                    +225 07 09 29 44 68
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-zinc-700
                    flex
                    items-center
                    justify-center
                    text-[#4ade80]
                  "
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Localisation
                  </p>

                  <p className="font-medium">
                    Abidjan, Côte d’Ivoire
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORMULAIRE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              bg-white/5
              border
              border-zinc-800
              backdrop-blur-xl
              rounded-[30px]
              p-6
              sm:p-8
              shadow-2xl
            "
          >
            
            {/* LOGO */}
            <div className="flex justify-center mb-8">
              
              <div
                className="
                  relative
                  w-28
                  h-28
                  rounded-3xl
                  overflow-hidden
                "
              >
                
                {/* BORDER ANIMÉ */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl
                    p-0.5
                    bg-[conic-gradient(from_0deg,#4ade80,transparent,#4ade80)]
                    animate-spinSlow
                  "
                />

                {/* IMAGE */}
                <div className="absolute inset-0.5 rounded-3xl overflow-hidden">
                  <Image
                    src="/images/manou.jpeg"
                    alt="logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-2">
              Contactez-nous
            </h2>

            <p className="text-zinc-400 text-center mb-8 text-sm">
              Réponse rapide via WhatsApp
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              
              {/* NOM */}
              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Nom
                </label>

                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Votre nom"
                  required
                  className="
                    w-full
                    bg-zinc-900/70
                    border
                    border-zinc-800
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    outline-none
                    focus:border-[#4ade80]
                    transition
                  "
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="
                    w-full
                    bg-zinc-900/70
                    border
                    border-zinc-800
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    outline-none
                    focus:border-[#4ade80]
                    transition
                  "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Message
                </label>

                <textarea
                  rows={5}
                  value={messageClient}
                  onChange={(e) =>
                    setMessageClient(e.target.value)
                  }
                  placeholder="Votre message..."
                  required
                  className="
                    w-full
                    bg-zinc-900/70
                    border
                    border-zinc-800
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    outline-none
                    resize-none
                    focus:border-[#4ade80]
                    transition
                  "
                />
              </div>

              {/* BTN */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="
                  w-full
                  bg-[#4ade80]
                  hover:bg-[#38c96b]
                  transition
                  text-black
                  font-semibold
                  py-4
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                Envoyer le message

                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}