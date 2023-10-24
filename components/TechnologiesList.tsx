import Image from "next/image";
import React from "react";

const technologies = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
];

function TechnologiesList() {
  return (
    <div className="mx-auto my-4 p-4 w-1/2 grid grid-cols-3 gap-x-1 gap-y-2 bg-[#454545] text-white rounded-2xl font-montserrat select-none text-center items-center justify-between content-center">
      {" "}
      {technologies.map((language, index) => (
        <div
          key={index}
          className="one h-14 w-14 bg-[#d1d1d1] rounded-xl p-1 flex mx-auto items-center justify-center"
        >
          {" "}
          <Image src={language} alt="logo" width={200} height={200} />
        </div>
      ))}
    </div>
  );
}

export default TechnologiesList;
