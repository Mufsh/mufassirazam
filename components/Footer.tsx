import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="p-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-2">
        
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/mufassir-azam-2a0547205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Mufsh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:himufassir@gmail.com"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Mufassir Azam. All rights reserved.
        </p>

        <p className="text-xs text-gray-500 text-center">
          Made with ❤️ by Mufassir Azam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
