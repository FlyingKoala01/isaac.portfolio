import React from "react";
import CustomLink from "./Link";
import Image from "next/image";

interface NavbarProps {
  scrollRef: any;
}

const Navbar: React.FC<NavbarProps> = ({ scrollRef }) => {
  return (
    <nav
      className={`fixed w-full h-12 z-50 border-gray-200 opacity-80 backdrop-blur-md`}
    >
      <div className="w-full h-full flex items-center p-4 bg-[#f6f6f6]">
        {" "}
        {/* Added items-center for vertical alignment */}
        <div className="w-1/2 flex space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/github.svg"
              alt="Github"
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className="w-1/2">
          <ul className="font-medium flex flex-row justify-end border border-gray-100 rounded-lg">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
