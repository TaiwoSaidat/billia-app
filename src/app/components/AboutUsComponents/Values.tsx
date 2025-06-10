// components/AboutUsComponents/Values.tsx
import React from "react";
// import { VALUES, valueVariantClasses } from "@/constants"; // adjust path if needed
// import ValueCard from "./ValueCard";
 import { VALUES, valueVariantClasses } from "@/constants/aboutus";
import ValueCard from "./ValueCard";

const Values = () => {
  return (
    <section className="max-container padding-container space-y-8">
      <h2 className="text-3xl font-bold">Core Values</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {VALUES.map((item, index) => (
          <ValueCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            alt={item.alt}
            variant={valueVariantClasses[item.variant]}
          />
        ))}
      </div>
    </section>
  );
};

export default Values;
