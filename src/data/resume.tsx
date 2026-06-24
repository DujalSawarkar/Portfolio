import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { FaJs, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRabbitmq, SiVuedotjs } from "react-icons/si";

export const DATA = {
  name: "Dujal Sawarkar",
  initials: "DS",
  url: "https://www.dujal.vercel.app",
  location: "Pune, India",
  locationLink: "https://maps.app.goo.gl/N856FibcPBczxdJf9",
  description:
    "Building scalable AI-powered products as a Software Engineer at Champhunt (Techstars '24).",
  summary:
    "I am **Dujal Sawarkar**, a Computer Engineering graduate (2021–2025) from **Dr. D.Y. Patil Institute of Engineering, Management and Research**, Pune, with a **8.87 GPA**. I currently work as a **Software Engineer at Champhunt Inc (Techstars '24)**, where I've architected a Feed Recommendation system using KNN vector search and multi-model Gemini embeddings serving **230K+ users**, shipped transactional email pipelines handling **200K+ deal redeems**, built an async content moderation pipeline with **RabbitMQ** that flagged 7,400+ posts, and developed the Ashes Prediction Engine. I love building scalable backends, AI-powered systems, and clean frontends with **Next.js**, **Node.js**, **MongoDB**, and **TypeScript**.",
  avatarUrl: "/me.jpg",
  skills: [
    {
      name: "JavaScript",
      icon: <FaJs className="size-3" />,
    },
    {
      name: "TypeScript",
      icon: <Icons.typescript className="size-3" />,
    },
    {
      name: "React.js",
      icon: <Icons.react className="size-3" />,
    },
    {
      name: "Next.js",
      icon: <Icons.nextjs className="size-3" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="size-3" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="size-3" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="size-3" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Icons.tailwindcss className="size-3" />,
    },
    {
      name: "RabbitMQ",
      icon: <SiRabbitmq className="size-3" />,
    },
    {
      name: "Vue.js",
      icon: <SiVuedotjs className="size-3" />,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dujalsawarkar5@gmail.com",
    tel: "+91 8605090478",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DujalSawarkar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dujal-sawarkar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dujalsawarkar5@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Champhunt Inc",
      href: "https://champhunt.com/",
      badges: ["Techstars '24"],
      location: "Pune, Maharashtra",
      title: "Software Engineer",
      logoUrl: "/work-experience/champhunt.png",
      start: "April 2025",
      end: null,
      description: [
        "- Architected a **Feed Recommendation system** using KNN vector search with multi-model Gemini embeddings (text, image, video), serving **230K+ users** across **7.5M+ tracked impressions**.",
        "-----",
        "- Shipped a **transactional email system** via SendGrid across 8 event types (deal redemption, payment flows, subscription lifecycle) and built a scheduled retargeting email pipeline for re-engagement, wired into a platform processing **200K+ deal redeems**.",
        "- Built an **async content moderation pipeline** using RabbitMQ to auto-flag posts without blocking request throughput — flagged **7,400+ posts** in production.",
        "- Built the **Ashes Prediction Engine** — prediction locking, streak tracking, wildcard flow, and reward calculation using Express.js and MongoDB Aggregation Pipelines.",
      ],
      links: [
        {
          type: "Website",
          href: "https://champhunt.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "WayBeyond.tech Pvt. Ltd.",
      href: "https://waybeyond.tech/",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Full Stack JavaScript Developer Intern",
      logoUrl: "/work-experience/waybeyond.png",
      start: "January 2025",
      end: "March 2025",
      description: [
        "- Designed and launched a high-performance web app for **Sunya Meditation Studio** using React.js and Hapi.js, enhancing user experience.",
        "- Collaborated with clients including **Paperboat** and **EY** on web development deliverables.",
      ],
      links: [
        {
          type: "Website",
          href: "https://waybeyond.tech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "GrapeDawn",
      href: "#",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Frontend Developer",
      logoUrl: "/work-experience/grapedawn.png",
      start: "March 2024",
      end: "May 2024",
      description: [
        "- Designed, built, and deployed scalable web applications using **Vue.js** and **Nuxt.js**, enhancing overall performance and user experience by **25%**.",
      ],
      links: [],
    },
  ],
  education: [
    {
      school:
        "Dr. D.Y. Patil Institute of Engineering, Management and Research",
      href: "https://www.dypiemr.ac.in/",
      degree: "Bachelor of Engineering in Computer Science | 8.87 GPA",
      logoUrl: "/education/dyp.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Style-sync",
      href: "https://style-sync-project.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A personalized **AI wardrobe app** built with Next.js and Tailwind CSS, integrating **Gemini** and **Grok APIs** to recommend outfit combinations from your existing wardrobe. Uses AI-powered logic to understand user preferences and suggest stylish, context-aware looks.",
      technologies: ["Next.js", "Tailwind CSS", "Gemini API", "Grok API"],
      links: [
        {
          type: "Website",
          href: "https://style-sync-project.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/style-sync.png",
    },
    {
      title: "OSV Slack Scanner",
      href: "https://github.com/DujalSawarkar/osv-slack-scanner",
      dates: "2024",
      active: true,
      description:
        "A real-time **npm dependency vulnerability scanner** using Next.js, TypeScript, and the **Google OSV API**, with **Slack DM alerts**, a MongoDB-backed analytics dashboard, GitHub OAuth access control, risk-level classification, and a built-in CLI tool.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Google OSV API",
        "MongoDB",
        "Slack API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DujalSawarkar/osv-slack-scanner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/osv-scanner.png",
    },
    {
      title: "Real Estate CRM",
      href: "https://crm-frontend.motionlabsdemo.shop/",
      dates: "2024",
      active: true,
      description:
        "A scalable **CRM platform** to manage property listings, sales pipelines, and client interactions with real-time dashboards and advanced search. Features **secure role-based access**, automated lead workflows, and bulk import/export with detailed activity tracking.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      links: [
        {
          type: "Website",
          href: "https://crm-frontend.motionlabsdemo.shop/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/real-estate-crm.png",
    },
    {
      title: "Estatery",
      href: "https://github.com/DujalSawarkar",
      dates: "2024",
      active: true,
      description:
        "A scalable **real estate platform** with real-time tracking of property sales, purchases, and rentals. Integrated **ConvexDB** for seamless data handling and **Clerk** for secure authentication — managing over **10,000 daily property listings**. Boosted user engagement by **40%**.",
      technologies: ["React.js", "ConvexDB", "Clerk", "TypeScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/DujalSawarkar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/estatery.png",
    },
    {
      title: "Dressland Uniforms",
      href: "https://github.com/DujalSawarkar",
      dates: "2024",
      active: true,
      description:
        "A robust **school uniform management website** built with Vue.js and Nuxt.js, enabling seamless management of multiple schools and users. Boosted operational efficiency by **35%** and facilitated uniform orders for over **100 schools** with real-time tracking.",
      technologies: ["Vue.js", "Nuxt.js", "TypeScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/DujalSawarkar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/dressland.png",
    },
    {
      title: "Shop.co",
      href: "https://github.com/DujalSawarkar",
      dates: "2024",
      active: true,
      description:
        "A dynamic **eCommerce website** built with Next.js and React.js, with intuitive navigation and secure payment gateways — leading to a **25% increase in conversions**. Advanced product search and filtering reduced user browsing time by **40%**.",
      technologies: ["Next.js", "React.js", "TypeScript", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/DujalSawarkar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/shopco.png",
    },
  ],
  positions: [
    {
      title: "Technical Head",
      dates: "2023 - 2024",
      location: "Computer Student Association, DYPIEMR",
      description:
        "Led tech projects, managed the association website, hosted **20+ events** (hackathons, workshops, tech talks), and amplified student engagement by **30%**.",
      image: "/education/dyp.png",
      links: [],
    },
    {
      title: "Web Developer Head",
      dates: "2022 - 2023",
      location: "Computer Student Association, DYPIEMR",
      description:
        "Upgraded and optimized the association website with **React.js**, improving performance by **40%**, and built a booking system for campus events.",
      image: "/education/dyp.png",
      links: [],
    },
  ],
  achievements: [
    {
      title: "Global Rank under 1500 — CodeChef",
      dates: "October 2022",
      location: "CodeChef October Long Contest",
      image: "/achievements/codechef.png",
    },
    {
      title: "Ranked 1st — CodeQuest",
      dates: "2023",
      location: "Technical Fest, DYPIEMR Pune",
      image: "/achievements/codequest.png",
    },
  ],
} as const;
