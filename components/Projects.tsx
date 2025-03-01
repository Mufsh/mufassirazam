import { motion } from "framer-motion";
import { FaGithub, FaLink, FaJava } from "react-icons/fa"; // GitHub, Live project links, Java Icon
import {
  SiPython,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiTailwindcss,
  SiKubernetes,
  SiGooglecloud,
} from "react-icons/si"; // Tech stack icons
import { RiExternalLinkFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Vista Ventures Realtor",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiPostgresql key="postgresql" />,
      <SiKubernetes key="k8s" />,
      <SiGooglecloud key="gcp" />,
    ],
    description: `<p class="description">
    <strong>Designed and Deployed a Scalable Real Estate Platform:</strong> Built a high-performance web application for Vista Ventures Realtor using Next.js, React, and Tailwind CSS, improving user engagement by 40% through intuitive UI/UX design.
    <br><br>
    <strong>Containerized and Orchestrated the Application:</strong> Deployed the application using Docker and Kubernetes on Google Kubernetes Engine (GKE), ensuring 99.9% uptime and efficient resource utilization.
    <br><br>
    <strong>Optimized Performance with Microservices and Load Balancing:</strong> Implemented a microservices architecture and set up load balancing on GCP, reducing API response times by 35%.
    <br><br>
    <strong>Enhanced Security and Authentication:</strong> Integrated Clerk and Supabase for authentication, implementing role-based access control to ensure secure property management and admin functionalities.
    </p>
`,
    link: "https://vistaventuresrealtor.com",
    github: "https://github.com/your-repo",
    date: "August 2024",
    image: "/vvr.png", // Add actual image URL here
  },
  {
    title: "YOLO with CBAM for Improved Object Detection",
    techStack: [
      <SiPython key="python" />,
      <SiPostgresql key="postgresql" />,
      <SiKubernetes key="k8s" />,
    ],
    description: `
      <strong>Improved Object Detection Performance:</strong> Achieved a significant increase in the mean average precision (mAP) score for YOLOv7, from 0.795 to 0.808 at IoU@0.5, by integrating Convolutional Block Attention Module (CBAM) to enhance object detection accuracy.
      <br><br>
      <strong>Enhanced Performance Across IoU Thresholds:</strong> Boosted mAP@0.5:0.95 score from 0.681 to 0.698, demonstrating the CBAM-integrated YOLOv7 model's ability to maintain high detection accuracy across a wider range of intersection over union (IoU) thresholds.
      <br><br>
      <strong>Improved Detection in Complex Environments:</strong> Demonstrated improved robustness in vehicle detection, particularly in complex traffic environments with dense objects, occlusions, and varying scales, with CBAM enhancing object localization and classification.
    `,
    link: "https://github.com/your-link",
    github: "https://github.com/your-repo",
    date: "August 2023 - April 2024",
    image: "/yolo.png",
  },
  {
    title: "Hausoos Global",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiPostgresql key="postgresql" />,
      <SiKubernetes key="k8s" />,
    ],
    description: `<p class="description">
    <strong>Built a Cloud-Native Real Estate & Socioeconomic Platform:</strong> Developed a full-stack application for Hausoos, a non-profit organization focusing on real estate trends, using Next.js, React, and Tailwind CSS, with backend services deployed on GCP.
    <br><br>
    <strong>Deployed and Managed Infrastructure with Kubernetes:</strong> Leveraged GKE and Kubernetes for seamless deployment and auto-scaling, reducing downtime by 80% and handling up to 10,000 concurrent users.
    <br><br>
    <strong>Optimized API Performance and Data Processing:</strong> Designed an efficient API architecture with GCP’s Cloud Functions and Pub/Sub, improving data processing speed by 50%.
    <br><br>
    <strong>Secured and Automated CI/CD Pipeline:</strong> Implemented a CI/CD pipeline with GitHub Actions and Cloud Build, enabling automated testing and deployment, cutting deployment time by 60%.
    </p>
`,
    link: "https://hausoosglobal.com",
    github: "https://github.com/your-repo",
    date: "August 2024",
    image: "/hausoos.png", // Add actual image URL here
  },
  {
    title: "Recruita",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiPostgresql key="postgresql" />,
    ],
    description:
      "A full-stack recruitment platform designed to streamline the hiring process and improve recruitment workflows.",
    link: "https://github.com/your-link",
    github: "https://github.com/your-repo",
    date: "November 2024",
    image: "", // No image
  },
  {
    title: "Book For You",
    techStack: [
      <SiPython key="python" />,
      <SiJavascript key="js" />,
      <SiTailwindcss key="tailwind" />,
    ],
    description:
      "Book Recommender system combining Popularity-based and Collaborative Filtering algorithms.",
    link: "https://github.com/your-link",
    github: "https://github.com/your-repo",
    date: "September 2022",
    image: "", // No image
  },
  {
    title: "Art Of Words",
    techStack: [
      <SiJavascript key="js" />,
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiNextdotjs key="next" />,
    ],
    description:
      "Full-stack web app with AI-driven image generation using OpenAI DALL·E API.",
    link: "https://github.com/your-link",
    github: "https://github.com/your-repo",
    date: "January 2023",
    image: "", // No image
  },
  {
    title: "Employee Manager GUI",
    techStack: [<FaJava key={"Java"}/>],
    description:
      "Employee management system with a Java-based GUI for adding, searching, and editing records.",
    link: "https://github.com/your-link",
    github: "https://github.com/your-repo",
    date: "October 2020",
    image: "", // No image
  },
  {
    title: "Bookify",
    techStack: [
      <SiPython key="python" />,
      <SiReact key="react" />,
      <SiPostgresql key="postgresql" />,
    ],
    description:
      "Full-stack book management app with instant summaries using PostgreSQL and FastAPI.",
    link: "https://github.com/your-link",
    github: "https://github.com/your-repo",
    date: "June 2024",
    image: "", // No image
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-extrabold text-center text-white mb-12">
        Projects
      </h2>

      {/* Top Projects Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                  width={2000}
                  height={1000}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 transition-opacity opacity-0 hover:opacity-80 flex justify-center items-center">
                  <Link href={project.link} target="_main">
                    <RiExternalLinkFill className="text-white text-5xl" />
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((icon, idx) => (
                    <span key={idx} className="text-xl text-blue-400">
                      {icon}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <FaLink className="inline mr-2" /> Live Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <FaGithub className="inline mr-2" /> GitHub Repo
                  </a>
                </div>
                <p className="text-gray-500 text-sm mt-4">{project.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hausoos Global Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 gap-10">
          {projects.slice(2, 3).map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 lg:h-96 object-cover rounded-t-xl"
                  width={2000}
                  height={1000}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 transition-opacity opacity-0 hover:opacity-80 flex justify-center items-center">
                  <Link href={project.link} target="_main">
                    <RiExternalLinkFill className="text-white text-5xl" />
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((icon, idx) => (
                    <span key={idx} className="text-xl text-blue-400">
                      {icon}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <FaLink className="inline mr-2" /> Live Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <FaGithub className="inline mr-2" /> GitHub Repo
                  </a>
                </div>
                <p className="text-gray-500 text-sm mt-4">{project.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Remaining Projects Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.slice(3).map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8 transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((icon, idx) => (
                  <span key={idx} className="text-xl text-blue-400">
                    {icon}
                  </span>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  <FaLink className="inline mr-2" /> Live Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  <FaGithub className="inline mr-2" /> GitHub Repo
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4">{project.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
