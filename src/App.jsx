import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import fetchData from "./fetchData";
import { exampleImages } from "./fetchData";

function App() {
  const [clicked, setClicked] = useState([]);
  const [images, setImages] = useState(exampleImages);
  const [score, setScore] = useState({current: 0, best: 0});

  const handleClickCard = (e) => {
    console.log(e.target.id);
    shuffleArray(images);
    setImages([...images]);
    const hasClicked = clicked.find((element) => element === e.target.id);
    if (hasClicked) {
      console.log("clicked bfore");
      if (score.current > score.best) setScore({best: score.current, current: 0});
      else setScore({...score, current: 0});
      setClicked([]);
      return;
    }
    console.log("not clicked");
    setClicked([...clicked, e.target.id]);
    setScore({...score, current: score.current + 1});
  };

  return (
    <div>
      <Header current={score.current} best={score.best}/>
      <CardContainer handleClickCard={handleClickCard} images={images}/>
    </div>
  );
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export default App;
