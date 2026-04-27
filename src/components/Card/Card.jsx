import "./Card.css"
import Chip from "../Chip/Chip";

export default function Card({ highlighted = false, isRow = false, tags = [], children }) {

    let classText = "card"
    if (highlighted) classText += " highlighted";
    if (isRow) classText += " row";

    
    let tagsComponents = tags.map(text => {
        return <Chip text={text}/>
    })

    return (
        <div className={classText}>
            {
                tagsComponents.length > 0
                ? <div className="tags-row">
                    Uses: {tagsComponents}
                </div>
                : null
            }
            {children}
        </div>
    )
}