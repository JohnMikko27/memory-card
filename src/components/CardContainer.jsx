import Card from "./Card";
import "../styles/CardContainer.css";

const CardContainer = ({handleClickCard, images}) => {
  const getRandomNumbers = () => {
    const numbers = [];
    while (numbers.length !== 4) {
      const randomNum = Math.floor(Math.random() * 9);
      if (numbers.find((num) => num === randomNum) !== undefined) continue;
      numbers.push(randomNum);
    }
    return numbers;
  };
  const randomNums = getRandomNumbers();
  shuffleArray(images);
  return (
    <div className="cardContainer">
      {/* <Card handleClickCard={handleClickCard} src={images[0].url}/> 
      <Card handleClickCard={handleClickCard} src={images[1].url}/>
      <Card handleClickCard={handleClickCard} src={images[2].url}/>
      <Card handleClickCard={handleClickCard} src={images[3].url}/> */}
      {
        images.map((image) => <Card src={image.url} key={image.id} 
          id={image.id} handleClickCard={handleClickCard}/>)
      }
    </div>
  );
};

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export default CardContainer;