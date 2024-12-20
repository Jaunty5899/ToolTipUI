import "./ListItem.css";

export default function ListItem({ name, tip }) {
  return (
    <li>
      <span className="toolTip">{tip}</span>
      {name}
    </li>
  );
}
