import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {jsonLocalStorage} from "./util";
import Title from "./components/Title";
import Form from "./components/From";
import MainCard from "./components/MainCard";
import Favorites from "./components/Favorites";

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
}

function App() {

  const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";

  const [counter, setCounter] = useState(()=>(jsonLocalStorage.getItem("counter")));
  const [mainCat, setMainCat] = useState(CAT1);
  const [favorites, setFavorites] = useState( jsonLocalStorage.getItem("favorites") || [] );

  const alreadyFavorite = favorites.includes(mainCat);

  const setInitialCat = async () => {
    const newCat = await fetchCat("First cat");
    setMainCat(newCat);
  }

  useEffect(()=>{
    setInitialCat()
  },[]);

  const updateMainCat = async (value) => {
    const newCat = await fetchCat(value);
    setMainCat(newCat)
    setCounter((prev)=> (prev+1));
  }

  const handleHeartClick = () => {
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }

  const countTitle = counter === null ? "" : counter + "번째 ";

  return (
    <div className="App">
      <Title>{countTitle}</Title>
      <Form onUpdateMainCat={updateMainCat}></Form>
      <MainCard img={mainCat} onHeartClick={handleHeartClick}  alreadyFavorite={alreadyFavorite}></MainCard>
      <Favorites list={favorites} />
    </div>
  );
}

export default App;
