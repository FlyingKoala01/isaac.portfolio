import React from "react";
import ProgrammingLanguagesList from "./ProgrammingLanguagesList";
import TechnologiesList from "./TechnologiesList";
import SoftwareList from "./SoftwareList";

function EngineerIntro() {
  return (
    <div className="relative w-1/2 h-full overflow-y-auto ml-5 mr-10">
      <h2 className="text-white text-xl font-bold font-montserrat">
        as an engineer
      </h2>
      <p className="text-white">
        I am currently studying for an{" "}
        <a
          className="degref"
          href="https://www.upc.edu/en/bachelors/ict-systems-engineering-manresa-epsem"
        >
          ICT Engineering degree
        </a>{" "}
        in Spain. Although I am deeply interested in the whole technology
        spectrum, I intend to pursue a career in <b>cybersecurity</b>.
      </p>
      <p className="text-white">
        Throughout the years, I have studied the following programming
        languages:
      </p>
      <ProgrammingLanguagesList />
      <p className="text-white">
        Additionally, I have been introduced to different technologies, which I
        have been implementing in my everyday work:
      </p>
      <TechnologiesList />
      <p className="text-white">
        Furthermore, throughout my University course, I have been taught
        different software to an introductory level:
      </p>
      <SoftwareList />
    </div>
  );
}

export default EngineerIntro;
