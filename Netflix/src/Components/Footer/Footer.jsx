import React from 'react'
import "./footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div>
      <section className = "parentFooter">
      <section className = "FooterIcons">
        <div className = "firstIcon"><FacebookOutlinedIcon/></div>
        <div className = "secondIcon"><InstagramIcon/></div>
        <div className = "thirdIcon"><TwitterIcon/></div>
        <div className = "fourthIcon"><YouTubeIcon /></div>
      </section>

      <div className="MainFooter col-12">
        <ul className="firstBox ">
          <li><a href="">Audio Description</a></li>
          <li><a href="">Investor Relations</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>

        <ul className="secondBox ">
          <li><a href="">Help Center</a></li>
          <li><a href="">Jobs</a></li>
          <li><a href="">Legal Notices</a></li>
          <li><a href="">Do Not Sell or Share My Personal <br /> Information</a></li>
        </ul>

        <ul className="thirdBox">
          <li><a href="">Gift Cards</a></li>
          <li><a href="">Netflix Shop</a></li>
          <li><a href="">Cookie Preferences</a></li>
          <li><a href="">Ad Choices</a></li>
        </ul>

        <ul className="fourthBox">
          <li><a href="">Media Center</a></li>
          <li><a href="">Terms of Use</a></li>
          <li><a href="">Corporation Information</a></li>
        </ul>
      </div>
      <div className="serviceButton">
          <a>Service Code</a>
        </div>

        <div className="year">
          &copy; 1997-2024 Netflix, Inc.
        </div>
      </section>
    </div>
  )
}

export default Footer