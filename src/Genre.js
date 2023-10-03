import React,{useState,useEffect} from 'react'
import { Chip } from '@mui/material'
import axios from "axios";
const Genre = ({genres , setGenres,selectedGenre,setSelectedGenre}) => {
  const fetchGenres = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=fb2c08cd421b80fee7d8fecb926e7720&with_origin_country=IN&language=en-US`);
    setGenres(data?.genres)
    
  };
  useEffect(()=>{
    fetchGenres();

  },[])

  const HandleAddGenre = genre => {
    setSelectedGenre([...selectedGenre,genre]);
    setGenres(genres?.filter(g => g?.id !== genre?.id))
  }

  const HandleRemoveGenre = genre => {
    setSelectedGenre(
      selectedGenre?.filter(selected => selected?.id !== genre?.id)
    );
    setGenres([...genres,genre]);
  };



  return (
    <div style={{ padding: "10px 0" }}>
      {selectedGenre?.map(genre=>(
        <Chip onDelete={()=>HandleRemoveGenre(genre)} 
        style={{color:"white", backgroundColor:"gray" , fontSize:"1.5em" , margin:"3px"}} 
        clickable 
        label={genre?.name} />
      ))}
        {genres?.map(genre =>(
          <Chip onClick={()=> HandleAddGenre(genre)} clickable style={{fontSize:"1.5em" , margin:"3px"}} label={genre?.name} color= "secondary"/>
        ))}
    </div>
  )
}

export default Genre