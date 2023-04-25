import Card from "./card/Card";
import data from "./data";
import "./cards.css";

export default function Cards() {
  const cards = data.map((item, index) => {
    return <Card key={index} {...item} />;
  });
  return (
    <>
      <div className="cards">{cards}</div>
    </>
  );
}
