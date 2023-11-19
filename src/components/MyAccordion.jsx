import React, { useState } from "react";
import "./MyAccordion.css";

const MyAccordion = ({ id, question, answer }) => {
  const [flag, setFlag] = useState(false);
  return (
    <div className="accordion-item">
      <div className="quesiton-answer">
        <div className="question-and-btn">
          <h3 className="accordion-question">{question}</h3>
          <button className="accordion-button" onClick={() => setFlag(!flag)}>
            {flag === true ? "➖" : "➕"}
          </button>
        </div>

        {flag && <p className="accordion-answer"> {answer} </p>}
      </div>
    </div>
  );
};

export default MyAccordion;
