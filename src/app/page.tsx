import Hero from "./components/HomeComponents/Hero";
import Features from "./components/HomeComponents/Features";
import CTA from "./components/HomeComponents/CTA";
import Testimonials from "./components/HomeComponents/Testimonials";
import Works from "./components/HomeComponents/Works";

export default function Home() {
  return (
    <>
      <div className=" ">
        <Hero />
        <Features />
        <CTA />
        <Testimonials />
        <Works />
      </div>
    </>
  );
}
