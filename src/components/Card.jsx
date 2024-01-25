import "../styles/Card.css";

const Card = ({src, handleClickCard, id, name}) => {
  return (
    <div className="card">
      <img src={src} alt="" onClick={handleClickCard} id={id} />
      <div className="name">{name.toUpperCase()}</div>
    </div>
  );
};

export default Card;