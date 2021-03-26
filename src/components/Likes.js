import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import './Likes.css'

function Likes() {


    return (
        <>
          <Navbar/>
          <div className="container--page">
            <h1>Here's a list of your liked movies:</h1>
          </div>
        </>
    )
}

export default Likes
