import React from 'react'
import { ABOUTUS, variantClasses } from '@/constants/aboutus';
import AboutCard from './AboutCard';

const Hero = () => {
  return (
    <>
      <div className="space-y-12">
        {ABOUTUS.map((item, index) => (
          <AboutCard
            key={index}
            icon={item.icon}
            alt={item.alt}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            variant={variantClasses[item.variant]}
            reverse={index === 1} // Only the second item is reversed
          />
        ))}
      </div>
    </>
  );
}

export default Hero
