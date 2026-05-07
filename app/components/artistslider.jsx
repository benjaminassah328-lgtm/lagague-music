"use client";

const artists = [
  { name: "Daishikan", image: "/images/arafat.jpg" },
  { name: "Serge Beynaud", image: "/images/beno.jpg" },
  { name: "Didi B", image: "/images/didi.jpg" },
  { name: "Sindika", image: "/images/sindi.jpg" },
  { name: "Himra", image: "/images/himra.jpg" },
  { name: "Dadju", image: "/images/dadju.jpg" },
];

export default function ArtistsSlider() {
  return (
    <section className="bg-black text-white py-10 overflow-hidden">
      
      {/* Title */}
      <div className="px-4 md:px-8 mb-6">
        <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <span className="text-green-400">★</span> NOS ARTISTES
        </h2>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        
        {/* Track */}
        <div className="flex w-max animate-scroll gap-4">
          {[...artists, ...artists].map((artist, index) => (
            <div
              key={index}
              className="min-w-40 sm:min-w-45 md:min-w-55 bg-[#111] rounded-2xl overflow-hidden border border-zinc-800 hover:scale-[1.03] transition duration-300"
            >
              
              {/* Image */}
              <div className="h-56 sm:h-64 md:h-72">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <div className="text-center py-4 text-sm md:text-base font-semibold">
                {artist.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}