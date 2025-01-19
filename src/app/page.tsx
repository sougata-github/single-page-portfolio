import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}
