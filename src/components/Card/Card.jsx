import "./Card.css";
import Chip from "../Chip/Chip";

export default function Card({
  title,
  tags = [],
  highlighted = false,
  children,
  row = false
}) {

  let classText= "card ";
  classText += highlighted ? "highlighted " : "";
  classText += row ? "row " : "";

  return (
    <div className={classText}>
      {title ? <h2>{title}</h2> : null}
      {tags.length > 0 ? (
        <div className="card-tags">
          Uses:
          {tags.map((tag) => (
            <Chip key={tag} text={tag} />
          ))}
        </div>
      ) : null}
      {children}
    </div>
  );
}
