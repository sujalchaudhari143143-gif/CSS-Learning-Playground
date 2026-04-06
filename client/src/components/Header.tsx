import { Link } from "wouter";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary-dark border-b border-gray-700 shadow-md backdrop-blur-md">
      <div className="relative overflow-hidden">
        {/* Glare Effect */}
        <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-glare"></div>

        {/* Content */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <i className="ri-css3-fill text-3xl text-accent"></i>
            <h1 className="text-xl font-bold text-white">CSS Learning Playground</h1>
          </div>

          {/* Nav Links */}
          <nav>
            <ul className="flex flex-wrap gap-1 md:gap-4 text-sm">
              <li><a href="#box-model" className="px-3 py-1 rounded hover:bg-primary-light transition">Box Model</a></li>
              <li><a href="#flexbox" className="px-3 py-1 rounded hover:bg-primary-light transition">Flexbox</a></li>
              <li><a href="#grid" className="px-3 py-1 rounded hover:bg-primary-light transition">Grid</a></li>
              <li><a href="#positioning" className="px-3 py-1 rounded hover:bg-primary-light transition">Positioning</a></li>
              <li><a href="#z-index" className="px-3 py-1 rounded hover:bg-primary-light transition">Z-Index</a></li>
              <li><a href="#transform" className="px-3 py-1 rounded hover:bg-primary-light transition">Transform</a></li>
              <li>
                <a
                  href="https://css-code-master.onrender.com/"
                  className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-500 transition"
                >
                  Code Certifier
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
