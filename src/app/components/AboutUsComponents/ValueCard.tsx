// components/AboutUsComponents/ValueCard.tsx
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  icon: any;
  alt: string;
  variant: string;
};

const ValueCard = ({ title, subtitle, icon, alt, variant }: Props) => {
  return (
    <div
      className={`relative rounded-2xl p-6 min-h-[200px] ${variant} shadow-md`}
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700">{subtitle}</p>
      </div>
      <div className="absolute bottom-4 right-4 w-20 h-20">
        <Image src={icon} alt={alt}  className="object-contain" />
      </div>
    </div>
  );
};

export default ValueCard;
