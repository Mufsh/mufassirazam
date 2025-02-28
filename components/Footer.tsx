import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="p-4 bg-blue-600 text-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>© 2024 MD MUFASSIR AZAM. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;