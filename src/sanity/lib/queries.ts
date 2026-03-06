import { groq } from "next-sanity";

export const heroQuery = groq`
*[_type == "mainHero"][0]{
  backgroundImage,
  productImage,
  heading,
  subHeading,
  tagline,
  buttonText,
  buttonLink
}
`;

export const section2Query = groq`
*[_type == "mainSection2"] | order(_createdAt desc)[0]{
  backgroundImage,
  heading,
  categories[]{
    title,
    description,
    buttonText,
    buttonLink
  },
  products[]{
    name,
    description,
    image,
    buttonText,
    buttonLink
  }
}
`;