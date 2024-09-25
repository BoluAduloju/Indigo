import { HardDriveDownload } from "lucide-react";
import { ChartLine } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { Cable } from "lucide-react";
import { BotMessageSquare } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user6.jpg";
import user3 from "../assets/profile-pictures/user5.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user2.jpg";
import user6 from "../assets/profile-pictures/user3.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Jordan Olaitan",
    company: "Content Creator",
    image: user1,
    text: "I am extremely satisfied with the services provided. Managing my revenue has become a lot more easier with just my dashboard",
  },
  {
    user: "Angela Nneka",
    company: "Freelance Writer",
    image: user2,
    text: "I couldn't be happier with the outcome of the sales remote i got om my recent book i put on sale online, I got details analytics for all transactions",
  },
  {
    user: "Micheal Coleman",
    company: "Digital Creator",
    image: user3,
    text: "I struggle a lot trying to measure my sales from my online courses, but Indigo has bridged this gap seamlessly, while using multiple payment platform .",
  },
  {
    user: "Usman Omar",
    company: "Freelance Product designer",
    image: user4,
    text: "Tracking my Income from Clients on different freelance platform has been a bottleneck for me, but now Indigo has made be accountable financially",
  },
  {
    user: "Eva Davis",
    company: " CEO at WigsbyEva",
    image: user5,
    text: "I am amazed by the level of detailed sales report Indigo send weekly. all i need to do is focus only on my product marketing with Indgo.",
  },
  {
    user: "Mark Feranmi",
    company: "CMO at PayPoint",
    image: user6,
    text: "With Indigo,I have been able to track our revenue weekly,monthly,quarterly and annually with a detailed sales report i can share with my team .",
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
      "Easily search for the specific payment plaform with our quick search.",
  },
  {
    title: "Include the access key from the payment platform",
    description:
      "Generate encrypted key from your selected payment platform you want to integrate.",
  },
  {
    title: "Integrate and receive all transaction details on your dashboard ",
    description:
      "Integrate with a click and started tracking every transaction details from your dashboard.",
  },
  {
    title: "Get user-friendly analytics, report and Al enhanced insights",
    description:
      "Get data-driven detailed analytics with report to help you make good financial decision.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$50",
    features: [
      "5 Integrated platform ",
      "Al enhanced financial assistance",
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

export const exploreLinks = [
  { href: "#", text: "About" },
  { href: "#", text: "Features" },
  { href: "#", text: "Workflow" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Community Forums" },
];

export const resourcesLinks = [
  { href: "#", text: "Support" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Integration" },
  { href: "#", text: "Dashboard Guide" },
  { href: "#", text: "Customers" },
];
export const followLinks = [
  { href: "#", text: "LinkedIn" },
  { href: "#", text: "X (Twitter)" },
  { href: "#", text: "Instagram" },
  { href: "#", text: "TikTok" },
  { href: "#", text: "Facebook" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Conference" },
  { href: "#", text: "Terms of service" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Careers" },
];
