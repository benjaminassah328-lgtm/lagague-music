"use client";

import Link from "next/link";
import {
    FiCoffee,
    FiShoppingBag,
    FiAward,
    FiUsers,
    FiArrowUpRight,

} from "react-icons/fi";
import {
    SportShoe,
    BriefcaseBusiness,

} from "lucide-react";

export default function Sidebar() {
    return (
        <div className="">
            <aside
                className="
        w-[260px]
        h-sreen
        bg-[#0b0b0b]
        border-transparent 
        p-10
        fixed
        left-0
        top-0
        flex
        flex-col
        justify-center
        mt-8
        gap-6
    
      "
            >


                <div>

                    {/* LOGO */}
                    <Link href="/" className="block mb-10">
                        <h1 className="text-3xl font-bold">
                            LAGA<span className="text-green-600">GOUE</span>
                        </h1>
                    </Link>

                    {/* TITLE */}
                    <p className="text-zinc-500 text-sm uppercase mb-5 font-bold font-lora">
                        Nos partenaires
                    </p>

                    {/* MENU */}
                    <div className="space-y-3">

                        {/* ITEM */}
                        <Link
                            href="/partenaires/boissons"
                            className="
              flex
              items-center
              gap-3
              border
              border-zinc-800
              hover:border-lime-500
              hover:bg-lime-500/20
              hover:text-lime-400
              px-4
              py-4
              rounded-2xl
              transition-all
              duration-300
            "
                        >
                            <FiCoffee className="text-xl" />
                            Boissons
                        </Link>
                        {/* ITEM */}
                        <Link
                            href="/partenaires/chaussures"
                            className="
              flex
              items-center
              gap-3
              border
              border-zinc-800
              hover:border-lime-500
              hover:bg-lime-500/20
              hover:text-lime-400
              px-4
              py-4
              rounded-2xl
              transition-all
              duration-300
            "
                        >
                            <SportShoe className="text-xl" />
                            Chaussures
                        </Link>

                        {/* ITEM */}
                        <Link
                            href="/partenaires/vetements"
                            className="
              flex
              items-center
              gap-3
              border
              border-zinc-800
              hover:border-lime-500
              hover:bg-lime-500/20
              hover:text-lime-400
              px-4
              py-4
              rounded-2xl
              transition-all
              duration-300
            "
                        >
                            <FiShoppingBag className="text-xl" />
                            Vêtements
                        </Link>


                        {/* ITEM */}
                        <Link
                            href="/partenaires/accessoires"
                            className="
              flex
              items-center
              gap-3
              border
              border-zinc-800
              hover:border-lime-500
              hover:bg-lime-500/20
              hover:text-lime-400
              px-4
              py-4
              rounded-2xl
              transition-all
              duration-300
            "
                        >
                            <BriefcaseBusiness className="text-xl" />
                            Accesoires
                        </Link>
                        {/* ITEM */}
                        <Link
                            href="/marques"
                            className="
              flex
              items-center
              gap-3
              border
              border-zinc-800
              hover:border-lime-500
              hover:bg-lime-500/20
              hover:text-lime-400
              px-4
              py-4
              rounded-2xl
              transition-all
              duration-300
            "
                        >
                            <FiAward className="text-xl" />
                            Marques
                        </Link>


                        {/* ITEM */}
                        <Link
                            href="/collaborations"
                            className="
              flex
              items-center
              gap-3
              border
              border-zinc-800
              hover:border-lime-500
              hover:bg-lime-500/20
              hover:text-lime-400
              px-4
              py-4
              rounded-2xl
              transition-all
              duration-300
            "
                        >
                            <FiUsers className="text-xl" />
                            Collaborations
                        </Link>

                    </div>
                </div>

                {/* ================================================= */}
                {/* GAP 200 */}
                {/* ================================================= */}
                <div className="h-[200px]" />

                {/* ================================================= */}
                {/* BOTTOM */}
                {/* ================================================= */}
                <div
                    className="
          border
          border-zinc-800
          rounded-3xl
          p-5
          bg-[#101010]
        "
                >

                    <h3 className="text-xl font-semibold mb-3">
                        Prêt à collaborer ?
                    </h3>

                    <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                        Boostez votre marque avec la nouvelle génération.
                    </p>

                    {/* BUTTON */}
                    <button
                        className="
            w-full
            flex
            items-center
            justify-between
            border
            border-zinc-800
            hover:border-lime-500
            hover:bg-lime-500/20
            hover:text-lime-400
            px-4
            py-3
            rounded-2xl
            transition-all
            duration-300
          "
                    >
                        <button className="font-semibold ">
                            Devenir partenaire
                        </button>

                        <FiArrowUpRight className="text-xl" />
                    </button>

                </div>

            </aside>
        </div>
    );
}