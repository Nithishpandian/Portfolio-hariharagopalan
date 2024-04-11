import AboutContainer from "@/components/about/AboutContainer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/testimonials/Testimonials";
import Experience from "@/components/experience/Experience";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-primary-black min-h-screen">
      <Navbar />
      <div className=" px-14">
        <Hero />
        <AboutContainer />
        <Experience />
        <Testimonials />
      </div>
    </main>
  );
}
