import React from "react";
import Image from "next/image";

type AboutCardProps = {
  icon: any;
  alt: string;
  title: string;
  subtitle: string;
  description?: string;
  variant: string;
  reverse?: boolean;
};

const AboutCard = ({
  icon,
  alt,
  title,
  subtitle,
  description,
  variant,
  reverse = false,
}: AboutCardProps) => {
  return (
    <div className={`w-full p-12 ${variant}`}>
      <div
        className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-1/2">
          <Image
            src={icon}
            alt={alt}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{subtitle}</p>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
