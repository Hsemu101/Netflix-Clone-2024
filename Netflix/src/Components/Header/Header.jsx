import React, { useEffect, useState } from 'react'
import "./header.css"
import Netflix from "./Images/Netflix_Logo_PMS.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Profile from "./Images/profile.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';



function Header() {
  // window.addEventListener('scroll', function() {
  //   const headerContainer = document.querySelector('.HeaderContainer');
  //   if (window.pageYOffset === 0) {
  //     headerContainer.style.backgroundColor = 'transparent';
  //   } else {
  //     headerContainer.style.backgroundColor = '#0B0B0B';
  //   }
  // });
const [HeaderBG, SetHeaderBG] = useState("transparent")

useEffect(() => {
 const scrollCheck = () =>{
  if (window.pageYOffset === 0){
    SetHeaderBG("transparent")
  }else{
    SetHeaderBG("#0B0B0B")
  }
 } 
 window.addEventListener("scroll", scrollCheck)
  return() =>{
    window.removeEventListener("scroll", scrollCheck)
  }
}, [])
  



  return (
    <div>
      <div className="HeaderContainer" style={{backgroundColor: HeaderBG}}>
      
      <div className="LeftContainer col-8">
        {/* <ul className="headerUL">
          <li> <Link to="/netflix" className="Netflix-image"><img src={Netflix} alt="" /></Link></li>
          <li> <Link to="/Home" className="ul-one">Home</Link></li>
          <li> <Link to="/TvShows" className="ul-two">TvShows</Link></li>
          <li> <Link to="/Movies" className="ul-three">Movies</Link></li>
          <li> <Link to="/NewPopular" className="ul-four">New & Popular</Link></li>
          <li> <Link to="/MyList" className="ul-five">My List</Link></li>
          <li> <Link to="/BrowsebyLanguages" className="ul-six">Browse by Languages</Link></li>
        </ul> */}
          <ul className="headerUL">
          <li className="Netflix-image"><a href=""><img src={Netflix} alt=""/></a></li>
          <li className="ul-one"><a href="">Home</a></li>
          <li className="ul-two"><a href="">TvShows</a></li>
          <li className="ul-three"><a href="">Movies</a></li>
          <li className="ul-four"><a href="">New & Popular</a></li>
          <li className="ul-five"><a href="">My List</a></li>
          <li className="ul-six"><a href="">Browse by Languages</a></li>
         
        </ul>
      </div>
      <div className="RightContainer col-4">
          <ul className="right-li-header">
            <li className="Right-li-one"><a href=""><SearchIcon /></a></li>
            <li className="Right-li-two"><a href=""><NotificationsNoneIcon /></a></li>
            <li className="Right-li-three"><a href=""><img src={Profile} alt="" /></a></li>
            <li className="Right-li-four"><a href=""><ArrowDropDownIcon/></a></li>
          </ul>
      </div>


      </div>
    </div>
  )
}

export default Header