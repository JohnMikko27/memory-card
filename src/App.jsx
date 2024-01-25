import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [clicked, setClicked] = useState([]);
  const [images, setImages] = useState([]);
  const [score, setScore] = useState({current: 0, best: 0});

  useEffect(() => {
    const nums = getRandomNumbers();
    const fetchData = async() => {
      for (let i = 0; i < 12; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nums[i]}`);
        const data = await response.json();
        if (!ignore) {
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
      if (score.current > score.best) setScore({best: score.current, current: 0});
      else setScore({...score, current: 0});
      setClicked([]);
      return;
    }
    setClicked([...clicked, e.target.id]);
    setScore({...score, current: score.current + 1});
  };

  return (
    <div className="app">
      <Header current={score.current} best={score.best}/>
      {images && <CardContainer handleClickCard={handleClickCard} images={images}/>}
      <Footer/>
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

const getRandomNumbers = () => {
  const numbers = [];
  while (numbers.length !== 12) {
    const randomNum = Math.floor(Math.random() * 400 + 1);
    if (randomNum in numbers) continue;
    numbers.push(randomNum);
  }
  return numbers;
};

export default App;
