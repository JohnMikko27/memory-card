import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import fetchData from "./fetchData";
import { exampleImages } from "./fetchData";

function App() {
  const [clicked, setClicked] = useState([]);
  const [images, setImages] = useState([]);
  const [score, setScore] = useState({current: 0, best: 0});
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      for (let i = 0; i < 4; i++) {
        const randomNum = Math.floor(Math.random() * 400 + 1);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
        const data = await response.json();
        if (!ignore) {
          // dataArray.push(data);
          setImages((images) => ([...images, data]));
        }
      }
    };
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

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
      {console.log("length: " + photos.length)}
      <Header current={score.current} best={score.best}/>
      {images && <CardContainer handleClickCard={handleClickCard} images={images}/>}
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
