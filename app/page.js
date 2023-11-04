import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solution from "@/components/Solution";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import Work from "@/components/Work";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Solution />
      <Services />
      <Work />
      <Reviews />
      <Blog />
      <Footer />
    </>
  );
}
