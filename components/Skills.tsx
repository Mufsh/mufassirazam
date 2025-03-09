// import { motion } from "framer-motion";
// import {
//   FaDocker,
//   FaAws,
//   FaGithub,
//   FaJava,
//   FaPython,
//   FaReact,
// } from "react-icons/fa";
// import {
//   SiJupyter,
//   SiTensorflow,
//   SiPytorch,
//   SiOpencv,
//   SiTypescript,
//   SiCplusplus,
//   SiTerraform,
//   SiNextdotjs,
//   SiPostgresql,
//   SiNodedotjs,
//   SiMongodb,
//   SiTailwindcss,
//   SiFastapi,
//   SiYaml,
//   SiVercel,
//   SiGooglecloud,
//   SiKubernetes
// } from "react-icons/si";
// import { TbBrandGolang, TbSql } from "react-icons/tb";
// import { RiToolsLine } from "react-icons/ri";
// import { GiArtificialIntelligence, GiClout } from "react-icons/gi";
// import { MdOutlineLanguage } from "react-icons/md";
// import { FaCloudArrowUp } from "react-icons/fa6";

// const Skills = () => {
//   const skillsData = [
//     {
//       title: "Languages",
//       icon: <MdOutlineLanguage className="w-8 h-8 text-blue-500" />,
//       skills: [
//         { name: "Java", icon: <FaJava className="w-6 h-6" /> },
//         { name: "Go", icon: <TbBrandGolang className="w-6 h-6" /> },
//         { name: "C++", icon: <SiCplusplus className="w-6 h-6" /> },
//         { name: "Python", icon: <FaPython className="w-6 h-6" /> },
//         { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
//         { name: "SQL", icon: <TbSql className="w-6 h-6" /> },
//       ],
//     },
//     {
//       title: "DevOps",
//       icon: <GiArtificialIntelligence className="w-8 h-8 text-green-500" />,
//       skills: [
//         { name: "Docker", icon: <FaDocker className="w-6 h-6" /> },
//         { name: "Kubernetes", icon: <SiKubernetes className="w-6 h-6" /> },
//         { name: "Terraform", icon: <SiTerraform className="w-6 h-6" /> },
//         { name: "YAML", icon: <SiYaml className="w-6 h-6" /> },
//       ],
//     },
//     {
//       title: "Technologies/Frameworks/Libraries",
//       icon: <RiToolsLine className="w-8 h-8 text-purple-500" />,
//       skills: [
//         { name: "NextJS", icon: <SiNextdotjs className="w-6 h-6" /> },
//         { name: "ReactJS", icon: <FaReact className="w-6 h-6" /> },
//         { name: "FastAPI", icon: <SiFastapi className="w-6 h-6" /> },
//         { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" /> },
//         { name: "NodeJS", icon: <SiNodedotjs className="w-6 h-6" /> },
//         { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
//         { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
//         { name: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
//       ],
//     },
//     {
//       title: "Tools",
//       icon: <RiToolsLine className="w-8 h-8 text-yellow-500" />,
//       skills: [
//         { name: "Git", icon: <FaGithub className="w-6 h-6" /> },
//         { name: "Clerk", icon: <SiVercel className="w-6 h-6" /> },
//         { name: "Vercel", icon: <SiVercel className="w-6 h-6" /> },
//         { name: "CI/CD", icon: <FaGithub className="w-6 h-6" /> },
//       ],
//     },
//     {
//       title: "Cloud",
//       icon: <FaCloudArrowUp className="w-8 h-8 text-red-500" />,
//       skills: [
//         {
//           name: "Google Cloud Platform (GCP Certified)",
//           icon: <SiGooglecloud className="w-6 h-6" />,
//         },
//         { name: "AWS (Basic)", icon: <FaAws className="w-6 h-6" /> },
//       ],
//     },
//     {
//       title: "Machine Learning",
//       icon: <GiArtificialIntelligence className="w-8 h-8" />,
//       skills: [
//         { name: "Object Detection", icon: <SiOpencv className="w-6 h-6" /> },
//         { name: "YOLO", icon: <SiTensorflow className="w-6 h-6" /> },
//         { name: "CBAM", icon: <SiPytorch className="w-6 h-6" /> },
//         { name: "Jupyter Notebook", icon: <SiJupyter className="w-6 h-6" /> },
//         { name: "TensorFlow", icon: <SiTensorflow className="w-6 h-6" /> },
//       ],
//     },
//   ];

//   return (
//     <motion.section
//       id="skills"
//       className="p-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-2xl"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <h2 className="text-5xl font-extrabold mb-16 text-center  text-white bg-gradient-to-r ">
//         My Skills
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {skillsData.map((category, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="p-3 bg-gray-700 rounded-lg">{category.icon}</div>
//               <h3 className="text-2xl font-bold text-gray-100">
//                 {category.title}
//               </h3>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {category.skills.map((skill, skillIndex) => (
//                 <motion.div
//                   key={skillIndex}
//                   className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <div className="text-2xl text-green-400">{skill.icon}</div>
//                   <span className="text-lg font-medium text-gray-100">
//                     {skill.name}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         className="absolute top-0 left-0 w-full h-full pointer-events-none"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <GiArtificialIntelligence className="absolute top-20 left-20 text-9xl text-gray-700 opacity-30" />
//         <GiClout className="absolute bottom-20 right-20 text-9xl text-gray-700 opacity-30" />
//       </motion.div>
//     </motion.section>
//   );
// };

// export default Skills;

import { motion } from "framer-motion";
import {
  FaDocker,
  FaAws,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiJupyter,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiTypescript,
  SiCplusplus,
  SiTerraform,
  SiNextdotjs,
  SiPostgresql,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFastapi,
  SiYaml,
  SiVercel,
  SiGooglecloud,
  SiKubernetes,
} from "react-icons/si";
import { TbBrandGolang, TbSql } from "react-icons/tb";
import { RiToolsLine } from "react-icons/ri";
import { GiArtificialIntelligence, GiClout } from "react-icons/gi";
import { MdOutlineLanguage } from "react-icons/md";
import { FaCloudArrowUp } from "react-icons/fa6";

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      icon: <MdOutlineLanguage className="w-8 h-8 text-blue-500" />,
      skills: [
        { name: "Java", icon: <FaJava className="w-6 h-6" /> },
        { name: "Go", icon: <TbBrandGolang className="w-6 h-6" /> },
        { name: "C++", icon: <SiCplusplus className="w-6 h-6" /> },
        { name: "Python", icon: <FaPython className="w-6 h-6" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
        { name: "SQL", icon: <TbSql className="w-6 h-6" /> },
      ],
    },
    {
      title: "DevOps",
      icon: <GiArtificialIntelligence className="w-8 h-8 text-green-500" />,
      skills: [
        { name: "Docker", icon: <FaDocker className="w-6 h-6" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-6 h-6" /> },
        { name: "Terraform", icon: <SiTerraform className="w-6 h-6" /> },
        { name: "YAML", icon: <SiYaml className="w-6 h-6" /> },
      ],
    },
    {
      title: "Technologies/Frameworks/Libraries",
      icon: <RiToolsLine className="w-8 h-8 text-purple-500" />,
      skills: [
        { name: "NextJS", icon: <SiNextdotjs className="w-6 h-6" /> },
        { name: "ReactJS", icon: <FaReact className="w-6 h-6" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-6 h-6" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" /> },
        { name: "NodeJS", icon: <SiNodedotjs className="w-6 h-6" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
        { name: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
      ],
    },
    {
      title: "Tools",
      icon: <RiToolsLine className="w-8 h-8 text-yellow-500" />,
      skills: [
        { name: "Git", icon: <FaGithub className="w-6 h-6" /> },
        { name: "Clerk", icon: <SiVercel className="w-6 h-6" /> },
        { name: "Vercel", icon: <SiVercel className="w-6 h-6" /> },
        { name: "CI/CD", icon: <FaGithub className="w-6 h-6" /> },
      ],
    },
    {
      title: "Cloud",
      icon: <FaCloudArrowUp className="w-8 h-8 text-red-500" />,
      skills: [
        {
          name: "Google Cloud Platform (GCP Certified)",
          icon: <SiGooglecloud className="w-6 h-6" />,
        },
        { name: "AWS (Basic)", icon: <FaAws className="w-6 h-6" /> },
      ],
    },
    {
      title: "Machine Learning",
      icon: <GiArtificialIntelligence className="w-8 h-8" />,
      skills: [
        { name: "Object Detection", icon: <SiOpencv className="w-6 h-6" /> },
        { name: "YOLO", icon: <SiTensorflow className="w-6 h-6" /> },
        { name: "CBAM", icon: <SiPytorch className="w-6 h-6" /> },
        { name: "Jupyter Notebook", icon: <SiJupyter className="w-6 h-6" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="w-6 h-6" /> },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl lg:text-5xl font-extrabold mb-16 text-center text-white bg-gradient-to-r">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gray-700 rounded-lg">{category.icon}</div>
              <h3 className="font-bold text-gray-100 truncate sm:text-lg md:text-xl lg:text-2xl">
                {category.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl text-green-400">{skill.icon}</div>
                  <span className="lg:text-lg font-medium text-gray-100">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <GiArtificialIntelligence className="absolute top-20 left-20 text-9xl text-gray-700 opacity-30" />
        <GiClout className="absolute bottom-20 right-20 text-9xl text-gray-700 opacity-30" />
      </motion.div>
    </motion.section>
  );
};

export default Skills;

