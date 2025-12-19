import Link from "next/link";

const navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      {/* Container Navbar dengan efek Glassmorphism */}
      <div className="flex items-center gap-6 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
        <Link
          href="#home"
          className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
        >
          Portofolio
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
