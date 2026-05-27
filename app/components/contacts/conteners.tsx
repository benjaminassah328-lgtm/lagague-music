"use client";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
export default function ContactForm() {
  return (
    <section
      className="
        min-h-screen
        bg-[#e9e9e9]
        flex
        items-center
        justify-center
        px-6
        py-20
        relative
        overflow-hidden
      "
    >
      {/* Décor vert */}
      <div className="absolute top-20 right-20 w-40 h-20 bg-green-400" />
      <div className="absolute bottom-20 left-14 w-52 h-24 bg-green-400" />

      {/* Container principal */}
      <div
        className="
          relative
          w-full
          max-w-6xl
          bg-[#070707]
          text-white
          px-10
          md:px-20
          py-16
          grid
          md:grid-cols-2
          gap-16
          shadow-2xl

          animate-[slideDown_1.2s_ease-out]
        "
        style={{
          animationFillMode: "forwards",
        }}
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">
          {/* Navbar */}
         
          {/* Texte */}
          <div>
            <h1 className="text-6xl font-bold leading-none mb-14">
              Contacter Nous
              <span className="text-green-400">.</span>
            </h1>

            <div className="flex gap-8">
              {/* Ligne verte */}
              <div className="w-1 bg-green-400 rounded-full" />

              {/* Infos */}
              <div className="space-y-12 text-zinc-300">
                <div>
                  <p className="text-zinc-500 mb-4">Localisation</p>

                  <p className="leading-8">
                    Cocody Abatta <br />
                    Abidjan, Côte d’Ivoire <br />
                    
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 mb-4">Contacts</p>

                  <p className="leading-8">
                    benjaminassah328@gmail.com <br />
                    +225 07 08 66 57 82
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-6 mt-20 text-zinc-400">
            <span><FaFacebook/></span>
            <span><BsInstagram/></span>
            <span><BsTiktok/></span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          {/* Bordures vertes */}
          <div className="absolute inset-0 border-l-4 border-t-4 border-green-400 w-20 h-20" />
          <div className="absolute top-0 right-0 border-r-4 border-t-4 border-green-400 w-20 h-20" />
          <div className="absolute bottom-0 left-0 border-l-4 border-b-4 border-green-400 w-20 h-20" />
          <div className="absolute bottom-0 right-0 border-r-4 border-b-4 border-green-400 w-20 h-20" />

          {/* Formulaire */}
          <div
            className="
              w-full
              max-w-md
              bg-[#1b1b1b]
              p-10
              shadow-2xl
            "
          >
            <h2 className="text-3xl font-bold mb-10 text-center">
              LAGA<span className="text-green-700">GOUE</span>
            </h2>

            <form className="space-y-10">
              {/* Name */}
              <div>
                <label className="text-zinc-500 uppercase text-sm">
                  Nom
                </label>

                <input
                  type="text"
                  placeholder="Mr Pavlov"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-zinc-700
                    py-4
                    text-2xl
                    outline-none
                    focus:border-green-400
                    transition-all
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-zinc-500 uppercase text-sm">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-zinc-700
                    py-4
                    text-lg
                    outline-none
                    focus:border-green-400
                    transition-all
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-zinc-500 uppercase text-sm">
                  Message
                </label>

                <textarea
                  rows={3}
                  placeholder="Votre message..."
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-zinc-700
                    py-4
                    resize-none
                    outline-none
                    focus:border-green-400
                    transition-all
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full
                  bg-green-400
                  text-black
                  font-bold
                  py-4
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}