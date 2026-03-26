import "./Chip.css";

export default function Chip({text, isHighlighted, icon}){

    return(
        <div className={isHighlighted ? "chip highlighted" : "chip"}>
            <p>{text}</p>
            {icon ? <img width={20} src={icon}/> : null}
        </div>
    )
}