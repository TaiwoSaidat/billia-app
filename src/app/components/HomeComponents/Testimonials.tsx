import React from "react";
import boy2 from "../../../../public/assets/boy3.png";
import girl3 from "../../../../public/assets/girl3.png";
import quote from "../../../../public/assets/quote.png";
import arrowLeft from "../../../../public/assets/arrowLeft.png";
import arrowRight from "../../../../public/assets/arrowRight.png";
import star from "../../../../public/assets/star.png";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div className=" text-center bg-gradient-to-b from-[#F28211] to-[#C93106] max-container padding-container py-6">
        <div className="">
          <span className=" text-[6px] font-medium border rounded-4xl border-text-white text-text-white bg-transparent p-2">
            Testimonial
          </span>
          <p className=" capitalize text-3xl font-bold text-text-white mt-4">
            What our customer says
          </p>
        </div>

        <div className="flex flex-row items-center justify-between gap-6 ">
          <Image src={arrowLeft} alt="Arrow Left" />

          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* plus quote */}
            <div className="bg-text-white rounded-xl p-4  ">
              <div className=" w-full flex justify-between items-start  rounded-lg">
                {/* plus pp */}
                <div className="flex gap-3 ">
                  <Image src={boy2} alt="Testimonial Image" />
                  {/* arlene, year */}
                  <div className="flex flex-col items-start">
                    <h2 className="">Arlene McCoy</h2>
                    <span className="text-[12px] text-gray-400 ">
                      One Year of Using Billia
                    </span>
                  </div>
                </div>
                <Image src={quote} alt="Testimonial Image" />
              </div>
              <p className="text-black-back text-base font-medium mt-4 text-start">
                Before Billia, I always missed my PHCN payment dates. Now I get
                reminders, and I can repeat past payments without filling forms.
                It’s efficient, secure, and perfect for people like me who
                forget easily
              </p>
              <div className=" text-xs flex items-center justify-between mt-4">
                <p className="font-bold ">4 June 2025</p>
                <p className="flex items-center gap-1">
                  <Image src={star} alt="" />
                  <span className="font-bold">4.7</span> / 5.0
                </p>
              </div>
            </div>

            {/* plus quote */}
            <div className="bg-text-white rounded-xl p-4  ">
              <div className=" w-full flex justify-between items-start  rounded-lg">
                {/* plus pp */}
                <div className="flex gap-3 ">
                  <Image src={girl3} alt="Testimonial Image" />
                  {/* arlene, year */}
                  <div className="flex flex-col items-start">
                    <h2 className="">Savannah Nguyen</h2>
                    <span className="text-[12px] text-gray-400  ">
                      Six Months of Using Billia{" "}
                    </span>
                  </div>
                </div>
                <Image src={quote} alt="Testimonial Image" />
              </div>
              <p className="text-black-back text-base font-medium mt-4 text-start">
                I was surprised how fast wallet funding worked. I transferred
                from my bank to the Billia virtual account, and the money
                reflected instantly. I’ve used it to pay my cable and internet
                bills ever since.{" "}
              </p>
              <div className=" text-xs flex items-center justify-between mt-4">
                <p className="font-bold ">25 April 2025</p>
                <p className="flex items-center gap-1">
                  <Image src={star} alt="" />
                  <span className="font-bold">4.5</span> / 5.0
                </p>
              </div>
            </div>
          </div>

          <Image src={arrowRight} alt="Arrow Left" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
