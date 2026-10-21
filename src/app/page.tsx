import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Differentials from "@/components/Differentials";
import Cases from "@/components/Cases";
import Leadership from "@/components/Leadership";
import Team from "@/components/Team";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <Process />
        <Differentials />
        <Cases />
        <Leadership />
        <Team />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
