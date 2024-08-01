// &fetching data
//&setTimeout or setInterval
// &window()
//&dom 
//geolocation
//localstorage
// canvas
//web storage

import { useEffect, useState } from "react";

// ^ syntax of useEffect

import React from 'react'
import Card from "./Card";

const UseEffect = () => {
  const [data, setData] = useState(null)
const[movies,setMovies] = useState(null)

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const fetchUser = async () => {
    const apiKey = "48b7fd8eddafbd865f8799c3047acbc2"
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      // setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser()
    // console.log("hello")
}, [])

//& if you provide an empty array [],the effect runs only once after the initial render 
//  ! if you don;t provide and empty array, the effect runs after every render

return (
  <div>
    <Card data={movies}/>
  </div>
)
}
export default UseEffect
