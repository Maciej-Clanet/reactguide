import "./Accordion.css"
import { useState } from "react"
import Chevron from "../../assets/icons/ChevronUp.svg"

export default function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(true);
    function toggleOpen() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="accordion-row" onClick={toggleOpen}>
                <div className="line short" />
                <p>{title}</p>
                <div className="line" />
                <img className={!isOpen ? "closed" : ""} src={Chevron} />
                <div className="line short" />
            </div>
            {isOpen ? children : null}
        </>

    )
}