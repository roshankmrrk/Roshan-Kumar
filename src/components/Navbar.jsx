import React, { useState } from "react";
import logo from "../assets/raviKumarLogo.webp";
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const socialLinks = [
    {
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/roshan-kumar-rauniyar-119536375/",
      color: "#0A66C2",
      label: "LinkedIn",
    },
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/crazyroshan2022",
      color: "#E4405F",
      label: "Instagram",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/roshankmrrk",
      color: "#fff",
      label: "GitHub",
    },
  ];

  // ✅ Proper section mapping
  const sectionMap = {
    Home: "home",
    Education: "education",
    Skills: "skills",
    Projects: "projects",
    Testimonials: "testimonials",
    Contact: "contact",
  };

  const handleScroll = (sectionName) => {
    const id = sectionMap[sectionName];
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navLinks = Object.keys(sectionMap);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 text-white">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("Home");
            }}
            className="flex items-center"
          >
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              src={logo}
              className="mx-2"
              width={50}
              height={33}
              alt="logo"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item)}
                className="hover:text-blue-400 transition-colors font-medium"
              >
                {item}
              </button>
            ))}

            <div className="flex items-center gap-5 text-2xl ml-4">
              {socialLinks.map(({ Icon, link, color, label }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    color: color,
                    textShadow: `0px 0px 8px ${color}`,
                  }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-[80px] md:h-[90px]" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-2/3 h-screen bg-blue-500/20 backdrop-blur-xl border-l border-blue-400/20 text-white p-8 flex flex-col gap-6 z-[100] shadow-2xl"
          >
            {/* Header with Close */}
            <div className="flex items-center justify-between border-b border-white/30 pb-3">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl hover:text-blue-300 transition"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-4 text-lg mt-4">
              {navLinks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item)}
                  className="hover:text-blue-300 transition text-left"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mt-auto flex justify-center gap-6 text-2xl">
              {socialLinks.map(({ Icon, link, color, label }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{
                    scale: 1.2,
                    color: color,
                    textShadow: `0px 0px 8px ${color}`,
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
