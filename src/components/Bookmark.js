import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import './Likes.css'

function Bookmark() {
    return (
        <>
          <Navbar/>
          <div className="container--page">
            <h1>Here's a list of your bookmark:</h1>
          </div>
        </>
    )
}

export default Bookmark
