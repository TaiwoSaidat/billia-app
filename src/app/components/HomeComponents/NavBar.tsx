import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../../../public/assets/Billia.png";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-amber-100 text-white">
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
        <div className="items-center">
          <ul className="flex">
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Testimonial</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
