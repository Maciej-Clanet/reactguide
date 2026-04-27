import "./Card.css"

export default function Card({ highlighted = false, isRow = false, children }) {

    let classText = "card"
    if (highlighted) classText += " highlighted";
    if (isRow) classText += " row";

    return (
        <div className={classText}>
            {children}
        </div>
    )
}