import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Typography } from "@mui/material";
import Image from "next/image";


const Header = () => {
  return (
    <motion.div
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/321927.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-20"
          width={10}
          height={10}
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-6"
      >
        <Image
          src={"/image.jpeg"}
          alt="Profile"
          className="rounded-full border-4 border-gray-400 w-32 h-32 object-cover mt-20 md:mt-0"
          width={2000}
          height={1000}
        />
      </motion.div>

      <motion.h1
        className="text-3xl sm:text-6xl font-bold mb-4 text-center font-Poppins"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MUFASSIR AZAM
      </motion.h1>

      <motion.p
        className="text-lg sm:text-2xl mb-8 text-center font-Poppins"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Software Developer | Professional Cloud Architect
      </motion.p>

      <motion.div className="flex gap-6 justify-center mb-12">
        <motion.a
          href="mailto:himufassir@gmail.com"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="transition-all"
        >
          <EmailIcon fontSize="large" className="text-gray-300" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mufassir-azam-2a0547205/"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="transition-all"
        >
          <LinkedInIcon fontSize="large" className="text-gray-300" />
        </motion.a>
        <motion.a
          href="https://github.com/Mufsh"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="transition-all"
        >
          <GitHubIcon fontSize="large" className="text-gray-300" />
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button
          href="#contact"
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #1f2937 0%, #4b5563 100%)",
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "600",
            borderRadius: "50px",
            "&:hover": {
              background: "linear-gradient(135deg, #4b5563 0%, #1f2937 100%)",
            },
          }}
        >
          Get in Touch
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-6xl text-center mt-12 bg-gradient-to-r from-gray-700 via-gray-800 to-black p-8 rounded-xl shadow-lg"
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: 600,
            marginBottom: "15px",
            fontSize: "1.5rem",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "20px",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          I’m a passionate Software Developer with a strong focus on cloud
          technologies. I’m also a{" "}
          <span className="font-extrabold">
            certified GCP Professional Cloud Architect,
          </span>
          &nbsp;and I specialize in building scalable applications that drive
          innovation. I am always looking for opportunities to learn and grow,
          striving to make a meaningful impact in the tech world.
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            Check out my{" "}
            <a
              href="https://www.credly.com/badges/f34869dc-918a-406d-bdd8-f237c610c505/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold underline"
            >
              GCP Certification here
            </a>
            .
          </Typography>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
