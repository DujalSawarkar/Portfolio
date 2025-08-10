// import { Icons } from "@/components/icons";
// import { HomeIcon, NotebookIcon, Play } from "lucide-react";
// import { DiPostgresql } from "react-icons/di";
// import { FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
// import { SiAppwrite, SiKubernetes } from "react-icons/si";

// export const DATA = {
//   name: "Prajwal Gadhave", // [cite: 3]
//   initials: "PG",
//   url: "https://prajwal-gadhave.netlify.app/", // from user prompt
//   location: "Akurdi, Pimpri Chinchwad, Pune - 411035", // [cite: 4]
//   locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra",
//   description:
//     "A Full Stack Engineer specializing in creating digital experiences and turning visions into web realities.",
//   summary:
//     "I am Prajwal Gadhave, a final-year Bachelor of Engineering student in Computer Science with a **9.64 CGPA**[cite: 12]. I am primarily a **Full Stack Engineer** with extensive experience in both frontend and backend technologies, including Next.js, TypeScript, and various DevOps tools. I have practical experience as a **Generative AIOps Intern** [cite: 18] and a **Software Development Intern**[cite: 24], where I successfully automated deployment pipelines, redesigned website architectures, and significantly improved performance and user engagement metrics.",
//   avatarUrl: "/me.jpg",
//   skills: [
//     {
//       name: "Next.js",
//       icon: <Icons.nextjs className="size-3" />,
//     },
//     {
//       name: "TypeScript",
//       icon: <Icons.typescript className="size-3" />,
//     },
//     {
//       name: "Node.js",
//       icon: <FaNodeJs className="size-3" />,
//     },
//     {
//       name: "Python",
//       icon: <FaPython className="size-3" />,
//     },
//     {
//       name: "Postgres", // Representing SQL/NeonDB
//       icon: <DiPostgresql className="size-3" />,
//     },
//     {
//       name: "Docker",
//       icon: <FaDocker className="size-3" />,
//     },
//     {
//       name: "Kubernetes",
//       icon: <SiKubernetes className="size-3" />,
//     },
//      {
//       name: "AWS", // From resume skills
//       icon: <Icons.aws className="size-3" />, // Assuming an AWS icon exists in your custom component
//     },
//   ],
//   navbar: [
//     { href: "/", icon: HomeIcon, label: "Home" },
//     { href: "/portfolio", icon: NotebookIcon, label: "Portfolio" }, // Adjusted to match portfolio context
//   ],
//   contact: {
//     email: "prajwalgadhave356@gmail.com", // [cite: 5]
//     tel: "+91-7709027812", // [cite: 1]
//     social: {
//       GitHub: {
//         name: "GitHub",
//         url: "https://github.com/PrajwalGadhave", // Assumed from projects
//         icon: Icons.github,
//         navbar: true,
//       },
//       LinkedIn: {
//         name: "LinkedIn",
//         url: "https://linkedin.com/in/prajwal-gadhave", // [cite: 6]
//         icon: Icons.linkedin,
//         navbar: true,
//       },
//       email: {
//         name: "Send Email",
//         url: "mailto:prajwalgadhave356@gmail.com", // [cite: 5]
//         icon: Icons.email,
//         navbar: false,
//       },
//     },
//   },

//   work: [
//     {
//       company: "LinuxWorld Informatics Pvt Ltd.", // [cite: 17]
//       href: "https://www.linuxworldindia.org/",
//       badges: [],
//       location: "Remote", // [cite: 19]
//       title: "Generative AIOps Intern", // [cite: 18]
//       logoUrl: "/work-experience/linuxworld.png",
//       start: "June 2023", // [cite: 19]
//       end: "December 2023", // [cite: 19]
//       description: [
//         "- Managed an **AWS-based platform** to automate the creation and deployment of Dockerfiles to GitHub, reducing deployment time by **50%**. [cite: 20]",
//         "- Designed and deployed a 4-stage **AI-powered CI/CD pipeline** that automates code deployments to EKS, triggered by GitHub events. [cite: 21]",
//         "- Collaborated in a cross-functional team to integrate **Generative AI technologies**, increasing successful code deployments by **25%** in the first quarter. [cite: 22]",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://www.linuxworldindia.org/",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//     },
//     {
//       company: "WaveAuth", // [cite: 23]
//       href: "#", // No URL provided
//       badges: [],
//       location: "Remote", // [cite: 25]
//       title: "Software Development Intern", // [cite: 24]
//       logoUrl: "/work-experience/waveauth.png",
//       start: "March 2022", // [cite: 25]
//       end: "September 2022", // [cite: 25]
//       description: [
//         "- Delivered **2 high-quality, scalable and responsive websites** for clients, optimizing user experience and ensuring web accessibility. [cite: 26]",
//         "- Teamed up with **4 developers** to design and implement user-friendly interfaces, ensuring a **30% faster project delivery**. [cite: 27]",
//         "- Redesigned website architecture in **Next.js** to improve performance and optimize security, reducing page load times by **15%**. [cite: 28]",
//         "- Upgraded **SEO optimization techniques**, increasing organic traffic by **25%** and boosting search engine rankings. [cite: 29]",
//       ],
//       links: [],
//     },
//   ],
//   education: [
//     {
//       school: "Dr. D.Y. Patil Institute of Engineering, Management and Research, Pune", // [cite: 7]
//       href: "https://dypiemr.ac.in/",
//       degree:
//         "Bachelor of Engineering in Computer Science | CGPA: 9.64 (Current)", // [cite: 7, 12]
//       logoUrl: "/dypiemr.png",
//       start: "2021", // [cite: 12]
//       end: "2025", // [cite: 12]
//     },
//   ],
//   projects: [
//     {
//       title: "Lingo - Language Learning App", // [cite: 31]
//       href: "https://github.com/PrajwalGadhave/lingo", // Assumed
//       dates: "April 2024 - July 2024", // [cite: 32]
//       active: true,
//       description:
//         "A Duolingo-inspired platform with **AI-generated voices** and an **interactive points/XP system**[cite: 33]. Integrated **Stripe for Pro subscriptions** and a React Admin dashboard for management[cite: 34]. Implemented a hearts system and lesson retry feature, boosting consistent learning and improving retention by **15%**[cite: 35].",
//       technologies: ["Next.js", "TypeScript", "Drizzle", "NeonDB", "Stripe"], // [cite: 31]
//       links: [
//         {
//           type: "Source",
//           href: "https://github.com/PrajwalGadhave/lingo", // Assumed
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "/projects/lingo.png",
//     },
//     {
//       title: "Keep Up - Professional Notes Taking App", // [cite: 36]
//       href: "https://github.com/PrajwalGadhave/keep-up", // Assumed
//       dates: "December 2023 - March 2024", // [cite: 37]
//       active: true,
//       description:
//         "Innovated a **Notion-style editor** with real-time updates, infinite child documents, and file management, improving efficiency by **20%**[cite: 37]. Implemented public note sharing with unique web URLs and used a **Postgres-based real-time database with Convex** for scalable data handling. [cite: 38]",
//       technologies: ["Next.js", "TypeScript", "Convex", "EdgeStore", "Zod"], // [cite: 36]
//       links: [
//         {
//           type: "Source",
//           href: "https://github.com/PrajwalGadhave/keep-up", // Assumed
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "/projects/keep-up.png",
//     },
//      {
//       title: "Threads - Social Media Application", // [cite: 40]
//       href: "https://github.com/PrajwalGadhave/threads-clone", // Assumed
//       dates: "July 2023 - November 2023", // [cite: 39]
//       active: true,
//       description:
//         "Built a Threads App clone handling up to **200+ concurrent users**[cite: 41]. Features include light/dark mode, file uploads, and real-time database interactions. Enhanced security with **Clerk authentication** and used webhooks for real-time event processing. [cite: 42]",
//       technologies: ["Next.js", "TypeScript", "MongoDB", "Uploadthing", "Clerk"], // [cite: 40]
//       links: [
//         {
//           type: "Source",
//           href: "https://github.com/PrajwalGadhave/threads-clone", // Assumed
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "/projects/threads.png",
//     },
//   ],
//   positions: [
//     {
//       title: "Technical Team Head", // [cite: 47]
//       dates: "2023 - 2024",
//       location: "COMPSA, DYPIEMR", // [cite: 47]
//       description:
//         "Led the technical team of the Computer Student's Association, organizing **20+ technical and non-technical events** including hackathons, workshops, and fresher's parties. [cite: 47]",
//       image: "/compsa.png",
//       links: [],
//     },
//      {
//       title: "Content Creator",
//       dates: "2022 - Present",
//       location: "YouTube",
//       description:
//         "Scaled a YouTube Channel to **1.5K+ subscribers** and **145k+ views**, focusing on spiritual content from the Bhagavad Gita. [cite: 48]",
//       image: "/youtube.png",
//       links: [],
//     },
//   ],
//   achievements: [
//     {
//       title: "Top Performer of the Month",
//       dates: "2023",
//       location: "LinuxWorld Informatics",
//       description: "Awarded **Top performer of the Month**, ranking 1st among all interns at LinuxWorld Informatics. [cite: 46]",
//       image: "/achievements/linuxworld.png",
//     },
//      {
//       title: "CodeQuest Rank 1",
//       dates: "2023",
//       location: "Techfest 2023",
//       description: "**Ranked 1st** in the CodeQuest offline round conducted during Techfest 2023. [cite: 45]",
//       image: "/achievements/codequest.png",
//     },
//     {
//       title: "CodeChef Division 4 Winner",
//       dates: "2023",
//       location: "Global",
//       description: "**Secured 1st from Division 4 globally** in a Long Contest by CodeChef. [cite: 44]",
//       image: "/achievements/codechef.png",
//     },
//   ],
// } as const;
