import { HardDriveDownload } from "lucide-react";
import { ChartLine } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { Cable } from "lucide-react";
import { BotMessageSquare } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user6.jpg";
import user3 from "../assets/profile-pictures/user7.jpg";
import user4 from "../assets/profile-pictures/user8.jpg";
import user5 from "../assets/profile-pictures/user9.jpg";
import user6 from "../assets/profile-pictures/user10.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Jordan Olaitan",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Angela Lee",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "Micheal Coleman",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Usman Omar",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Eva Davis",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Sophia Hernandez",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <HardDriveDownload />,
    text: "Fast and Real-time Updates ",
    description:
      "Easily receive notification from various integrated platform, without no transaction error.",
  },
  {
    icon: <Fingerprint />,
    text: " Secured with Authentication ",
    description:
      "Process payment transaction without breaches with our 2FA authentication security",
  },
  {
    icon: <ClipboardList />,
    text: "Sales Report",
    description:
      "Recieve weekly, monthly, quaterly and annually detailed sales report with transaction activities.",
  },
  {
    icon: <ChartLine />,
    text: "Analytics",
    description:
      "Preview your revenue and transaction; allowing you see all financial activity visually.",
  },
  {
    icon: <Cable />,
    text: "Seemless Integration",
    description:
      "Integrate every payment platform you use in receiving payment, for all your product and services",
  },
  {
    icon: <BotMessageSquare />,
    text: "AI financial assistant",
    description:
      "Gain valuable financial insights with our enhanced financial artificial intelligence.",
  },
];

export const checklistItems = [
  {
    title: "Quick search for the payment plaform",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Include the access key from the payment platform",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Integrate and receive all transaction details on your dashboard ",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Get user-friendly analytics, report and Al enhanced insights",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "3 Integrated platform ",
      "Basic Analytics",
      "Product offering collection",
    ],
  },
  {
    title: "Pro",
    price: "$129",
    features: [
      "30 Intergrated Platform",
      "Al enhanced financial assistance",
      "Advance Analytics ",
      "Product offering colloection",
    ],
  },
  {
    title: "Enterprise",
    price: "$250",
    features: [
      "Unlimited Integrated Platform ",
      "Al enhanced financial assistance",
      "Advanced Analytics",
      "Product offering collection",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
