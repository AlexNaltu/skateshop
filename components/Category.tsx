import { ShopData } from "@/lib/data/shopdata";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div className="my-8">
      <div className="flex-center flex-wrap px-6 sm:gap-7 space-y-0">
        {ShopData.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={item.title}
              width={280}
              height={0}
              className=" aspect-square grayscale"
            />
            <Link href={item.link}>
              <h1 className="translate-y-[-150%] text-white font-black text-xl border-4 w-fit mx-auto py-2 px-4">{item.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
