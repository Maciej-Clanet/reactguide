import Card from "../Card/Card";
import "./CollapsibleExample.css"
import { useState } from "react"
export default function CollapsibleExample({number, children}){

    const [isOpen, setIsOpen] = useState(true);
    function reOpen(){
        if(isOpen){
            return;
        }
        setIsOpen(true)
    }

    return(
        <div className="collapsible-example" onClick={reOpen}>
            <button className="example-nr" onClick={() => setIsOpen(!isOpen)}>{number}</button>
            {isOpen ? children : null}
        </div>
    )
}