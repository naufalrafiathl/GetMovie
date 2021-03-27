import React, {useContext} from 'react'
import { useEffect, useState } from "react";
import { Button } from './Button'
import './Home.css'
import { Link as Linkz } from "react-scroll"
import Navbar from "./Navbar"
import {GlobalContext} from "../context/GlobalState"
import { Link } from 'react-router-dom'



function Home() {

    const [SQuery, setSQuery] = useState('');
    const [owned, setOwned] = useState([]);

    const landing_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=694f210a11567b3472a88c95b053d7e7&page=1";
    const img_api = "https://image.tmdb.org/t/p/w342";
    const search_api = "https://api.themoviedb.org/3/search/movie?api_key=694f210a11567b3472a88c95b053d7e7&query=";

    useEffect(() => {
        fetch(landing_api).then(res => res.json())
        .then(data => {
            setMovies(data.results)
        })

    }, []);


    const [movies, setMovies] = useState([]);




    const handlesubmit = (e) => {
        e.preventDefault();

        fetch(search_api + SQuery).then(res => res.json())
        .then(data => {
            setMovies(data.results)
        })

    }

    const handleonchange = (e) => {
        setSQuery(e.target.value);
    }



    const {addMovieToLikes, likes, addMovieToBookmarks} = useContext(GlobalContext)


   var test1 = JSON.parse(localStorage.getItem('likes'))
   var test2 = JSON.parse(localStorage.getItem('bookmarks'))
 
   const op = movies.map(m => m.id)
   const op1 = test1 ? test1.map(m =>m.id):[]
   const op2 = test2 ? test2.map(m =>m.id):[]
   

    console.log(movies)
    console.log(test1)
    console.log(movies.filter(ar => !test1.find(rm => (rm.id === ar.id) )))
    const tempar = movies.filter(ar => !test1.find(rm => (rm.id === ar.id) ));
    const finalar = tempar.filter(ar => !test2.find(rm => (rm.id === ar.id) ));



    return (
        <>
           <Navbar/>    
            <div className="bg-container"id="home">
            <h1 className="title-hero">GetMovie</h1>
                    <p className="hero-desc">Get movies details, save to your liked page, or add it to bookmark</p>
                    <div className="btn-homepg">
                    <Linkz to='search-page' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
                    <Button buttonColor="red" buttonSize="btn--wide" >SEARCH NOW</Button>
                    </Linkz>
                    </div>
            </div>

            <div className="search-container" id="search-page">
                <h1 className="search-title">
                    SEARCH MOVIE :
                </h1>
                <form autocomplete="off" onSubmit={handlesubmit} className="form-search" action="" className="search-form">
                    <div className="input-search" >
                        <input className="input-box" type="text" name="query" placeholder="i.e IRON MAN" value={SQuery}
                        onChange={handleonchange}/>
                    </div>
                </form>
                <div className="show-contentcard">
                    {finalar.map(movies => (
                <>     
  
                    
                    <div key={movies.id} className="card-movie">
                        <div className="img-container">
                            <div className="overview-container">
                                <h2>Overview:</h2>
                                <p>{movies.overview}</p>
                            </div>
                            
                            <img className="movie-image" src={movies.poster_path ? (img_api+ movies.poster_path) : 'https://image.winudf.com/v2/image/YXBwaW52ZW50b3IuYWlfY3VybHlrYXk5MTYubm90ZXh0d2hpbGVkcml2aW5nX3NjcmVlbl8xX2VraWs5ZjMy/screen-1.jpg?fakeurl=1&type=.jpg'} alt={movies.title} />
                        </div>
                        <div className="card-info">
                            <h2 className="movie-title">{movies.title}</h2>
                            <span className="rating-movie">{movies.vote_average} Rated</span>
                        </div>
                        <div className="container-like">
                    <Link to="/likes">
                    <Button  onClick={() => addMovieToLikes(movies)} className="like-btn" buttonColor="red" buttonSize="btn--small" value={movies.id}>Add to liked page</Button>
                    </Link>
                        </div>
                        <div className="container-bm">
                        <Link to="/bookmark">
                            <Button onClick={() => addMovieToBookmarks(movies)}  className="like-btn" buttonColor="blue" buttonSize="btn--small" value={movies.id}>Add to bookmarks</Button>
                        </Link> 
                        </div>
                    </div>
                </>
                    ))}
                </div>
                


            </div>
            
            
        </>
    )
}

export default Home
