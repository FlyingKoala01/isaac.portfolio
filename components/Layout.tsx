import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainScrollRef = useRef<HTMLElement | null>(null);

  return (
    <div className="flex flex-col h-full w-full bg-white">
      <Navbar scrollRef={mainScrollRef} />
      <main
        ref={mainScrollRef}
        className="relative w-screen flex items-center flex-grow flex-col h-screen overflow-y-scroll overflow-x-hidden"
      >
        <div className="w-11/12 h-full md:w-full">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
