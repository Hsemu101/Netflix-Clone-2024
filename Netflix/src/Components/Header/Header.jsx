import React from 'react'
import "./header.css"
import Netflix from "./Images/Netflix_Logo_PMS.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Profile from "./Images/profile.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div>
      <div className="HeaderContainer">
      
      <div className="LeftContainer col-8">
        <ul className="headerUL">
          <li className="Netflix-image"><img src={Netflix} alt="" /></li>
          <li className="ul-one">Home</li>
          <li className="ul-two">TvShows</li>
          <li className="ul-three">Movies</li>
          <li className="ul-four">New & Popular</li>
          <li className="ul-five">My List</li>
          <li className="ul-six">Browse by Languages</li>
        </ul>
      </div>
      <div className="RightContainer col-4">
          <ul className="right-li-header">
            <li className="Right-li-one"><SearchIcon /></li>
            <li className="Right-li-two"><NotificationsNoneIcon /></li>
            <li className="Right-li-three"> <img src={Profile} alt="" /></li>
            <li className="Right-li-four"><ArrowDropDownIcon/></li>
          </ul>
      </div>


      </div>
    </div>
  )
}

export default Header