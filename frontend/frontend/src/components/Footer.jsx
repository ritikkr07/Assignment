const Footer = () => {
  return (
    <footer className="bg-[#2f2f2f] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left - Logo & description */}
          <div>
            <div className="w-12 h-12 bg-gray-400 mb-4"></div>
            <p className="text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, ac aliquet odio
              mattis. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Training Centers</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Right - Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Social Media Links
            </h4>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-400 rounded-sm"></div>
              <div className="w-8 h-8 bg-gray-400 rounded-sm"></div>
              <div className="w-8 h-8 bg-gray-400 rounded-sm"></div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
