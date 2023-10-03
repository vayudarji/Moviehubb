import React,{useEffect, useReducer, useState} from 'react'
import { NavLink } from "react-router-dom";
import Genre from './Genre'
import axios from 'axios';
import genresIDs from './genresIDs';

export const GenMovie = () => {
    const [genres , setGenres]=useState([]) 
    const[popularMovies , setPopularmovies] = useState([]);
    const [selectedGenre , setSelectedGenre]=useState([]) 

    const genreIds = (genresIDs(selectedGenre))

    const fetchMovie = async () => {
       const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fb2c08cd421b80fee7d8fecb926e7720&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=${genreIds}`);
       setPopularmovies(data?.results)
    }

    useEffect(()=>{
         fetchMovie();
    },[selectedGenre])
    return (
      <>
        {/* if movie is present then only show data else remain as it is  */}
        <section className="movie-page">
        <Genre genres={genres}  setGenres={setGenres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
          <div className="grid grid-4-col">
            {popularMovies
              ? popularMovies.map((movie) => {
                const { original_title } = movie;
                const movieName = original_title.substring(0, 15);
                  
                  return (
                    <NavLink to={`movie/${movie.id}`} >
                      <div className="card">
                        <div className="card-info flow">
                          <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                          </h2>
                          <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt="error" />
                        </div>
                      </div>
                    </NavLink>
                  );
                })
              : ""}
          </div>
        </section>
      </>
    );
}
