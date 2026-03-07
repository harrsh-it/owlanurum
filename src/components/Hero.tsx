// import Image from "next/image"
// import { Search, ShoppingBag } from "lucide-react"


// export default  function Hero() {


//   return (
//     <section className="relative w-full pb-5  overflow-hidden">

//       {/* Background Image */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src="/images/bgImage.png"   // background texture
//           alt="background"
//           width={1920}
//           height={1080}
//           className=" object-cover"
//         />
//       </div>

//       {/* NAVBAR */}
//       <nav className="flex items-center justify-between px-6 md:px-30 py-2 text-[#6b5b4b]">

//         {/* Left Nav */}
//         <div className="hidden md:flex gap-10 text-xl font-semibold w-lg tracking-wide border-b-2 border-[#c8a46b] pb-3">
//           <a className="hover:text-black cursor-pointer">Home</a>
//           <a className="hover:text-black cursor-pointer">Shop</a>
//           <a className="hover:text-black cursor-pointer">Our Philosophy</a>
//           <a className="hover:text-black cursor-pointer">Contact</a>
//         </div>

//         {/* Logo */}
//         <div className="flex flex-col items-center  ">
//           <Image
//             src="/images/logo.png"
//             alt="logo"
//             width={200}
//             height={200}
//           />
//         </div>

//         {/* Right Icons */}
//         <div className="flex justify-end gap-5 w-lg border-b-2 border-[#c8a46b] pb-3  ">
//           <Search size={30} />
//           <ShoppingBag size={30} />
//         </div>
//       </nav>

//       {/* HERO CONTENT */}
//       <div className="grid md:grid-cols-2 items-center px-6 md:px-16">

//         {/* LEFT PRODUCT IMAGE */}
//         <div className="flex justify-center md:justify-start ml-50">
//           <Image
//             src="/images/product.png"
//             alt="product"
//             width={265}
//             height={270}
//             className="object-contain"
//           />
//         </div>

//         {/* RIGHT TEXT */}
//         <div className="text-center md:text-left mt-10 md:mt-0">

//           <h2 className="text-4xl md:text-5xl font-serif text-[#3d3328] leading-tight">
//             Botanical Alchemy <br />
//             <span className="italic font-light">
//               for Timeless Radiance
//             </span>
//           </h2>

//           <p className="mt-6 text-[#6d5c4c] text-lg">
//             Thoughtfully formulated. Visibly effective.
//           </p>

//           <button className="mt-8 px-8 py-4 bg-linear-to-l from-[#c89a53] to-[#321f02] text-white tracking-widest text-sm hover:opacity-90 transition">
//             EXPLORE THE COLLECTION →
//           </button>

//         </div>

//       </div>
//     </section>
//   )
// }


import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { heroQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Hero() {

  const data = await client.fetch(heroQuery, {}, { cache: "no-store" });

   if (!data) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <section className="relative w-full pb-5 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={urlFor(data.backgroundImage).url()}
          alt="background"
          width={1920}
          height={1080}
          className="object-cover"
        />
      </div>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-30 py-2 text-[#6b5b4b]">

        {/* Left Nav */}
        <div className="hidden md:flex gap-10 text-xl font-semibold w-lg tracking-wide border-b-2 border-[#c8a46b] pb-3">
          <a className="hover:text-black cursor-pointer">Home</a>
          <a className="hover:text-black cursor-pointer">Shop</a>
          <a className="hover:text-black cursor-pointer">Our Philosophy</a>
          <a className="hover:text-black cursor-pointer">Contact</a>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>

        {/* Right Icons */}
        <div className="flex justify-end gap-5 w-lg border-b-2 border-[#c8a46b] pb-3">
          <Search size={30} />
          <ShoppingBag size={30} />
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="grid md:grid-cols-2 items-center px-6 md:px-16">

        {/* LEFT PRODUCT IMAGE */}
        <div className="flex justify-center md:justify-start ml-50">
          <Image
            src={urlFor(data.productImage).url()}
            alt="product"
            width={265}
            height={270}
            className="object-contain"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-center md:text-left mt-10 md:mt-0">

          <h2 className="text-4xl md:text-5xl font-serif text-[#3d3328] leading-tight">
            {data.heading}
            <br />
            <span className="italic font-light">
              {data.subHeading}
            </span>
          </h2>

          <p className="mt-6 text-[#6d5c4c] text-lg">
            {data.tagline}
          </p>

          <a href={data.buttonLink}>
            <button className="mt-8 px-8 py-4 bg-linear-to-l from-[#c89a53] to-[#321f02] text-white tracking-widest text-sm hover:opacity-90 transition">
              {data.buttonText} →
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}