import React from "react";
import CustomLink from "./Link";
import Image from "next/image";
import { useRouter } from "next/router";

interface NavbarProps {
  scrollRef: any;
}

const Navbar: React.FC<NavbarProps> = ({ scrollRef }) => {
  const router = useRouter();

  return (
    <nav className="fixed w-full h-16 z-50  opacity-80 backdrop-blur-md">
      <div className="w-full h-full flex items-start relative">
        <div
          id="navbar-left"
          className=" w-2/3 h-full flex flex-col m-0 p-0 items-end relative "
        >
          <div className="flex w-full flex-row m-0 p-0 h-full bg-[#f6f6f6]">
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
          <div className="absolute -right-[4px] bottom-0 w-[101%] h-2/3 rounded-tr-[2.1rem] bg-[#1a1a1a] z-20 m-0 p-0"></div>{" "}
        </div>
        <div
          id="navbar-right"
          className="w-1/3 h-full relative m-0 p-0 rounded-bl-[1.8rem] bg-[#f6f6f6]"
        >
          <ul className="font-medium flex flex-row mx-10 justify-between items-center h-full">
            <CustomLink to="/" selected={router.pathname === "/"}>
              HOME
            </CustomLink>
            <CustomLink to="/about" selected={router.pathname === "/about"}>
              ABOUT
            </CustomLink>
            <CustomLink
              to="/services"
              selected={router.pathname === "/services"}
            >
              SERVICES
            </CustomLink>
            <CustomLink to="/contact" selected={router.pathname === "/contact"}>
              CONTACT
            </CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
