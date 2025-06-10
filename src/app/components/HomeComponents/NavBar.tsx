import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../../../public/assets/Billia.png";
import { NAV } from "@/constants";

const NavBar = () => {
  return (
    <>
      <div className=" bg-gold-50 flex justify-between items-center max-container padding-container py-6">
        <div className="">
          <Link href="/">
            <Image
              src={logo}
              alt="Billia Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        </div>
        <div className="">
          <ul className="hidden md:flex gap-3">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-gold-950 text-small-16 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
