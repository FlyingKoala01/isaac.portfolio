import React from "react";
import NextLink from "next/link";

interface PropTypes {
  to: string; // Change the prop name to 'to'
  children: React.ReactNode;
}

const CustomLink: React.FC<PropTypes> = ({ to, children }) => {
  return (
    <li className="relative px-4 py-2 font-light text-white hover:text-acquamarine">
      <NextLink href={to}>
        {children}
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover-bg-aquamarine group-hover-w-full transition-all duration-300"></span>
      </NextLink>
    </li>
  );
};

export default CustomLink;
