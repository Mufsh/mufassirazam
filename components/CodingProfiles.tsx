import { motion } from "framer-motion";
import { JSX } from "react";
import { FaHackerrank, FaGithub } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

interface CodingProfile {
  name: string;
  icon: JSX.Element;
  link: string;
}

const codingProfiles: CodingProfile[] = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="w-5 h-5 text-orange-500" />,
    link: "https://leetcode.com/u/mufassir/",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="w-5 h-5 text-red-500" />,
    link: "https://www.codechef.com/users/mufassir_azam",
  },
  {
    name: "HackerRank",
    icon: <FaHackerrank className="w-5 h-5 text-green-500" />,
    link: "https://www.hackerrank.com/profile/himufassir",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-5 h-5 text-gray-300" />,
    link: "https://github.com/Mufsh",
  },
  {
    name: "GeeksForGeeks",
    icon: <SiGeeksforgeeks className="w-5 h-5 text-blue-400" />,
    link: "https://www.geeksforgeeks.org/user/himufassir/",
  },
];

const CodingProfiles: React.FC = () => {
  return (
    <motion.section
      id="coding-profiles"
      className="p-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-extrabold mb-12 text-center">
        Coding Profiles
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-xl">{profile.icon}</div>
            <span className="text-sm font-medium">{profile.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default CodingProfiles;
