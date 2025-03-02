import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCode,
  FaAward,
  FaStar,
  FaSchool,
  FaChartLine,
  FaMedal,
  FaBook,
  FaGraduationCap,
} from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy className="w-8 h-8 text-yellow-500" />,
      title: "1st Prize in LinkedIn Internal Hackathon",
      description:
        "Won 1st prize in a competitive hackathon organized by LinkedIn.",
    },
    {
      icon: <FaCode className="w-8 h-8 text-blue-500" />,
      title: "Solved 1500+ Problems",
      description:
        "Solved over 1500 problems across platforms like LeetCode, CodeChef, and HackerRank.",
    },
    {
      icon: <FaAward className="w-8 h-8 text-purple-500" />,
      title: "2nd Runner Up in Flexathon 2.0",
      description:
        "Secured 2nd runner up position in Flexathon 2.0, a national-level hackathon.",
    },
    {
      icon: <FaStar className="w-8 h-8 text-green-500" />,
      title: "3* at CodeChef (Rating: 1632)",
      description:
        "Achieved a 3-star rating on CodeChef with a highest rating of 1632.",
    },
    {
      icon: <FaSchool className="w-8 h-8 text-red-500" />,
      title: "Selected for Amazon ML Summer School 2022",
      description:
        "Selected based on a coding and MCQ test for Amazon's prestigious ML Summer School.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-indigo-500" />,
      title: "Global Rank 16 in CodeChef’s August Lunchtime Div-3",
      description:
        "Secured a global rank of 16 in CodeChef’s August Lunchtime Division 3 contest.",
    },
    {
      icon: <FaMedal className="w-8 h-8 text-pink-500" />,
      title: "5* in Java and C++ on HackerRank",
      description: "Achieved 5-star ratings in Java and C++ on HackerRank.",
    },
    {
      icon: <FaBook className="w-8 h-8 text-teal-500" />,
      title: "Answered 100+ Questions on Chegg",
      description:
        "Worked as a Computer Science Expert, answering 100+ questions on Chegg.",
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-orange-500" />,
      title: "Top 1% in WBJEE Engineering Entrance Exam",
      description:
        "Ranked in the top 1% in the West Bengal Joint Entrance Examination (WBJEE).",
    },
    {
      icon: <FaTrophy className="w-8 h-8 text-yellow-500" />,
      title: "School Topper in IMO and IEO",
      description:
        "Topped the school in International Math and English Olympiads (IMO & IEO).",
    },
  ];

  return (
    <motion.section
      id="achievements"
      className="p-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-extrabold mb-16 text-center">
        Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-700 rounded-lg">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-100">
                {achievement.title}
              </h3>
            </div>
            <p className="text-lg text-gray-300">{achievement.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FaTrophy className="absolute top-20 left-20 text-9xl text-gray-700 opacity-30" />
        <FaAward className="absolute bottom-20 right-20 text-9xl text-gray-700 opacity-30" />
      </motion.div>
    </motion.section>
  );
};

export default Achievements;
