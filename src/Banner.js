import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './axios'
import requests from './Requests'

function Banner() {

    const [movie,setMovie] = useState([])
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results [
                     Math.floor(Math.random()* request.data.results.length - 1)
                ]
            )
        }
        console.log(movie);
        fetchData()
    },[])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n) + '...' : string
    }


    return (
        <header className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
               
            }}
        >
            <div className="banner_contents">
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h2 className="banner_description">

                    {truncate(movie?.overview,180)}

                </h2>
            </div>
            <div className="banner-fadeBottom" />
        </header>
    )
}

export default Banner