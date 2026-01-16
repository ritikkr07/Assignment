import { motion } from "framer-motion";

const SchoolCard = ({ image, name, location, country }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>🇮🇳</span>
          <span>{country}</span>
        </div>

        <h3 className="mt-2 font-semibold text-gray-800">
          {name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          📍 {location}
        </p>
      </div>
    </motion.div>
  );
};

export default SchoolCard;
