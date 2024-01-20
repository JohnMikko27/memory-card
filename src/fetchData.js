const fetchData = async() => {
  const images = [];
  for (let i = 0; i < 4; i++) {
    const randomNum = Math.floor(Math.random() * 800 + 1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
    const data = await response.json();
    images.push(data);
  }
  return images;
};

const exampleImages = [
  {url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", id: 0}, 
  {url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", id: 1}, 
  {url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", id: 2}, 
  {url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", id: 3}

];

export default fetchData;
export { exampleImages };