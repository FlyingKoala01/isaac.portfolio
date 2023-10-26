import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import World from "./World";

function AboutIntro() {
  return (
    <div className="flex flex-row relative w-full h-full ml-10 m-5">
      <div className="w-1/2">
        <h2 className="text-white text-xl font-bold m-4">as a person</h2>
        <p className="text-white m-4">
          Raised in a <b>bilingual</b> family, spending most of my childhood
          travelling in between countries, before the age of 20 I had lived in
          Italy, Spain, Russia and Mexico. As a result, I've learnt to speak{" "}
          <b>4</b> languages at a <b>proficient</b> level (English, Italian,
          Spanish and Catalan).
        </p>
        <p className="text-white m-4">
          {" "}
          Nevertheless, my expatriate <b>experience</b> taught me more than just
          languages. I sincerely believe it has taught me the ability to{" "}
          <b>adapt</b> to change and to work in any given workspace and culture.
        </p>
        <p className="text-white m-4">
          I'm a focused and ind ependent individual, interested in partaking in
          stimulating projects for the greater good.{" "}
        </p>
      </div>
      <div className="w-1/3 mx-auto">
        <World />
      </div>
    </div>
  );
}

export default AboutIntro;
