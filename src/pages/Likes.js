import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
import '../components/Home.css'
import '../components/Likes.css'
import {GlobalContext} from '../context/GlobalState'
import Home from './Home'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'


function Likes() {

    const img_api = "https://image.tmdb.org/t/p/w342";
    const {likes} = useContext(GlobalContext)

    const {removeMovieFromLikes} = useContext(GlobalContext)
    return (
        <>
          <Navbar/>
          <div className="container--page">
            <h1 class="head-like-bm">Here's a list of your liked movies:</h1>
            <div className="search-container">
            <div className="show-contentcard">
            {likes.map(movies => (
                <>     
  
                    
                    <div key={movies.id} className="card-movie">
                        <div className="img-container">
                            <div className="overview-container">
                                <h2>Overview:</h2>
                                <p>{movies.overview}</p>
                            </div>
                            
                            <img className="movie-image" src={movies.poster_path ? (img_api+ movies.poster_path) : 'https://image.winudf.com/v2/image/YXBwaW52ZW50b3IuYWlfY3VybHlrYXk5MTYubm90ZXh0d2hpbGVkcml2aW5nX3NjcmVlbl8xX2VraWs5ZjMy/screen-1.jpg?fakeurl=1&type=.jpg'} alt={movies.title} />
                        </div>
                        <div className="card-info-page">
                            <h2 className="movie-title">{movies.title}</h2>
                            <Button onClick={()=> removeMovieFromLikes(movies.id)}className="addmore-btn" buttonColor="red" buttonSize="btn--small">REMOVE</Button>
                        </div>
                    </div>
                    
                </>
                
                ))}
                </div>
                <div className="add-more">
                        <Link to="/">
                            <Button className="addmore-btn" buttonColor="blue" buttonSize="btn--small">
                                ADD MORE
                            </Button>
                        </Link>
                    </div>
                </div>
          </div>
        </>
    )
}
export default Likes
