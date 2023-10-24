import { useEffect } from "react";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import Layout from "../../components/Layout";
import AboutIntro from "../../components/AboutIntro";
import AboutEngineer from "../../components/EngineerIntro";

function About() {
  const isMobile = useIsMobile();

  return (
    <Layout>
      <div id="aboutDiv" className="flex flex-col bg-[#1A1A1A] w-full h-full">
        <div className="flex mt-20 ml-10 relative w-full h-1/6">
          <h1 className="text-white text-3xl font-bold my-auto">
            {" "}
            What should you know about me?
          </h1>
        </div>
        <div className="relative w-full h-4/6 flex flex-row">
          <AboutIntro />
          <AboutEngineer />
        </div>
      </div>
    </Layout>
  );
}

export default About;
