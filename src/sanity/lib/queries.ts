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