


export default function HeroPArt (){
    return(
        
      <section
        className="
          flex-1
          flex
          items-center
          justify-center
          relative
          overflow-hidden
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            w-175
            h-175
            blur-[160px]
            rounded-full
          "
        />

        {/* IMAGE + TEXTE */}
        <div className="relative z-10 flex flex-col items-center">

          <img
  src="/images/arafat.jpg"
  alt="DJ Arafat"
  className="
    w-100
    h-60
    rounded-3xl
    border-transparent
    shadow-2xl
  "
/>

          <div className="text-center mt-5 max-w-xl flex flex-col items-center">

           <h1 className="text-5xl font-bold mb-3 leading-none">
  DJ Arafat
</h1>

<p className="text-zinc-400 text-base leading-relaxed max-w-md font-bold font-lora ">
  Icône de la musique urbaine africaine.
  Une énergie puissante qui inspire
  toute une génération.
</p>
          </div>

        </div>

      </section>

    )
}