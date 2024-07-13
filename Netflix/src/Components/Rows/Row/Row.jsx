import React, { useEffect, useState, useRef } from 'react'
import axios from "../../utils/axios"
import "./row.css"
import MovieTrailer from "movie-trailer"
import YouTube from "react-youtube"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Row({title, fetch, BigCheck}) {
 const [MovieList, SetMovieList] = useState([])

 const [trailer, SetTrailer] = useState()


 const baseUrl = ("https://image.tmdb.org/t/p/original")
 useEffect(() => {
  (async () => {
    try {
      const finalResult = await axios.get(fetch)
      console.log(finalResult)
      const choosenResult = finalResult.data.results
      SetMovieList(choosenResult)
    } catch (error){

    }
  })();
 }, [fetch])
 console.log(MovieList)


 const handleClick = (movie) => {
  if (trailer){
    SetTrailer("")
  }else{
    MovieTrailer(movie?.title)
      .then((url) => {
        console.log(url)
       const pickedUrl = new URLSearchParams(new URL(url).search)
        console.log(pickedUrl)
        console.log(pickedUrl.get("v"))
        SetTrailer(pickedUrl.get("v"))
      })
  }
 }


  const custom = {
    height: "390",
    width: "100%",
    playerVars:{
      autoplay: 1,
    },
  }
  const [isScrolled, setIsScrolled] = useState(false);
const scrollRef = useRef(null)

const scrollLeft = () => {
  scrollRef.current.scrollLeft -= 700;
  setIsScrolled(scrollRef.current.scrollLeft > 0);
}

const scrollRight = () => {
  scrollRef.current.scrollLeft += 700;
  setIsScrolled(true);
}

// const scrollLeft = () =>{
//   scrollRef.current.scrollLeft -= 700
// }

// const scrollRight = () =>{
//   scrollRef.current.scrollLeft += 700
// }

  return (
    
    <div>
       <div className="rowContainer">
      <div className='RowTitle'>
      <h1>
        {title}
      </h1>
      </div>
      {isScrolled && (
      <div className='mainLeftArrow'>
      <a className='LeftArrow' onClick={scrollLeft}>
        <ArrowBackIosIcon className='Left-Arrow' /></a>
      </div>
      )}

      <div className = "MainImageContainer" ref={scrollRef}>

        {MovieList.map((movie, index) => (
          <>
          <img onClick={() => handleClick(movie)} key ={index} src={`${baseUrl}${BigCheck ? movie.poster_path : movie.backdrop_path }`} alt={BigCheck ? movie.original_title : movie.title} className={`AllPictures rowMovies ${BigCheck ? "bigHeight" : "smallHeight"}`}  />
      
          </>
        ))}  
      </div> 
      <div className='mainRightArrow'>
        <a className='RightArrow' onClick={scrollRight}> <ArrowForwardIosIcon className='Right-Arrow'/></a>
      </div> 
 
      <div style={{padding: "40px"}}>
        {trailer && <YouTube videoId={trailer} opts={custom}/>}
      </div>
      </div>
    </div>
  )
}

export default Row













