import React from "react";
import World from "./World";

function AboutIntro() {
  return (
    <div className="flex flex-row justify-between relative w-[90%] h-full mx-auto m-4">
      <div className="flex flex-col justify-center items-center w-1/2 p-2">
        <p className="text-white mb-4">
          Raised in a <b>bilingual</b> family, spending most of my childhood
          travelling in between countries, before the age of 20 I had lived in
          Italy, Spain, Russia and Mexico. As a result, I've learnt to speak{" "}
          <b>4</b> languages at a <b>proficient</b> level (English, Italian,
          Spanish and Catalan).
        </p>
        <p className="text-white mb-4">
          Nevertheless, my expatriate <b>experience</b> taught me more than just
          languages. I sincerely believe it has taught me the ability to{" "}
          <b>adapt</b> to change and to work in any given workspace and culture.
        </p>
        <p className="text-white mb-4">
          I'm a focused and independent individual, interested in partaking in
          stimulating projects for the greater good.
        </p>
      </div>
      <div className="w-1/3 mr-20">
        <World />
      </div>
    </div>
  );
}

export default AboutIntro;
