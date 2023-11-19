import React, { useState } from "react";
import { accordionData } from "./api";
import MyAccordion from "./MyAccordion";
import "./Accordion.css"; // Import the CSS file

const Accordion = () => {
  const [data, setData] = useState(accordionData);

  return (
    <>
      <div className="container">
        <div className="accordion-container">
          <h1 className="title">React JS Interview Questions.</h1>
          {data.map((currItem) => {
            return <MyAccordion key={currItem.id} {...currItem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
