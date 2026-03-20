import "./Card.css";
import Chip from "../Chip/Chip";

export default function Card({
  title,
  tags = [],
  highlighted = false,
  children,
}) {
  return (
    <div className={highlighted ? "card highlighted" : "card"}>
      {title ? <h2>{title}</h2> : null}
      {tags ? (
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
