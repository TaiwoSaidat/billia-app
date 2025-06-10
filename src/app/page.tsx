import Image from "next/image";
import Hero from "./components/HomeComponents/Hero";
import Header from "./components/HomeComponents/Header";
import Features from "./components/HomeComponents/Features";
import CTA from "./components/HomeComponents/CTA";
import Testimonials from "./components/HomeComponents/Testimonials";

export default function Home() {
  return (
    <>
      <div className=" ">
        {/* <Header /> */}
        <Hero />
        <Features />
        <CTA />
        <Testimonials />
      </div>
    </>
  );
}
