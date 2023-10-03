import React,{useState} from 'react'
import { GenMovie } from "./GenMovie";
import Genre from "./Genre";
import Movie from "./Movie";
import Search from "./Search";
import Test from "./Test";
import Header from "./header";


const Home = () => {
  const [genres , setGenres]=useState([]) 
  const [selectedGenre , setSelectedGenre]=useState([]) 
  console.log(selectedGenre)

  return (
    <>
      <div className="container">
        <Header />
        <Genre genres={genres}  setGenres={setGenres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
        <Search />
        <Movie />
        <GenMovie />
        
        
      </div>
    </>
  );
};

export default Home;
