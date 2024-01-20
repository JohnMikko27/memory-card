import "../styles/Card.css";

const Card = ({src, handleClickCard, id}) => {
  return (
    <div>
      <img src={src} alt="" onClick={handleClickCard} id={id} className="card"/>
    </div>
    
  );
};

export default Card;