import Card from "./Card";
import "../styles/CardContainer.css";

const CardContainer = ({handleClickCard, images}) => {
  
  return (
    <div className="cardContainer">
      {
        images.map((image) => <Card src={image.sprites.front_default} key={image.id} 
          id={image.id} handleClickCard={handleClickCard} name={image.name}/>)
      }
    </div>
  );
};


export default CardContainer;