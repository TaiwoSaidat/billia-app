import React from "react";
import phone from "../../../../public/assets/ctaphone.png";
import Link from "next/link";
import Image from "next/image";
import tinyBulb from "../../../../public/assets/tinyBulb.png";
import { CTALINKS } from "@/constants";

const CTA = () => {
  return (
    <>
      <section className="  max-container padding-container">
        <div className="  px-4 flex flex-col md:flex-row justify-between">
          {/* Left content */}

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-center relative">
            <Image
              src={phone}
              alt="Phone Preview"
              width={300}
              height={600}
              className="rounded-xl shadow-lg z-10"
            />
          </div>

          {/* Right content */}

          <div className="md:w-1/2 space-y-6">
            {/* <p className="text-small-14 text-primary ">
              Your App. Every Payment. Zero Stress.
            </p> */}
            <h1 className="text-4xl md:text-large-30 font-bold text-gold-950 items-start">
              Introducing Billia AI: <br className="hidden md:block" />
              Smarter, Faster, Personal
            </h1>
            <p className="text-regular-20 text-gray-500 block text-start">
              From paying school fees to buying airtime or electricity, Billia
              AI makes every payment smarter, faster, and stress-free — just by
              asking.
            </p>
            <div className=" space-y-6">
             
              {CTALINKS.map((item, index) => (
                <div className="" key={index}>
                  <div className="flex items-center gap-4">
                    <Image src={item.icon} alt="" width={20} height={20} />
                    <h2 className=" text-lg font-bold">{item.title} </h2>
                  </div>
                  <p className=" text-16 font-lg text-gray-400">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
