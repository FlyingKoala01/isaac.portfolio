import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomLink from "./Link";

interface NavbarProps {
  scrollRef: any;
}

const Navbar: React.FC<NavbarProps> = ({ scrollRef }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && scrollRef.current.scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    scrollRef.current?.addEventListener("scroll", handleScroll);

    // Cleanup listener when the component unmounts
    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  const logoVariants = {
    large: { height: "5rem" },
    small: { height: "4rem" },
  };

  const navVariants = {
    transparent: { backgroundColor: "rgba(0, 0, 0, 0)" },
    semiTransparent: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
  };

  return (
    <motion.nav
      initial="transparent"
      animate={scrolled ? "semiTransparent" : "transparent"}
      variants={navVariants}
      transition={{ duration: 0.3 }}
      className={`fixed w-full hidden md:block z-50 border-gray-200 bg-black ${
        scrolled ? "bg-opacity-60 backdrop-blur-md" : "bg-opacity-0"
      }`}
    >
      <div className="w-full flex flex-wrap items-center justify-between p-4 bg-black">
        <div className="hidden w-full mx-auto md:block md:w-auto">
          <ul className="font-medium flex flex-col justify-left p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
