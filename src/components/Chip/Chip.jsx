import "./Chip.css";

export default function Chip({ text, highlight = false, icon }) {
  return (
    <div className={highlight ? "chip highlight" : "chip"}>
      <div>{text}</div>
      {icon ? <img src={icon} alt="chip icon" /> : null}
    </div>
  );
}
