import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios'
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

function Row({title,fetchUrl,isLargeRow = false}) {

     const [movies,setMovies] = useState([])
     const base_url = "https://image.tmdb.org/t/p/original/"
     const [trailerUrl, setTrailerUrl] = useState("");
     useEffect(() => {
        // if [], run once when the row loads, and don't run it again
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
          return request;
        }
        fetchData();
      }, [fetchUrl]);

     const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
    
      const handleClick = (movie) => {
        
          movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        
      };
    

  return (
    <div className='row'>
        <h2>{title}</h2>
<div className="row__posters">
        {movies.map(movie => (
            <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.name} key={movie.id} onClick={() => handleClick(movie)}/>
        ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>  
  )
}

export default Row