import React from "react";
import ProgrammingLanguagesList from "./ProgrammingLanguagesList";
import TechnologiesList from "./TechnologiesList";
import SoftwareList from "./SoftwareList";
import dynamic from "next/dynamic";

const Computer = dynamic(() => import("./RetroComputer"), { ssr: false });

function EngineerIntro() {
  return (
    <div className="flex flex-row relative w-full h-full m-10">
      <div className="w-1/2 h-52 my-auto">
        {" "}
        <Computer />
      </div>
      <div className="w-2/5 m-5">
        <h2 className="text-white text-xl font-bold m-4">as an engineer</h2>
        <p className="text-white m-4">
          I am currently studying for an{" "}
          <a
            className="degree"
            href="https://www.upc.edu/en/bachelors/ict-systems-engineering-manresa-epsem"
          >
            ICT Engineering degree
          </a>{" "}
          in Spain. Although I am deeply interested in the whole technology
          spectrum, I intend to pursue a career in <b>cybersecurity</b>.
        </p>
        <p className="text-white m-4">
          Throughout the years, I have studied the following programming
          languages:
        </p>
      </div>
    </div>
  );
}

export default EngineerIntro;
