import "./Tabs.css"
import { useState } from "react"
import Card from "../Card/Card.jsx";
// each tab should have a label and content
export default function Tabs({ tabList = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);

    console.log(tabList)
    return (
        <Card>
            <div className="tab-labels">
                {tabList.map((tab, index) => {
                    return <>
                        <TabLabel
                            text={tab.label}
                            active={index == activeIndex}
                            activate={() => setActiveIndex(index)}
                        />
                        {
                            index < tabList.length - 1 ? <div className="vertical-divider" /> : null
                        }
                    </>
                })}
            </div>
            <div className="tab-content">
                {tabList[activeIndex].content}
            </div>
        </Card>
    )

}

function TabLabel({ text, active, activate }) {

    return (
        <div
            onClick={activate}
            className={active ? "tab-label active" : "tab-label"}>
            {text}
        </div>
    )
}