import "../styles/Card.css";

const Card = ({text, handleClickCard}) => {
  return (
    <div className="card" onClick={handleClickCard}>{text}</div>
  );
};

export default Card;