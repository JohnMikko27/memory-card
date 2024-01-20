import Card from "./Card";
import "../styles/CardContainer.css";

const CardContainer = ({placeholder, handleClickCard}) => {
  
  return (
    <div className="cardContainer">
      <Card text={placeholder[0].text} handleClickCard={handleClickCard}/>
      <Card text={placeholder[1].text} handleClickCard={handleClickCard}/>
      <Card text={placeholder[2].text} handleClickCard={handleClickCard}/>
      <Card text={placeholder[3].text} handleClickCard={handleClickCard}/>
      <Card text={placeholder[4].text} handleClickCard={handleClickCard}/>
      <Card text={placeholder[5].text} handleClickCard={handleClickCard}/>
      <Card text={placeholder[6].text} handleClickCard={handleClickCard}/>
      <Card text={placeholder[7].text} handleClickCard={handleClickCard}/>
      <Card text={placeholder[8].text} handleClickCard={handleClickCard}/>
    </div>
  );
};

export default CardContainer;