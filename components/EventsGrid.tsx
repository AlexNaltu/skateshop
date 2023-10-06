import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "events"] {
    _id,
    images,
    title,
    slug,
    description,
    locations,
    dates,
  }`;

  const data = await client.fetch(query);

  return data;
}
export default async function EventsGrid() {
  const data = (await getData()) as Event[];

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-10">
        {data.map((item) => (
          <div key={item._id}>
            <div className="max-w-[600px] mx-auto border-2 border-slate-800 shadow-xl p-6 h-full">
              <Link href={`/industry/${item.slug.current}`}>
                <Image
                  src={urlForImage(item.images[0]).url()}
                  alt="/"
                  width={500}
                  height={200}
                />
                <div className="flex flex-col gap-2 text-white">
                  <h1 className="text-white font-black my-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">{item.title}</h1>
                  <div className="text-sm sm:text-base lg:text-lg font-bold">
                    <p>{item.dates}</p>
                    <p>{item.locations}</p>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg">{item.description}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
