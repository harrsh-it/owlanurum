export const revalidate = 60
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
    </>
  );
}
