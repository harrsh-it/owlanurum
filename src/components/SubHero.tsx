import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { section2Query } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function SubHero() {

  const data = await client.fetch(section2Query);

  if (!data) return null;

  return (
    <section className="relative w-full py-5 px-6 md:px-20">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {data.backgroundImage && (
          <Image
            src={urlFor(data.backgroundImage).url()}
            alt="bg"
            width={1920}
            height={1080}
            className="object-cover"
          />
        )}
      </div>

      {/* Heading */}
      <div className="flex items-center justify-center gap-6 mb-1">
        <div className="h-0.5 w-24 bg-[#c89a53]" />
        <h2 className="text-xl md:text-3xl font-serif text-[#5b4a3b]">
          {data.heading}
        </h2>
        <div className="h-0.5 w-24 bg-[#c89a53]" />
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 gap-8 mb-10 px-30">

        {data.categories?.map((cat: any, index: number) => (
          <div key={index} className="p-4 flex justify-center">
            <div>
              <h3 className="text-3xl font-serif text-center text-[#3d3328] mb-2">
                {cat.title}
              </h3>

              <p className="text-sm text-[#6d5c4c] text-center font-semibold max-w-xs mb-3">
                {cat.description}
              </p>

              <div className="w-80 flex justify-center">
                <a href={cat.buttonLink}>
                  <button className="px-6 py-2 border-2 font-semibold border-[#c89a53] text-[#6d5c4c] text-sm tracking-widest hover:bg-[#c89a53] hover:text-white transition">
                    {cat.buttonText} →
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Products */}
      <div className="grid md:grid-cols-3 gap-12 text-center">

        {data.products?.map((product: any, index: number) => (
          <div key={index} className="flex flex-col items-center">

            <h4 className="text-sm tracking-widest font-bold text-[#5b4a3b]">
              {product.name}
            </h4>

            <p className="text-sm text-[#6d5c4c] mb-4">
              {product.description}
            </p>

            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={150}
                height={120}
                className="object-contain"
              />
            )}

            {product.buttonText && (
              <a href={product.buttonLink}>
                <button className="bg-[#c89a53] text-white px-6 py-2 text-sm tracking-widest mt-4">
                  {product.buttonText}
                </button>
              </a>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}