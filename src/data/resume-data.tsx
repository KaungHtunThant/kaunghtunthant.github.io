import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, FacebookIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kaung Htun Thant",
  initials: "KHT",
  location: "Yangon, Myanmar, MM",
  locationLink: "https://maps.app.goo.gl/ZvSjAkgv73h8AtjFA",
  about:
    "Full Stack Developer speciallized in building powerful apps using latest technologies.",
  summary:
    "With over 7+ years of experience in IT fields, Kaung Htun Thant brings a wealth of expertise in managing complex IT projects, particularly in cloud technology. He has a proven ability to enhance efficiency, having managed Myanmar's first Event Pass System, resulting in significant enhencement of data analysis. His proficiency in programming languages and cloud administration complements his strong career and creative problem-solving skills.",
  avatarUrl: "https://avatars.githubusercontent.com/u/53951056?v=4",
  personalWebsiteUrl: "https://kaunghtunthant.github.io",
  contact: {
    email: "kaunghtunthant@gmail.com",
    tel: "+971557893319",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kaunghtunthant",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/khthant",
        icon: LinkedInIcon,
      },
      {
        name: "Facebook",
        url: "https://facebook.com/kaunghtunthant",
        icon: FacebookIcon,
      },
    ],
  },
  education: [
    {
      school: "Myanmar Institute of Theology, Liberal Arts Program",
      degree: "Bachelor's Degree in Computer Science Studies",
      start: "2017",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Power Global",
      link: "http://powerglobal.com.mm",
      badges: ["Full Time"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description:
        "Lead and proficiently develop cost-effective and visually captivating websites utilizing a range of technologies including React JS, PHP, WordPress, Wix, Laravel, and other relevant platforms.",
    },
    {
      company: "KBTC Group of Companies",
      link: "https://www.kbtc.edu.mm",
      badges: ["Full Time"],
      title: "Junior Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description:
        "Developed and implemented multiple websites and web applications, effectively managed Microsoft Azure infrastructure, employed Microsoft Power Automate, and utilized diverse cloud services to optimize operations and boost productivity.",
    },
    {
      company: "Silver Sea Media",
      link: "https://www.silverseaexpo.com",
      badges: ["Full Time"],
      title: "IT Technician",
      logo: JojoMobileLogo,
      start: "2017",
      end: "2020",
      description:
        "Provided expert consultation on IT-related matters, executed and administered Content Management Systems (CMS), Customer Relationship Management (CRM) platforms, and other pertinent systems. Designed and implemented local area networks (LANs) within office environments, adeptly troubleshooting a wide array of IT-related issues to ensure seamless operations.",
    },
  ],
  skills: [
    "PHP",
    "Laravel",
    "Ignite",
    "Linux",
    "Apache",
    "Microsoft Azure",
    "Amazon Web Service",
    "JavaScript",
    "TypeScript",
    "React JS",
    "Node.js",
  ],
  projects: [
    {
      title: "Event Pass and Registration",
      techStack: [
        "PHP",
        "Laravel",
        "Apache",
        "MySQL",
        "Bootstrap",
        "Microsoft Azure VM",
        "Linux",
      ],
      description: "Web solution for Event pre-registration, event pass and visitor data collection. Used by Silver Sea Events and Zhejiang Myanmar Textile event.",
      logo: ConsultlyLogo,
      link: {
        label: "Event Pass and Registration",
        href: "#",
      },
    },
    {
      title: "School Online ID API Server and Frontend",
      techStack: [
        "PHP",
        "Laravel",
        "Apache",
        "MySQL",
        "Bootstrap",
        "Digital Ocean",
        "Linux",
        ],
      description:
        "Web solution for student and staff ID cards generation with QR Pass. Used by KBTC university and other schools.",
      logo: MonitoLogo,
      link: {
        label: "School Online ID",
        href: "#",
      },
    },
    {
      title: "KBTC University Website",
      techStack: [
        "PHP",
        "Laravel",
        "Apache",
        "MySQL",
        "Bootstrap",
        "Digital Ocean",
        "Linux",
        ],
      description:
        "A web front for KBTC University and other schools",
      logo: JarockiMeLogo,
      link: {
        label: "kbtc.edu.mm",
        href: "https://kbtc.edu.mm",
      },
    },
    {
      title: "Shopaholic SNC",
      techStack: [
        "Python",
        "Flask",
        "Bootstrap",
        "MySQL",
        "Python Anywhere PaaS"
        ],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "#",
      },
    },
  ],
} as const;
