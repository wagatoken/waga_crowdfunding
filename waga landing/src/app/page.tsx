
import Hero from "@/components/Hero";
import Partners from "@/components/Partner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empowering Coffee's Future - WAGA Token",
  description: "WAGA tokenizes coffee on blockchain, ensuring transparency, supporting farmers, and connecting global buyers. Join the revolution in reshaping the coffee industry with WAGA Token.",
};

export default function Home() {
  

  return (
    <main>
      <Hero />
      <Partners />
    </main>
  );
}
