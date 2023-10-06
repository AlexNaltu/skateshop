import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "events" && slug.current == "${slug}"][0] {
    mainimage,
    title,
    description,
    slug,
      
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({ params }: { params: { slug: string } }) {
  const data = (await getData(params.slug)) as Event;

  return (
    <div>
      <div>
        <div className="max-w-[1000px] mx-auto">
          <div className="absolute" />
          <Image
            src={urlForImage(data.mainimage[0]).url()}
            alt="/"
            width={1000}
            height={1000}
          />
          <p className=" translate-y-[-200%] text-white font-bold text-2xl text-center">{data.title}</p>
        </div>
      </div>
    </div>
  );
}
