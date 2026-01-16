import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(../../public/hero.png)" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-4 max-w-3xl"
      >
        <p className="text-sm mb-3">
          Take the guesswork out of your pilot journey.
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Find, Compare and Apply to Top Flight Schools Globally
        </h1>

        {/* Search Bar */}
        <div className="bg-white rounded-lg flex items-center p-2 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search College"
            className="flex-1 px-4 py-2 outline-none text-black"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded-md">
            Search
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
