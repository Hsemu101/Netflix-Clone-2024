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

const scrollRef = useRef(null)


const scrollLeft = () =>{
  scrollRef.current.scrollLeft -= 700
}

const scrollRight = () =>{
  scrollRef.current.scrollLeft += 700
}

  return (
    
    <div>
       <div className="rowContainer">
      <div className='RowTitle'>
      <h1>
        {title}
      </h1>
      </div>
    
      <div className='mainLeftArrow'>
      <a className='LeftArrow' onClick={scrollLeft}>
        <ArrowBackIosIcon /></a>
      </div>


      <div className = "MainImageContainer" ref={scrollRef}>

        {MovieList.map((movie, index) => (
          <>
          <img onClick={() => handleClick(movie)} key ={index} src={`${baseUrl}${BigCheck ? movie.poster_path : movie.backdrop_path }`} alt={BigCheck ? movie.original_title : movie.title} className={`AllPictures rowMovies ${BigCheck ? "bigHeight" : "smallHeight"}`}  />
      
          </>
        ))}  
      </div> 
      <div className='mainRightArrow'>
        <a className='RightArrow' onClick={scrollRight}> <ArrowForwardIosIcon/></a>
      </div> 
 
      <div style={{padding: "40px"}}>
        {trailer && <YouTube videoId={trailer} opts={custom}/>}
      </div>
      </div>
    </div>
  )
}

export default Row







// import React, { useEffect, useState, useRef } from 'react';
// import axios from "../../utils/axios";
// import "./row.css";
// import MovieTrailer from "movie-trailer";
// import YouTube from "react-youtube";

// function Row({ title, fetch, BigCheck }) {
//   const [MovieList, SetMovieList] = useState([]);
//   const [trailer, SetTrailer] = useState();
//   const containerRef = useRef(null); // Create a ref for the container

//   const baseUrl = ("https://image.tmdb.org/t/p/original");
//   useEffect(() => {
//     (async () => {
//       try {
//         const finalResult = await axios.get(fetch);
//         console.log(finalResult);
//         const choosenResult = finalResult.data.results;
//         SetMovieList(choosenResult);
//       } catch (error) {
//         console.error(error);
//       }
//     })();
//   }, [fetch]);

//   console.log(MovieList);

//   const handleClick = (movie) => {
//     if (trailer) {
//       SetTrailer("");
//     } else {
//       MovieTrailer(movie?.title)
//         .then((url) => {
//           console.log(url);
//           const pickedUrl = new URLSearchParams(new URL(url).search);
//           console.log(pickedUrl);
//           console.log(pickedUrl.get("v"));
//           SetTrailer(pickedUrl.get("v"));
//         });
//     }
//   };

//   const custom = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   // Scroll functions using the ref
//   const scrollLeft = () => {
//     containerRef.current.scrollLeft -= 300;
//   };

//   const scrollRight = () => {
//     containerRef.current.scrollLeft += 300;
//   };

//   return (
//     <div className='row'>
//       <div className='RowTitle'>
//         <h1>{title}</h1>
//       </div>
//       <div className='scroll-container'>
//         <button className='scroll-button left' onClick={scrollLeft}>&lt;</button>
//         <div ref={containerRef} className='MainImageContainer'>
//           {MovieList.map((movie, index) => (
//             <img
//               onClick={() => handleClick(movie)}
//               key={index}
//               src={`${baseUrl}${BigCheck ? movie.poster_path : movie.backdrop_path}`}
//               alt={BigCheck ? movie.original_title : movie.title}
//               className={`AllPictures rowMovies ${BigCheck ? "bigHeight" : "smallHeight"}`}
//             />
//           ))}
//         </div>
//         <button className='scroll-button right' onClick={scrollRight}>&gt;</button>
//       </div>
//       <div style={{ padding: "40px" }}>
//         {trailer && <YouTube videoId={trailer} opts={custom} />}
//       </div>
//     </div>
//   );
// }

// export default Row;







