import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Play } from "lucide-react";
import { DiPostgresql } from "react-icons/di";
import { FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAppwrite, SiKubernetes } from "react-icons/si";

export const DATA = {
  name: "Dujal Sawarkar",
  initials: "DS",
  url: "https://www.dujal.vercel.app",
  location: "Pune, India",
  locationLink: "https://maps.app.goo.gl/N856FibcPBczxdJf9",
  description:
    "A developer building cool solutions with open source technologies.",
  summary:
    "I am **Dujal Sawarkar**, a final-year Bachelor of Engineering student in Computer Science with a **9.64 CGPA**. I am primarily a **Full Stack Engineer** with extensive experience in both frontend and backend technologies, including Next.js, TypeScript, and various DevOps tools. I have practical experience as a **Generative AIOps Intern** and a **Software Development Intern**, where I successfully automated deployment pipelines, redesigned website architectures, and significantly improved performance and user engagement metrics.",
  avatarUrl: "/me.jpeg",
  skills: [
    {
      name: "Next.js",
      icon: <Icons.nextjs className="size-3" />,
    },
    {
      name: "Typescript",
      icon: <Icons.typescript className="size-3" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="size-3" />,
    },
    {
      name: "Python",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "Postgres",
      icon: <DiPostgresql className="size-3" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="size-3" />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="size-3" />,
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite className="size-3" />,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "prajwalgadhave356@gmail.com",
    tel: "+91 7709027812",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prajwal-0706",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prajwal-gadhave/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:prajwalgadhave356@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "LinuxWorld Informatics",
      href: "https://www.lwindia.com/",
      badges: [],
      location: "On site",
      title: "Generative AIOps Intern",
      logoUrl: "/work-experience/lw.png",
      start: "June 2023",
      end: "December 2023",
      description: [
        "- Joined LinuxWorld Informatics as a **Generative AIOps Intern** in June, 2023.",
        "-----",
        "- Managed an AWS-based platform to **automate the creation and deployment of Dockerfiles to GitHub**, reducing deployment time by 50%.",
        "- Designed and deployed 4 stages from **AI-powered CI/CD pipeline** that automates code deployments to EKS triggered by GitHub events, minimizing common deployment errors.",
        "- Collaborated in a cross-functional team to integrate Generative AI technologies, increasing **successful code deployments** by 25% in the first quarter.",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.lwindia.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Confirmation Letter",
          href: "https://drive.google.com/file/d/1CYnQCQz1kKd4DhnwDVK5k0gu1g_FV6WJ/view?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
    },
    {
      company: "Turing Techlabs",
      href: "https://turingtechlabs.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/work-experience/turing.png",
      start: "March 2022",
      end: "September 2022",
      description: [
        "- Coordinated with Turing Techlabs to design and deliver an amazing website for a Hospital",
        "- ShreeArogyam Ayu: Created a fully customized **React-based website**, enhancing the online presence of client's business",
      ],
      links: [
        {
          type: "Website",
          href: "https://turingtechlabs.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Letter of Recommendation",
          href: "https://drive.google.com/file/d/1ONCudngptfuLZuR7hjSinbvVSr7fEnbd/view?usp=sharing",
          icon: <Icons.email className="size-3" />,
        },
      ],
    },
  ],
  education: [
    {
      school:
        "Dr. D.Y. Patil Institute of Engineering, Management and Research",
      href: "https://www.dypiemr.ac.in/",
      degree:
        "Bachelor's of Technology in Computer Science Engineering | 9.83 CGPA",
      logoUrl: "/education/dyp.png",
      start: "2021",
      end: "2025",
    },
    {
      school:
        "Vidya Pratishthan's Someshwar English Medium School & Jr. College",
      href: "https://www.vpsomeshwar.org/",
      degree: "Senior Secondary | X - 80.8% | XII - 91.5%",
      logoUrl: "/education/vpsems.png",
      start: "2009",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Keep Up",
      href: "https://keep-up-brown.vercel.app/",
      dates: "December 2023 - March 2024",
      active: true,
      // TODO: TO edit the description
      description:
        "Time of Use (TOU) Tariff based Solar and Grid energy management platform along with Web3 based excess energy trading.",
      technologies: ["Next.js", "Typescript", "LLaMa3.2", "Web Scraping"],
      links: [
        {
          type: "Website",
          href: "https://keep-up-brown.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prajwal-0706/Keep-Up",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/keep-up.png",
    },
    {
      title: "Lingo",
      href: "https://lingo-snowy.vercel.app/",
      dates: "September 2024 - October 2024",
      active: true,
      description:
        "A Duolingo-inspired platform with **AI-generated voices** and an interactive **points/XP system**. Implemented a **hearts system** and **lesson retry feature**, boosting consistent learning and improving language learning curve.",
      technologies: ["Next.js", "Typescript", "CopilotKit", "Appwrite"],
      links: [
        {
          type: "Website",
          href: "https://lingo-snowy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prajwal-0706/lingo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/lingo.svg",
    },
    {
      title: "Threads",
      href: "https://threads-social-media-app.vercel.app/",
      dates: "April 2023 - March 2023",
      active: true,
      description:
        "A news sharing platform targeting university students in particular, aiming to reduce spread of misinformation.",
      technologies: ["Java", "XML", "Firebase", "Android Studio"],
      links: [
        {
          type: "Website",
          href: "https://threads-social-media-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prajwal-0706/threads-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/bu-news.png",
    },
    {
      title: "Asclepius",
      href: "https://github.com/ChiragAgg5k/asclepius",
      dates: "Dec 2022 - Jan 2023",
      active: true,
      description:
        "A desktop application developed in Python and Custom Tkinter to view and request medicines from the Wellness center, check medicine availability, and order medicines directly.",
      technologies: ["Python", "Tkinter", "SQLite"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ChiragAgg5k/asclepius",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/asclepius.png",
    },
  ],
  positions: [
    {
      title: "Content Writer",
      dates: "July 2024 - Present",
      location: "GeeksForGeeks",
      description:
        "I like to write technical articles for GeeksForGeeks in my past time. Let's me be updated with various kinds of technologies.",
      image: "/gfg.png",
      links: [
        {
          title: "Contributions",
          href: "https://www.geeksforgeeks.org/user/chiragaggarwal5k/contributions/",
        },
      ],
    },
    {
      title: "Summer Immersion Participant",
      dates: "July 2024",
      location: "FPT University, Da Nang, Vietnam",
      description:
        "Participated in a 10-day fully funded Summer Immersion Programme in Vietnam hosted by FPT University, providing rich insights into Vietnamese culture from a entrepreneurship and technological point of view.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_fpt_university.jpg",
      links: [
        {
          title: "Website",
          href: "https://international.fpt.edu.vn/",
        },
        {
          title: "Photos",
          href: "https://www.linkedin.com/posts/bennett-university_bennettuniversity-globalexposure-entrepreneurshipjourney-ugcPost-7232006796473683968-tKMa?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Technical Co-Head",
      dates: "August 2023 - May 2024",
      location: "Computer Society of India, Bennett University",
      description:
        "As the technical co-head of the CSI chapter of my university, I was responsible for organizing various events, workshops, and hackathons. I also mentored and guided students in their technical journey.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s",
      links: [
        { title: "Website", href: "https://csiindia.org/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/csi-india/",
        },
        {
          title: "Welcome Letter",
          href: "https://www.linkedin.com/posts/chiragagg5k_newrole-bennettuniversity-technology-activity-7097467074863636480-M1q6",
        },
      ],
    },
    {
      title: "Rearch Content Management",
      dates: "September 2022 - May 2023",
      location: "Bennett Undergraduate Research Society (BURS)",
      description:
        "The research society peaked my interest in the field of research, allowing me to be guided by seniors to work on various research related projects as well as organizing events like Rescon.",
      image: "/burs.png",
      links: [
        { title: "Website", href: "https://www.burs.bennett.edu.in/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/buresearchsociety/posts/?feedView=all/",
        },
      ],
    },
  ],
  achievements: [
    {
      title: "Summer Immersion in Vietnam",
      dates: "July 2024",
      location: "FPT University, Da Nang, Vietnam",
      image: "/achievements/summer-immersion.jpeg",
    },
    {
      title: "Github Constellation",
      dates: "June 2024",
      location: "Bangalore",
      image: "/achievements/github-constellation.jpeg",
    },
    {
      title: "Hackaccino",
      dates: "April 2024",
      location: "CSI Bennett University",
      image: "/achievements/hackaccino.jpeg",
    },
    {
      title: "HackWithDelhi",
      dates: "April 2024",
      location: "GL Bajaj Institute of Technology and Management",
      image: "/achievements/hackwithdelhi.jpeg",
    },
    {
      title: "HackCBS",
      dates: "November 2023",
      location: "Shaheed Sukhdev College of Business Studies",
      image: "/achievements/hackcbs.jpeg",
    },
    {
      title: "Luminous TechnoX Hackathon",
      dates: "December 2023",
      location: "Taj City Center, Gurugram",
      image: "/achievements/luminous.jpg",
    },
  ],
} as const;
