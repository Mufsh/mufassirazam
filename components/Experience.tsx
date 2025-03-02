"use client";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import { FaReact, FaJava, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGooglecloud,
  SiKubernetes,
  SiGo,
} from "react-icons/si";
import PlaceIcon from "@mui/icons-material/Place";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      company: "JK Tech",
      role: "Software Developer",
      duration: "June 2024 - Present",
      location: "Bengaluru, India",
      achievements: [
        "Implemented an auto-suggestion feature that dynamically suggests relevant questions to users, improving engagement by 20%.",
        "Built a responsive frontend for a web app, enabling users to search via query or image upload, and integrated backend to fetch similar images, descriptions, and object identification.",
        "Redeveloped and optimized existing components, enhancing performance and usability, which led to a 15% increase in overall system efficiency.",
      ],
      logo: "/jktech.jpeg",
      techStack: [
        "Next.js",
        "React",
        "Node.js",
        "Python",
        "GCP",
        "Kubernetes",
        "Docker",
        "PostgreSQL",
        "TypeScript",
      ],
    },
    {
      company: "Flexmoney",
      role: "Software Development Engineer Intern",
      duration: "January 2024 – February 2024",
      location: "Mumbai, India",
      achievements: [
        "Developed a user-friendly React-based dashboard with backend APIs, streamlining direct modification and update processes, and reducing times by 30%, significantly enhancing overall user efficiency.",
        "Implemented an algorithm for lender ordering, resulting in a 5-7% increase in successful customer acquisition through optimized decision-making.",
        "Enhanced frontend functionality by adding a user-friendly feature, contributing to a 10% increase in user interactions and improving overall platform accessibility.",
        "Working on a project to develop an interface between merchants’ checkout pages and EMI lenders, leveraging React, Spring Boot, and PostgreSQL, to enhance transaction efficiency.",
      ],
      logo: "/flexmoney.jpeg",
      techStack: ["React", "Spring Boot", "Java", "PostgreSQL", "Tailwind"],
    },
    {
      company: "LinkedIn",
      role: "Software Development Engineer Intern",
      duration: "May 2023 - August 2023",
      location: "Bengaluru, India",
      achievements: [
        "Designed and deployed a web-based tool interfacing with internal Account Management Infrastructure. Enabled users to submit login issues via a user-friendly interface, reducing annual ticket volume by over 800 cases.",
        "The tool successfully resolved over 70 percent of user login issues, resulting in annual time savings exceeding 350 man-hours.",
        "Developed a Python module for remote host checks, leveraging HTTP POST requests for initiation and HTTP GET requests for result retrieval, effectively automating the task.",
      ],
      logo: "/linkedin2.png",
      techStack: ["Go", "Python", "React", "PostgreSQL"],
    },
  ];

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "React":
        return <FaReact className="text-blue-500 text-2xl" />;
      case "Node.js":
        return <FaNodeJs className="text-green-600 text-2xl" />;
      case "Java":
        return <FaJava className="text-orange-400 text-2xl" />;
      case "Python":
        return <FaPython className="text-yellow-400 text-2xl" />;
      case "Spring Boot":
        return <FaGithub className="text-yellow-200 text-2xl" />;
      case "Docker":
        return <FaDocker className="text-blue-600 text-2xl" />;
      case "Next.js":
        return <SiNextdotjs  />;
      case "Kubernetes":
        return <SiKubernetes className="text-blue-500 text-2xl" />;
      case "PostgreSQL":
        return <BiLogoPostgresql className="text-blue-800 text-2xl" />;
      case "TypeScript":
        return <SiTypescript className="text-yellow-600 text-2xl" />;
      case "Tailwind":
        return <SiTailwindcss className="text-blue-500 text-2xl" />;
      case "GCP":
        return <SiGooglecloud className="text-orange-500 text-2xl" />;
      case "Go":
        return <SiGo className="text-blue-800 text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <motion.section
      id="experience"
      className="p-6 sm:p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <h2 className="text-3xl sm:text-6xl font-extrabold text-white  mb-8 sm:mb-12 text-center">
          Experience
        </h2>
      </motion.div>

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="max-w-6xl mx-auto mb-10 p-6 sm:p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileInView={{ y: 0 }}
        >
          <div className="flex flex-col sm:flex-row items-center mb-8">
            <Image
              src={exp.logo}
              alt={exp.company}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white shadow-xl mb-4 sm:mb-0 sm:mr-8"
              width={2000}
              height={1000}
            />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white transition-colors duration-300">
                {exp.company}
              </h3>
              <p className="text-lg text-white">{exp.role}</p>
              <div className="flex items-center justify-center sm:justify-start text-sm text-white mt-3">
                <PlaceIcon className="mr-2 text-white" />
                <span>{exp.location}</span> &nbsp;|{" "}
                <span className="ml-2">{exp.duration}</span>
              </div>
            </div>
          </div>

          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-4">
            {exp.achievements.map((ach, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-center text-lg space-x-3"
              >
                <WorkIcon className="text-white" />
                <span>{ach}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
            {exp.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="flex items-center bg-white text-black rounded-full py-1 px-2 text-sm font-medium shadow-md hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
              >
                {getTechIcon(tech)}
                <span className="ml-2">{tech}</span>
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Experience;
