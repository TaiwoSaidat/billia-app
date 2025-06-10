import { FOOTER_LINKS, LEGAL_LINKS, NAV, SOCIAL_ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import billia from "../../../../public/assets/billiaWhite.png";

const Footer = () => {
  return (
    <>
      <footer className=" bg-gradient-to-b from-[#F28211] to-[#C93106] text-gray-300 pt-12 padding-container max-container">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
          {/* Logo + slogan */}
          <div className="space-y-4">
            <Image src={billia} alt="Billia logo" width={120} height={40} />
            <p className="text-sm">
              Our all-in-one app for bills, airtime, data, and smart payments —
              powered by Billia AI..
            </p>
            <div className="flex space-x-4">
              {SOCIAL_ICONS.map((item: any) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  passHref
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-100 uppercase mb-4">
                Products
              </h3>
              <ul className="space-y-2 text-sm">
                {FOOTER_LINKS.map((item: any) => (
                  <li key={item.key}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-100 uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                {LEGAL_LINKS.map((item: any) => (
                  <li key={item.key}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-100 uppercase mb-4">
                Contact
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Billiainfo@gmail.com</li>
                <li>08023437727</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-xs text-text-white">
            © {new Date().getFullYear()} Billia. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
export default Footer;
