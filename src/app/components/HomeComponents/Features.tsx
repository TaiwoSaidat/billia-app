import React from "react";
import Image from "next/image";
// import bill from "../../../../public/assets/bill.png";
// import airtime from "../../../../public/assets/airtime.png";
import { FEATURES } from "@/constants";
import { variantClasses } from "@/constants";
import card from '../../../../public/assets/cardFull.png'

const Features = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 py-10">
        <h1 className="text-3xl font-bold text-center text-gold-950">
          Features
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full px-4 ">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`${
                variantClasses[feature.variant]
              } p-6 rounded-2xl shadow-lg flex flex-col gap-4`}
            >
              <h2 className="text-gold-950 text-xl font-extrabold mb-2 justify-start">
                {feature.title}
              </h2>
              <p className="text-black-back text-base font-medium text-start ">
                {feature.subtitle}
              </p>
              <div className="items-center justify-center flex">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="mt-4 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 grid-cols-2 gap-6 p-6 w-full bg-gold-50">
          <div className="space-y-6">
            <h2 className="py-6 rounded-2xl flex flex-col gap-4">
              Virtual Dollar Card
            </h2>
            <p className="text-black-back text-base font-medium text-start ">
              Shop globally with your own secure virtual dollar card — perfect
              for subscriptions and online payments.
            </p>
          </div>
          <div className=" flex items-center justify-center">
            <Image src={card} alt="card" width={250} height={250} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
