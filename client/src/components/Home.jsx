import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Home.css"
const img = require("../assets/6617.jpg")


const Home = () => {
  return (
    <div className='home-container'>
      <div id="intro">
        <p>Welcome to easy&harr;Transfer</p>
        <Link to={"/send"}><button id='btn6'>&harr;</button></Link>
      </div>
      <img id='img1' src={img} alt="" />

    </div>
  )
}

export default Home
