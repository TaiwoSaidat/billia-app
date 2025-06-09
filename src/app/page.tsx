import Image from "next/image";
import Hero from "./components/HomeComponents/Hero";

export default function Home() {
  return (
    <>
      <div className=" text-4xl font-red-600 border-2 border-green-800 p-6 ">
        {" "}
        this is the bilia payment app
        <Hero />
      </div>
    </>
  );
}
