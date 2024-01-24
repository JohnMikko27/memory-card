import "../styles/Card.css";

const Card = ({src, handleClickCard, id}) => {
  return (
    <div className="card">
      <img src={src} alt="" onClick={handleClickCard} id={id} />
    </div>
  );
};

export default Card;