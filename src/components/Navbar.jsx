import logo from "../assets/raviKumarLogo.webp";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Navbar = () => {
  const socialLinks = [
    {
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/roshan-kumar-rauniyar-119536375/",
      color: "#0A66C2",
      label: "LinkedIn",
    },
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/crazyroshan2022?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "#E4405F",
      label: "Instagram",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/roshankmrrk",
      color: "#fff",
      label: "GitHub",
    },
    {
      Icon: SiLeetcode,
      link: "https://leetcode.com/u/uuv7tP9xnH/",
      color: "#F89F1B",
      label: "LeetCode",
    },
  ];

  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
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
      </div>

      {/* Social Links */}
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        {socialLinks.map(({ Icon, link, color, label }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{
              scale: 1.3,
              rotate: 10,
              color: color,
              textShadow: `0px 0px 8px ${color}`,
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className="text-white transition-colors duration-300"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
