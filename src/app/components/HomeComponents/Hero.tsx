import React from "react";
import phone from "../../../../public/assets/phone.png";
import giftCircle from "../../../../public/assets/giftCircle.png";
import netflixCircle from "../../../../public/assets/netflixCircle.png";
import bulbCircle from "../../../../public/assets/bulbCircle.png";
import gradCapCircle from "../../../../public/assets/gradCapCircle.png";
import tinyPhoneCircle from "../../../../public/assets/tinyPhoneCircle.png";
import ytCircle from "../../../../public/assets/ytCircle.png";
// import googlePlay from "../../../../public/assets/googlePlay.png";
import Image from "next/image";
import { STORE } from "@/constants";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* <div className="py-6 px-24 bg-gold-400 ">
        
      </div> */}
      <section className="bg-gold-50 py-16 max-container padding-container">
        <div className=" mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <p className="text-small-14 text-primary ">
              Your App. Every Payment. Zero Stress.
            </p>
            <h1 className="text-4xl md:text-large-30 font-bold text-gold-950">
              Simplify Every Payment <br className="hidden md:block" />
              with One Powerful App.
            </h1>
            <p className="text-regular-20 text-gray-500 ">
              Billia lets you pay bills, top up airtime, buy data, and manage
              your wallet — all in one place. Fast. Secure. Reliable.
            </p>

            {/* Store buttons */}
            <div className=" ">
              <div className="  flex gap-4 ">
                {STORE.map((item: any) => (
                  <div key={item.key} className="  ">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between bg-black-back py-2 px-4 rounded-2xl gap-2 text-text-white"
                    >
                      <div className="">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={25}
                          height={20}
                          className="inline-block mr-2"
                        />
                      </div>

                      <div className="text-gray-100 ">
                        <h6 className="text-small-8 "> {item.title}</h6>
                        <p className=" text-regular-30">{item.subtitle}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end relative">
            <Image
              src={phone}
              alt="Phone Preview"
              width={300}
              height={600}
              className="rounded-xl shadow-lg z-10"
            />

            {/* Floating icons */}
            {/* Left side */}
            <Image
              src={tinyPhoneCircle}
              alt="Icon"
              className="absolute left-[220px] top-[15%] w-8 h-8 animate-float"
            />
            <Image
              src={gradCapCircle}
              alt="Icon"
              className="absolute left-[200px] top-[45%] w-8 h-8 animate-float"
            />
            <Image
              src={netflixCircle}
              alt="Icon"
              className="absolute left-[220px] top-[75%] w-8 h-8 animate-float"
            />

            {/* Right side */}
            <Image
              src={ytCircle}
              alt="Icon"
              className="absolute right-[-40px] top-[15%] w-8 h-8 animate-float"
            />
            <Image
              src={bulbCircle}
              alt="Icon"
              className="absolute right-[-50px] top-[45%] w-8 h-8 animate-float"
            />
            <Image
              src={giftCircle}
              alt="Icon"
              className="absolute right-[-40px] top-[75%] w-8 h-8 animate-float"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
