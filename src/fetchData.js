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

export default fetchData;