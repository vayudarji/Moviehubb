import React from "react";

const Testt = () => {
  return (
    <>
      <div>Test</div>
      <p>this is my api key {process.env.REACT_APP_SECRET_KEY} </p>

      {/* <p>useEffect(()=>{
         fetch("https://api.themoviedb.org/3/discover/movie?api_key=fb2c08cd421b80fee7d8fecb926e7720&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true")
         .then(res => res.json())
         .then(data => console.log(data.results))
    })</p> */}



      <div>https://api.themoviedb.org/3/discover/movie?api_key=fb2c08cd421b80fee7d8fecb926e7720&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=28</div>
    </>
  );
};

export default Testt;
