import playstore from "../../public/assets/playstore.png";
import apple from "../../public/assets/apple.png";
import girl1 from "../../public/assets/girl1.png";
import girl2 from "../../public/assets/girl2.png";
import boy from "../../public/assets/boy1.png";

// NAVBAR
export const NAV = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "about_us", label: "About Us" },
  { href: "/", key: "features", label: "Features" },
  { href: "/", key: "testimonial", label: "Testimonial" },
  { href: "/", key: "faq", label: "FAQ" },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

//HERO
export const STORE = [
  {
    title: "GET IT ON",
    subtitle: "Google Play",
    icon: playstore,
    key: "playstore",
    href: "https://play.google.com/store/apps/details?id=com.billia.app",
  },
  {
    title: "Download on the",
    subtitle: "App Store",
    icon: apple,
    key: "apple",
    href: "https://apps.apple.com/ng/app/billia/id6444228850",
  },
];

export const PROFILEPIC = [
  { icon: girl1, alt: "girl1" },
  { icon: girl2, alt: "girl2" },
  { icon: boy, alt: "boy" },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Wanderlay",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: [
      "Climbing mount everest",
      "Wandering through Wanderlay",
      "Wanderlay kinthill",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "wanderlay@travels.com" },
  ],
};  
