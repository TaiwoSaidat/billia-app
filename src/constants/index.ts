import playstore from "../../public/assets/playstore.png";
import apple from "../../public/assets/apple.png";
import girl1 from "../../public/assets/girl1.png";
import girl2 from "../../public/assets/girl2.png";
import boy from "../../public/assets/boy1.png";
import fb from "../../public/assets/fb.png";
import x from "../../public/assets/x.png";
import ig from "../../public/assets/ig.png";
import bill from "../../public/assets/bill.png";
import airtime from "../../public/assets/airtime.png";
import tinyBill from '../../public/assets/tinyBill.png';
import tinyBulb from '../../public/assets/tinyBulb.png';
import tinyChat from '../../public/assets/tinyChat.png';

export const variantClasses: Record<string, string> = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
};
// NAVBAR
export const NAV = [
  { href: "/", key: "home", label: "Home" },
  { href: "/AboutUs", key: "about_us", label: "About Us" },
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

export const SOCIAL_ICONS = [
  {
    label: "Facebook",
    icon: fb,
    href: "https://facebook.com",
  },
  {
    label: "Instagram",
    icon: ig,
    href: "https://instagram.com",
  },
  {
    label: "Twitter",
    icon: x,
    href: "https://twitter.com",
  },
];

export const FOOTER_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/AboutUs", key: "about_us", label: "About Us" },
  { href: "/", key: "features", label: "Features" },
  { href: "/", key: "testimonial", label: "Testimonial" },
  { href: "/", key: "faq", label: "FAQ" },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

export const LEGAL_LINKS = [
  { href: "/", key: "privacy", label: "Privacy Policy" },
  { href: "/", key: "terms", label: "Terms of Services" },
];

export const FEATURES = [
  {
    title: "All_In_One Bill Payments",
    icon: bill,
    variant: "green",
    subtitle:
      "Pay for electricity, TV, internet, education, and betting — all in seconds.",
  },
  {
    title: "Airtime & Data Top-Up",
    icon: airtime,
    variant: "blue",
    subtitle:
      "Buy airtime and mobile data for yourself or others — instantly and globally.",
  },
];

export const CTALINKS = [
  {
    title: "Pay Bills by Typing a Command",
    icon: tinyBill,
    // variant: "green",
    subtitle:
      "Just say “Pay my WAEC fees” or “Buy airtime for 0803...” — no need to search or fill endless forms.",
  },
  {
    title: "One-Tap Repeats",
    icon: tinyBulb,
    // variant: "blue",
    subtitle:
      "AI remembers your past payments so you can repeat them in seconds — no retyping required.",
  },
  {
    title: "In-App Chat Assistance",
    icon: tinyChat,
    // variant: "blue",
    subtitle:
      "AI remembers your past payments so you can repeat them in seconds — no retyping required.",
  },
];
