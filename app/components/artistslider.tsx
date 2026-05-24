"use client";

const artists = [
  { name: "6XDM", image: "/images/manou2.jpeg" },
  { name: "Lil Flex", image: "/images/flex2.jpeg" },
  { name: "St Jesus", image: "/images/jesus.jpeg" },
  { name: "HtPrince", image: "/images/prince.jpeg" },
  { name: "Didi B", image: "/images/didi.jpg" },
];

export default function ArtistsSlider() {
  return (
    <section className="bg-black text-white py-10 overflow-hidden flex flex-col justify-items-center">
      
      {/* TITLE */}
      <div className="px-5 sm:px-6 md:px-10 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <span className="text-[#00ff66]">★</span>
          NOS ARTISTES
        </h2>
      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-5
          gap-4
          px-5
          sm:px-6
          md:px-10
          
        "
      >
        {artists.map((artist, index) => (
          <div
            key={index}
            className="
              bg-[#111]
              border
              border-zinc-800
              rounded-3xl
              overflow-hidden
              transition-all
              duration-500
              hover:scale-[1.03]
              hover:border-[#00ff66]
              hover:shadow-[0_0_25px_#00ff6690]
              cursor-pointer
            "
          >
            
            {/* IMAGE */}
            <div
              className="
                relative
                h-55
                sm:h-65
                md:h-80
                lg:h-90
                overflow-hidden
              "
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="
                  w-full
                  h-full
                  object-cover
                  object-top
                  transition-transform
                  duration-700
                  hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* NAME */}
            <div className="py-4 text-center">
              <h3 className="text-sm sm:text-base font-semibold">
                {artist.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}