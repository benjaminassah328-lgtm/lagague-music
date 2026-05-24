import Sidebar from "@/app/components/layout/sidebar";

export default function HomePage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white flex overflow-hidden m-10 justify-center">
            <aside
                className=" w-65 border-r  border-zinc-800 bg-[#0b0b0b] overflow-y-auto fill"
            >
                <Sidebar />
            </aside>
            <div
                className="
    ml-65
    min-h-screen
    flex
    items-center
    justify-center
    px-20
  "
            >

                {/* WRAPPER */}
                <div className="flex items-center justify-between  max-w-350">

                    {/* IMAGE */}
                    <div className="flex justify-center flex-1">
                      
                    </div>
                </div>

               



            </div>


        </main>
    );
}