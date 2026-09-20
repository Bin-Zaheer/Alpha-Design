import { RiEqualizerFill } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";
import { RiDoorOpenLine } from "react-icons/ri";
import { GiHouseKeys } from "react-icons/gi";

export const projects = [
  {
    title: "The Ivory Residence",
    image: "/intro/pro1.jpeg",
  },
  {
    title: "Noir House",
    image: "/intro/pro2.jpeg",
  },
  {
    title: "The Stone Villa",
    image: "/intro/pro3.jpeg",
  },
  {
    title: "Urban Retreat",
    image: "/intro/pro4.jpeg",
  },
  {
    title: "Contemporary Living",
    image: "/intro/pro5.jpeg",
  },
];

export const featuredSlides = [
  {
    label: "01 — RESIDENCE NO. 01",
    title: "Modern Elegance",
    location: "Karachi / Pakistan",
    type: "Residential Interior",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
  },
  {
    label: "02 — RESIDENCE NO. 02",
    title: "Quiet Luxury",
    location: "Lahore / Pakistan",
    type: "Residential Interior",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80",
  },
  {
    label: "03 — RESIDENCE NO. 03",
    title: "Warm Minimal",
    location: "Islamabad / Pakistan",
    type: "Residential Interior",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
  },
];

export const whatWeDo = [
  "Interior Architecture",
  "Residential Interiors",
  "Commercial Interiors",
  "Space Planning",
  "Furniture & Styling",
  "Lighting Design",
  "Material Selection",
];

interface ProcessStep {
  step: React.ReactNode;
  title: string;
  text: string;
}

export const process: ProcessStep[] = [
  {
    step: <CiTimer />,
    title: "Timely Execution",
    text: "We respect your time and investment, delivering on schedule with clear communication and uncompromised quality.",
  },
  {
    step: <RiDoorOpenLine />,
    title: "Timeless Design",
    text: "Trends fade, but true style endures through timeless design that keeps your home elegant for decades.",
  },
  {
    step: <RiEqualizerFill />,
    title: "Quality",
    text: "Excellence lives in details, where master craftsmanship and premium materials create homes both strong and stunning.",
  },
  {
    step: <GiHouseKeys />,
    title: "Exception Value",
    text: "Luxury should be accessible through clear pricing and smart design, delivering finishes without inflated markups.",
  },
];
