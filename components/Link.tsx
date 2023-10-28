import React from "react";
import NextLink from "next/link";

interface PropTypes {
  to: string; // Change the prop name to 'to'
  children: React.ReactNode;
}

const CustomLink: React.FC<PropTypes> = ({ to, children }) => {
  return (
    <li className="relative px-4 py-2 font-light text-black hover:text-acquamarine">
      <NextLink href={to}>
        {children}
        <span className="ml-2">{">"}</span>{" "}
        {/* Added this span for the > symbol */}
        <span className="w-0 h-0.5 bg-black group-hover-bg-aquamarine group-hover-w-full"></span>
      </NextLink>
    </li>
  );
};

export default CustomLink;
