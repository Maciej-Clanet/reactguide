import "./AccordionLined.css";
import { useState } from "react";
import ChevronUp from "../../assets/icons/ChevronUp.svg";

export default function AccordionLined({ label, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion-lined">
      <div className="accordion-top" onClick={() => setIsOpen(!isOpen)}>
        <div className="line short" />
        {label}
        <div className="line" />
        <img
          className={!isOpen ? "closed" : ""}
          src={ChevronUp}
          alt="Chevron Icon"
        />
        <div className="line short" />
      </div>
      {isOpen ? <div className="accordion-content">{children}</div> : null}
    </div>
  );
}
