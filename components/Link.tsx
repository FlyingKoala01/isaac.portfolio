import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";

interface PropTypes {
  to: string;
  children: React.ReactNode;
  selected: boolean;
}

const CustomLink: React.FC<PropTypes> = ({ to, children, selected }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selected);
  }, []);
  return (
    <li
      className={`relative text-xs px-4 py-2 ${
        isHovered || isSelected ? "font-bold" : "font-light"
      } text-black`}
    >
      <NextLink href={to} passHref>
        <span
          className="block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHovered ? [0, -10, 10, 0] : 0 }}
            transition={{
              duration: 1.0,
              times: isHovered ? [0, 0.4, 0.45, 1] : [0, 1],
            }}
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? [1, 1, 0, 0, 1] : 1 }}
              transition={{
                duration: 1.0,
                times: isHovered ? [0, 0.2, 0.44, 0.6, 1] : [0, 1],
              }}
            >
              {children}
              <motion.span
                className="w-0 h-0.5 bg-black transition-all duration-300 ease-in-out"
                whileHover={{ width: "100%" }}
              ></motion.span>
            </motion.div>
          </motion.div>
        </span>
      </NextLink>
    </li>
  );
};

export default CustomLink;
