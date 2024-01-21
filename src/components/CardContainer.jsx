import Card from "./Card";
import "../styles/CardContainer.css";

const CardContainer = ({handleClickCard, images}) => {
  
  return (
    <div className="cardContainer">
      {
        images.map((image) => <Card src={image.url} key={image.id} 
          id={image.id} handleClickCard={handleClickCard}/>)
      }
    </div>
  );
};


export default CardContainer;