import { STORE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutStore = () => {
  return (
    <>
      <div className=" max-container padding-container space-y-8 py-4 my-16 flex flex-col justify-center items-center space-y-6">
        <p className="text-[40px] font-bold">
          Ready to simplify your bills? <br />
          Download Billia and experience the smarter way to pay.
        </p>
        <div className="">
          <div className="  flex gap-4 ">
            {STORE.map((item: any) => (
              <div key={item.key} className="  ">
                <Link
                  href={item.href}
                  className="flex items-center justify-between bg-black-back py-2 px-4 rounded-xl gap-2 text-text-white"
                >
                  <div className="">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={15}
                      height={10}
                      className="inline-block "
                    />
                  </div>

                  <div className="text-gray-100 ">
                    <h6 className="text-[8px]"> {item.title}</h6>
                    <p className=" text-[12px]">{item.subtitle}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStore;
