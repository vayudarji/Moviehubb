import React,{useReducer, useState} from 'react'
import { GenMovie } from "./GenMovie";
import Movie from "./Movie";
import Search from "./Search";
import Test from "./Test";
import Header from "./header";




const Home = () => {
 
  return (
    <>
      <div className="container">
        
        <Header />
        <Search />
        <GenMovie />
        <Movie />
        
        
      </div>
    </>
  );
};

export default Home;
