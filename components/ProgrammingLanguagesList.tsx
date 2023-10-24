import Image from "next/image";
import React from "react";

const programmingLanguages = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aarch64/aarch64-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
];

function ProgrammingLanguagesList() {
  return (
    <div className="mx-auto my-4 p-4 w-1/2 grid grid-cols-3 gap-x-1 gap-y-2 bg-[#454545] text-white rounded-2xl font-montserrat select-none text-center items-center justify-between content-center">
      {" "}
      {programmingLanguages.map((language, index) => (
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

export default ProgrammingLanguagesList;
