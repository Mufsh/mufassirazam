import { Dialog } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Certificate {
  id: number;
  image: string;
  title: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    image: "/certificates/gcp.png",
    title: "GCP Professional Cloud Architect",
  },
  {
    id: 2,
    image: "/certificates/amazon.png",
    title: "Amazon ML Summer School",
  },
  { id: 3, image: "/certificates/Exhibition.jpg", title: "Science Exhibition" },
  {
    id: 4,
    image: "/certificates/Essay Writing.jpg",
    title: "Essay Writing",
  },
  { id: 5, image: "/certificates/Quiz.jpg", title: "Quiz" },
  { id: 6, image: "/certificates/Speech.jpg", title: "Speech Competition" },
];

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setOpen(true);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setOpen(false);
  };

  return (
    <motion.section
      id="certificates"
      className="p-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white  shadow-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-extrabold mb-16 text-center ">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            onClick={() => openCertificate(certificate)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image width={2000} height={2000}
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-48 lg:h-64 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">
              {certificate.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {selectedCertificate && (
        <Dialog open={open} onClose={closeCertificate} maxWidth="xl">
          <div className="w-full flex justify-end mb-2 pr-3 text-black">
            <button onClick={closeCertificate}>
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <Image
            width={2000}
            height={2000}
            src={selectedCertificate.image}
            alt={selectedCertificate.title}
            className="w-full max-h-[700px] rounded-lg"
          />
          <h3 className="text-xl font-bold mt-4 text-center">
            {selectedCertificate.title}
          </h3>
        </Dialog>
      )}
    </motion.section>
  );
};

export default Certificates;
