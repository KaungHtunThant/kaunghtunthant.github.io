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
    "As a Full Stack Developer, I have successfully developed 3 major web applications and many other minor applications. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with PHP, Laravel, React JS, and MYSQL. I have over 3 years of experience in working with companies in Myanmar.",
  avatarUrl: "https://avatars.githubusercontent.com/u/53951056?u=707b9ec364018d2a8d3c2722282c6518d9f3dab4&v=4",
  personalWebsiteUrl: "https://kaunghtunthant.github.io",
  contact: {
    email: "kaunghtunthant@gmail.com",
    tel: "+959263869940",
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
      start: "2023",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "KBTC Group of Companies",
      link: "https://www.kbtc.edu.mm",
      badges: ["Full Time"],
      title: "Junior Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Silver Sea Media",
      link: "https://www.silverseaexpo.com",
      badges: ["Full Time"],
      title: "IT Technician",
      logo: JojoMobileLogo,
      start: "2017",
      end: "2021",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Freelance Developer",
      link: "#",
      badges: [],
      title: "C++/ .Net, Flask, Python Developer",
      logo: NSNLogo,
      start: "2018",
      end: "2022",
      description: "Creating and testing software for LTE base stations",
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
        href: "https://useminimal.com/",
      },
    },
  ],
} as const;
