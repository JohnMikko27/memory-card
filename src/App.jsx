import { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  const [clicked, setClicked] = useState([]);

  const placeholder = [{text: "0", id: 0}, {text: "1", id: 1},
    {text: "2", id: 2}, {text: "3", id: 3}, {text: "4", id: 4},
    {text: "5", id: 5}, {text: "6", id: 6}, {text: "7", id: 7}, {text: "8", id: 8}
  ];
  
  const handleClickCard = (e) => {
    const hasClicked = clicked.find((element) => element === e.target.textContent);
    if (hasClicked) {
      console.log("clicked bfore");
      return;
    }
    console.log("not clicked ");
    setClicked([...clicked, e.target.textContent]);
  };

  return (
    <div>
      <Header/>
      <CardContainer placeholder={placeholder} handleClickCard={handleClickCard}/>
    </div>
  );
}

export default App;
