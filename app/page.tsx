import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ServicesProcess from "@/components/ServicesProcess";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="bg-cream px-10 mt-10 ">
        <Intro />
      </main>
      <main className="bg-cream px-10 mt-10 ">
        <ServicesProcess />
      </main>
      <main className="bg-cream mt-10 ">
        <CTA />
      </main>
      <Footer />
    </>
  );
}
