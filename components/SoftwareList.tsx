import React from "react";

const software = ["NI Multisim", "Intel Quartus (ModelSim)", "Others"];

function SoftwareList() {
  return (
    <ul>
      {software.map((item, index) => (
        <li key={index} className="textAboutMe">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default SoftwareList;
