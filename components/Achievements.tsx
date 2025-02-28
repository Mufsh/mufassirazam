import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    "1st prize in LinkedIn internal Hackathon.",
    "Solved 1200+ problems across various platforms.",
    "Selected for Amazon ML Summer School 2022.",
  ];

  return (
    <motion.section
      id="achievements"
      className="p-8 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
      <div className="space-y-4">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-50 rounded-lg shadow-md flex items-start"
            whileHover={{ scale: 1.02 }}
          >
            <StarIcon className="text-blue-600 mr-4" fontSize="large" />
            <p className="text-gray-700">{ach}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Achievements;