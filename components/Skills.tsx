import BuildIcon from '@mui/icons-material/Build';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    "Java", "Go", "C++", "Python", "TypeScript", "SQL",
    "Docker", "Kubernetes", "Terraform", "NextJS", "ReactJS", "FastAPI",
    "PostgreSQL", "NodeJS", "MongoDB", "Tailwind CSS", "Git", "GCP", "AWS",
  ];

  return (
    <motion.section
      id="skills"
      className="p-8 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <BuildIcon className="mr-2" fontSize="small" />
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;