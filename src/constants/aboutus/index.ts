import girlsMission from "../../../public/assets/girlsMission.png";
import girlBill from "../../../public/assets/girlBill.png";
import boyStarted from "../../../public/assets/boyStarted.png";
import compass from "../../../public/assets/compass.png";
import lock from "../../../public/assets/lock.png";
import brain from "../../../public/assets/brain.png";
import shake from "../../../public/assets/shake.png";

export const variantClasses: Record<string, string> = {
  orange: "bg-orange-100 ",
  white: "bg-white ",
};

export const valueVariantClasses: Record<string, string> = {
  orange: "bg-orange-100",
  green: "bg-green-100",
  pink: "bg-pink-100",
  blue: "bg-blue-100",
};

export const ABOUTUS = [
  {
    title: "Reimagining How Nigerians Pay, One Bill at a Time",
    icon: girlBill,
    alt: "alt",
    variant: "orange",
    subtitle:
      "At Billia, we're building more than just a payment app — we're creating a smarter, simpler way for everyday Nigerians to stay connected, pay their bills, and take control of their financial lives.",
  },
  {
    title: "Why We Started",
    icon: boyStarted,
    alt: "alt",
    variant: "white",
    subtitle:
      "We created Billia because we saw a real problem: people struggling with too many apps, missed due dates, and unreliable payment platforms.",
    description:
      "So we built one app that brings it all together — electricity, internet, school fees, airtime, and even a virtual dollar card. Add Billia AI, and you’ve got the smartest payment experience available today.",
  },
  {
    title: "Our Mission & Vision",
    icon: girlsMission,
    alt: "alt",
    variant: "white",
    subtitle:
      "Mission: To make bill payments effortless, intelligent, and accessible for everyone across Nigeria — no matter their background or tech level.",
    description:
      "Vision: A future where anyone can manage their financial life from one simple, secure platform — powered by smart automation and trust.",
  },
];

export const VALUES = [
  {
    title: "Simplicity",
    icon: compass,
    alt: "alt",
    variant: "orange",
    subtitle: "Payments should be fast, clear, and easy — no stress.",
  },
  {
    title: "Why We Started",
    icon: lock,
    alt: "alt",
    variant: "green",
    subtitle:
      "We created Billia because we saw a real problem: people struggling with too many apps, missed due dates, and unreliable payment platforms.",
    description:
      "So we built one app that brings it all together — electricity, internet, school fees, airtime, and even a virtual dollar card. Add Billia AI, and you’ve got the smartest payment experience available today.",
  },
  {
    title: "Our Mission & Vision",
    icon: brain,
    alt: "alt",
    variant: "pink",
    subtitle:
      "Mission: To make bill payments effortless, intelligent, and accessible for everyone across Nigeria — no matter their background or tech level.",
    description:
      "Vision: A future where anyone can manage their financial life from one simple, secure platform — powered by smart automation and trust.",
  },
  {
    title: "Our Mission & Vision",
    icon: shake,
    alt: "alt",
    variant: "blue",
    subtitle:
      "Mission: To make bill payments effortless, intelligent, and accessible for everyone across Nigeria — no matter their background or tech level.",
    description:
      "Vision: A future where anyone can manage their financial life from one simple, secure platform — powered by smart automation and trust.",
  },
];
