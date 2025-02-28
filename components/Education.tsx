'use client'
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GradeIcon from "@mui/icons-material/Grade";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      institution: "Jadavpur University",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "November 2020 – May 2024",
      location: "Kolkata, India",
      score: "CGPA - 8.51",
      image: "jucse.webp", // Placeholder Image for University
    },
    {
      institution: "Jawahar Navodaya Vidyalaya Prayagraj",
      degree: "Higher Secondary School Examination",
      duration: "2018 – 2020",
      location: "Uttar Pradesh, India",
      score: "Percentage - 93.20%",
      image: "/jnv.jpeg", // Placeholder Image for School
    },
    {
      institution: "Jawahar Navodaya Vidyalaya Dalkhola",
      degree: "Secondary School Examination",
      duration: "2013 – 2018",
      location: "Uttar Pradesh, India",
      score: "Percentage - 94.40%",
      image: "/jnv.jpeg", // Placeholder Image for School
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-extrabold text-center text-white mb-12">
        Education
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ delay: index * 0.2, duration: 1 }}
          >
            <div className="relative">
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute top-4 left-4 p-2 bg-gray-900 rounded-full">
                <SchoolIcon className="text-white" fontSize="large" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">
                {edu.institution}
              </h3>
              <p className="text-gray-300 mt-2">{edu.degree}</p>
              <div className="flex items-center text-gray-400 mt-4">
                <DateRangeIcon
                  fontSize="small"
                  className="mr-2 text-gray-400"
                />
                <span>{edu.duration}</span>
              </div>
              <div className="flex items-center text-gray-400 mt-2">
                <LocationOnIcon
                  fontSize="small"
                  className="mr-2 text-gray-400"
                />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center text-gray-400 mt-2">
                <GradeIcon fontSize="small" className="mr-2 text-gray-400" />
                <span>{edu.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
