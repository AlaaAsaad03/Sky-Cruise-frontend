import React from 'react'
//Imported Images
import Logo from '../../asset/Logo.png'

//Icons 
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";



const Footer = () => {
  return (
    <div className='footer'>
<div className="sectionContainer container grid">
  <div className='gridOne'>
    <div className='logoDiv'>
    <img src={Logo} className='Logo' />
    </div>
    <p>Your mind should be stronger than your feelings, Fly!</p>
    <div className='socialIcon flex'>
          <TiSocialFacebook className='icon'/>
          <TiSocialTwitter className='icon'/>
          <TiSocialYoutube className='icon'/>
          <TiSocialPinterest className='icon'/>
          </div>
          </div>
          <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href = "">FAQ</a>
          </li>
          <li>
            <a href = "">How to</a>
          </li>
          <li>
            <a href = "">Features Status</a>
          </li>
          <li>
            <a href = "">Baggage</a>
          </li>
          <li>
            <a href = "">Route Map</a>
          </li>
          <li>
            <a href = "">Our Communities</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href = "">Home</a>
          </li>
          <li>
            <a href = "">Explore</a>
          </li>
          <li>
            <a href = "">Flight Status</a>
          </li>
          <li>
            <a href = "">Travel</a>
          </li>
          <li>
            <a href = "">Check-In</a>
          </li>
          <li>
            <a href = "">Manage your booking</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href = "">Chouffuer</a>
          </li>
          <li>
            <a href = "">Our Partners</a>
          </li>
          <li>
            <a href = "">Destination</a>
          </li>
          <li>
            <a href = "">Career</a>
          </li>
          <li>
            <a href = "">Transportation</a>
          </li>
          <li>
            <a href = "">Programmer Rules</a>
          </li>
        </div>

          </div>
          <div className="copyRightDiv flex">
            <p> Courtesy Design | Developed By Alaa Asaad</p>
          </div>
        </div>
  )
}

export default Footer