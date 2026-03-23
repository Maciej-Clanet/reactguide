import "./Card.css"

export default function Card({highlighted = false, children}){

    return(
        <div className={highlighted ? "card highlighted" : "card"}>
            {children}
        </div>
    )
}