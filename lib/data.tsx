import { RiEqualizerFill } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";
import { RiDoorOpenLine } from "react-icons/ri";
import { GiHouseKeys } from "react-icons/gi";

export const projects = [
  {
    title: "Myra (Condo)",
    image: "/new1.jpeg",
  },
  {
    title: "422B Northshore Drive (BTO 5-room)",
    image: "/new2.jpeg",
  },
  {
    title: "403B Lor 1 Toa Payoh (BTO 4-room)",
    image: "/new3.jpeg",
  },
  {
    title: "323A Tengah Drive (BTO 2-room)",
    image: "/new4.jpeg",
  },
  {
    title: "166 Tampines St 12 (Resale 4-room)",
    image: "/new5.jpeg",
  },
];

export const featuredSlides = [
  {
    label: "01 — RESIDENCE",
    title: "Kitchen that suit your needs",
    location: "Karachi / Pakistan",
    type: "Residential Interior",
    year: "2026",
    image: "/slider.jpg",
  },
  {
    label: "02 — RESIDENCE",
    title: "Living room that match your style",
    location: "Lahore / Pakistan",
    type: "Residential Interior",
    year: "2026",
    image: "/slide.jpeg",
  },
  {
    label: "03 — RESIDENCE",
    title: "Spaces that Blend In",
    location: "Islamabad / Pakistan",
    type: "Residential Interior",
    year: "2026",
    image: "/new6.jpeg",
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

export const testimonials = [
  {
    text: "We were worried about our BTO renovation timeline, but the team’s Timely Execution was impressive. They handled all the HDB permits seamlessly and handed over the keys a week earlier than expected. The final result looks exactly like the 3D renders—true Quality Craftsmanship that we are proud to show off to our friends and family!",
    author: "Jasmine & Wei Lun",
    role: "Homeowner, New York",
  },
  {
    text: "Renovating an old resale flat felt daunting until we met this team. They provided Exceptional Value by suggesting cost-effective ways to achieve the luxury look we wanted without blowing our budget. Their eye for Timeless Design turned our dark, cramped kitchen into a bright, functional space that we know will stay stylish for years.",
    author: "Mrs. Tan",
    role: "Architectural Enthusiast",
  },
  {
    text: "Our home renovation felt overwhelming until we met the Alpha team. They listened to how our family actually lives—not just how we wanted the house to look. During the hacking and tiling phases, we were constantly updated with photos and progress reports, which took away all the stress. It’s rare to find a firm that balances high-end design with such honest, down-to-earth project management. We finally feel like we have room to breathe.",
    author: "Sarah & David Lim",
    role: "Studio Founder",
  },
  {
    text: "We engaged Alpha Design & Consultancy for BTO, and the experience was exceptional. We were worried about the hacking regulations and safety concerns. The team didn't just design a beautiful workspace; they handled the entire 'Consultancy' side with total transparency. They found space we didn't know we had and managed the electrical and plumbing works so precisely that we had zero downtime.",
    author: "Marcus Tan",
    role: "Studio Founder",
  },
];
