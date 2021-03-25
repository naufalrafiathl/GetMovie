import React from 'react'
import { Link } from 'react-router-dom'
import { RiMovie2Fill } from 'react-icons/ri'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { Button } from './Button'
import './Navbar.css'

function Navbar() {

    const [SQuery, setSQuery] = useState('');

    const landing_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=694f210a11567b3472a88c95b053d7e7&page=1";
    const img_api = "https://image.tmdb.org/t/p/w342";
    const search_api = "https://api.themoviedb.org/3/search/movie?api_key=694f210a11567b3472a88c95b053d7e7&query=";
    const [click,setClick] = useState(false)
    const btnClick = () => setClick(!click)
    const [button, setButton] = useState(true);
    const closeMobileMenu= () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton)

    useEffect(() => {
        fetch(landing_api).then(res => res.json())
        .then(data => {
            console.log(data)
            setMovies(data.results)
        })

    }, []);


    const [movies, setMovies] = useState([]);



    const handlesubmit = (e) => {
        e.preventDefault();

        console.log(SQuery)
        fetch(search_api + SQuery).then(res => res.json())
        .then(data => {
            console.log(data)
            setMovies(data.results)
        })

    }

    const handleonchange = (e) => {
        setSQuery(e.target.value);
    }


    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                       <RiMovie2Fill className="navbar-icon" />
                       GetMovie
                    </Link>
                    <div className="menu-icon" onClick={btnClick} >
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Likes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Bookmarks
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <a href='https://themoviedb.org/' className="btn-link tmdb" >
                                    <Button buttonStyle='btn--outline'>Powered by TMDB</Button>
                                </a>
                            ): (
                                <a href='https://themoviedb.org/' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--wide'>Powered by TMDB</Button>
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-container">
            <h1 className="title-hero">GetMovie</h1>
                    <p className="hero-desc">Get movies details, save to your liked page, or add it to bookmark</p>
                    <div className="btn-homepg">
                    <Link to='/'>
                    <Button buttonColor="red" buttonSize="btn--wide" >SEARCH NOW</Button>
                    </Link>
                    </div>
            </div>

            <div className="search-container">
                <h1 className="search-title">
                    SEARCH MOVIE :
                </h1>
                <form onSubmit={handlesubmit} className="form-search" action="" className="search-form">
                    <div className="input-search" >
                        <input className="input-box" type="text" name="query" placeholder="i.e IRON MAN" value={SQuery}
                        onChange={handleonchange}/>
                    </div>
                </form>
                <div className="show-contentcard">
                    {movies.map(movies => (
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
                            <Button className="like-btn" buttonColor="red" buttonSize="btn--small">Add to liked page</Button>
                        </div>
                        <div className="container-bm">
                            <Button className="like-btn" buttonColor="blue" buttonSize="btn--small">Add to bookmarks</Button>
                        </div>
                    </div>
                </>
                    ))}
                </div>


            </div>
            
            
        </>
    )
}

export default Navbar
