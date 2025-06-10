import Image from "next/image";
import React from "react";
import googlePlay from "../../../../public/assets/playstore.png";

const HeroComponents = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-black-back py-4 px-8 rounded-4xl gap-4">
        <div className="">
          <Image
            src={googlePlay}
            alt="Get on Google Play"
            width={45}
            height={40}
          />
        </div>

        <div className=" text-white ">
          <h6 className="text-small-10">GET IT ON</h6>
          <p className=" text-regular-22">Google Play</p>
        </div>
      </div>
    </>
  );
};

export default HeroComponents;
