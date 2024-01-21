import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import fetchData from "./fetchData";
import { exampleImages } from "./fetchData";

function App() {
  const [clicked, setClicked] = useState([]);
  const [images, setImages] = useState(exampleImages);
  const [score, setScore] = useState({current: 0, best: 0});
  // i think i have to intialize images with images already so that it doesnt break

  const placeholder = [{text: "0", id: 0}, {text: "1", id: 1},
    {text: "2", id: 2}, {text: "3", id: 3}, {text: "4", id: 4},
    {text: "5", id: 5}, {text: "6", id: 6}, {text: "7", id: 7}, {text: "8", id: 8}
  ];

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
