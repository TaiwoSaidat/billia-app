import Image from "next/image";
import Hero from "./components/HomeComponents/Hero";
import Header from "./components/HomeComponents/Header";
import Features from "./components/HomeComponents/Features";

export default function Home() {
  return (
    <>
      <div className=" ">
        {/* <Header /> */}
        <Hero />
        <Features />
      </div>
    </>
  );
}
