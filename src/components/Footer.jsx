import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const productLinks = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "API Docs", href: "#" },
    { name: "Browser Extension", href: "#" },
    { name: "Report Malicious URL", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
  ];

  const bottomLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  return (
    <footer className="w-full bg-white pt-16 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-100">
          {/* Left Column: Brand & Info (Span 6 on LG) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5">
            {/* Logo */}
            <a
              href="#"
              className="text-base sm:text-lg font-bold tracking-[0.25em] text-slate-900 uppercase"
            >
              THETINY.SITE
            </a>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              The fastest way to shorten, track, and manage your URLs. Trusted
              by thousands of marketers, developers, and businesses across
              Bangladesh and beyond.
            </p>

            {/* Social Icons (Circular Buttons) */}
            <div className="flex items-center space-x-3 pt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801880811048"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-2 pt-2">
              <a
                href="mailto:banglapuzzle@gmail.com"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-[#5842F4] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5842F4]" />
                <span>banglapuzzle@gmail.com</span>
              </a>
              <a
                href="tel:+8801880811048"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-[#5842F4] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5842F4]" />
                <span>+880 1880-811048</span>
              </a>
            </div>
          </div>

          {/* Right Area: Links Grid (Span 6 on LG) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12 lg:pl-16">
            {/* Product Column */}
            <div>
              <h3 className="text-xs font-bold tracking-wider text-slate-700 uppercase mb-4">
                PRODUCT
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-500 hover:text-[#5842F4] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-xs font-bold tracking-wider text-slate-700 uppercase mb-4">
                COMPANY
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-500 hover:text-[#5842F4] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © 2026{" "}
            <span className="text-[#5842F4] font-medium">
              Bangla Puzzle Limited
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {bottomLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-slate-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
