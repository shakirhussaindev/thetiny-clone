import { useState } from "react";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#", active: false },
    { name: "Blog", href: "#", active: false },
    { name: "Terms", href: "#", active: false },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 uppercase font-sans"
            >
              THETINY.SITE
            </a>
          </div>

          {/* Desktop & Tablet Links (Large & Medium Device) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm sm:text-base font-medium transition-colors ${
                  link.active
                    ? "text-[#5842F4]" 
                    : "text-gray-500 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop & Tablet Buttons (Large & Medium Device) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#login"
              className="px-5 py-2 text-sm font-medium text-slate-800 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all shadow-sm"
            >
              Log In
            </a>
            <a
              href="#signup"
              className="px-5 py-2 text-sm font-medium text-white bg-[#5842F4] hover:bg-[#4730e6] rounded-lg transition-all shadow-sm"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile Menu Toggle Button (Small Device) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close Icon (X)
                <X/>
              ) : (
                // Hamburger Menu Icon
                <Menu/>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Small Device) */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-0 bg-white z-50 border-b border-gray-200 shadow-xl transition-all">
          <div className="max-w-7xl mx-auto px-5 py-4">
            {/* Mobile Header: Logo & Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="text-lg font-bold tracking-widest text-slate-900 uppercase">
                THETINY.SITE
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
              >
                <X/>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-4 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium text-left ${
                    link.active
                      ? "text-[#5842F4]"
                      : "text-slate-800 hover:text-[#5842F4]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-3 pt-2 pb-3">
              <a
                href="#login"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 text-center text-sm font-medium text-slate-800 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
              >
                Log In
              </a>
              <a
                href="#signup"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 text-center text-sm font-medium text-white bg-[#5842F4] hover:bg-[#4730e6] rounded-lg transition-colors shadow-sm"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
