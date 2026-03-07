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
  product1Title,
  product1Description,
  product1ButtonText,
  product1Image,

  product2Title,
  product2Description,
  product2Image,

  product3Title,
  product3Description,
  product3ButtonText,
  product3Image
}
`;