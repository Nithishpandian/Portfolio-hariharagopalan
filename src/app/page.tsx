import AboutContainer from "@/components/about/AboutContainer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/testimonials/Testimonials";
import Experience from "@/components/experience/Experience";
import Image from "next/image";
import Service from "@/components/service/Service";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className=" bg-primary-black min-h-screen">
      <Navbar />
      <div className=" px-4 sm:px-6 md:px-6 lg:px-8 xl:px-14">
        <Hero />
        <AboutContainer />
        <Skills />
        <Service />
        <Experience />
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
