import React, { useEffect, useState } from 'react';
import axios from "../utils/axios";
import requests from '../utils/requests';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./banner.css"

function Banner() {
  const [Movies, SetMovies] = useState([]);

  useEffect(() => {
    // const shouldFetch = false;
    // if (!shouldFetch) return;
    (async () => {
      try {
        const Mainresult = await axios.get(requests.fetchNetflixOriginals);
        console.log(Mainresult)
        const autonumber = Mainresult.data.results.length;
       const generate = Math.floor(Math.random() * autonumber)
       SetMovies(Mainresult.data.results[generate]);
       
      } catch (error) {
        // console.log(error);
      }
    })();
  }, []); 
console.log(Movies)
  let maxValue = 160

  function truncate(str, maxValue){
    if (!str) return "";
    if(str.length > maxValue){
      return str.slice(0, maxValue - 3) + "..."
    }else{
      return str;
    }
  }

  return (
    <div>
      <div
      className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${Movies?.backdrop_path})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        >
      </div>
        <div className="container_name">
        <h1 className="title">{Movies?.title || Movies?.name || Movies?.original_name}</h1>
       
        <section className="button">
        <button className = "left-button"> <PlayArrowIcon/>&nbsp;Play</button>
        <button className = "right-button">&nbsp;More Info</button>
        </section>
        <h2 className="description">{truncate(Movies?.overview, maxValue)}</h2>
       
        </div>
    </div>
  );
}
 
export default Banner;
