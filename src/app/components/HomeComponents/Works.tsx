import Image from 'next/image'
import React from 'react'
import phones from '../../../../public/assets/phones.png'
import Link from 'next/link';
import { STORE } from '@/constants';

const Works = () => {
  return (
    <>
            <section className="bg-gold-50 py-16 max-container padding-container m-6">
              <div className=" mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Left content */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                  <h1 className="text-4xl md:text-large-30 font-bold text-gold-950">
                    Simplify Every Payment <br className="hidden md:block" />
                    with One Powerful App.
                  </h1>
                  <p className="text-regular-20 text-black-back  ">
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
                    src={phones}
                    alt="Phone Preview"
                    // width={300}
                    // height={600}
                    className="rounded-xl shadow-lg z-10"
                  />
      
                </div>
              </div>
            </section>
    </>
  )
}

export default Works
