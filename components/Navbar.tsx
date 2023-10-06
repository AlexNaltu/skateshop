import Image from "next/image";
import React from "react";
import { Ubuntu_Mono } from "next/font/google";
import Link from "next/link";

const ubunu = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  return (
    <div className="flex justify-around items-center border-b-2 border-slate-300">
      <div className="flex items-center gap-3">
        <Image
          src="/skateboard.png"
          alt="/"
          width={90}
          height={50}
        />
        <h1 className={`${ubunu.className} flex flex-col text-2xl font-[700]`}>
          SKATE STORE <span className="text-sm font-[400]">SKATE.STORE.COM</span>{" "}
        </h1>
      </div>
      <nav className={`${ubunu.className} hidden sm:inline-flex gap-5 md:gap-10 text-xs md:text-base font-lg`}>
        <Link href="/">SKATE</Link>
        <Link href="/">SHOP</Link>
        <Link href="/">PROMO</Link>
        <Link href="/industry">EVENTS</Link>
        <Link href="/team">TEAM</Link>
        <Link href="/">CONTACT</Link>
      </nav>
    </div>
  );
};

export default Navbar;
