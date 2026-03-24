import "./Tabs.css"
import { useState } from "react"
import Card from "../Card/Card.jsx";
import { Children } from "react";
// each tab should have a label and content
export default function Tabs({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = Children.toArray(children);

    return (
        <Card>
            <div className="tab-labels">
                {tabs.map((child, index) => (
                     <>
                        <div
                            key={index}
                            className={index === activeIndex ? "tab-label active" : "tab-label"}
                            onClick={() => setActiveIndex(index)}
                        >
                            {child.props.label}
                        </div>
                        {
                            index < tabs.length - 1 ? <div className="vertical-divider" /> : null
                        }
                    </>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeIndex]}
            </div>
        </Card>
    )
}

export function Tab({label, children}){
    return(
        <div className="tab" label={label}>
            {children}
        </div>
    )
}