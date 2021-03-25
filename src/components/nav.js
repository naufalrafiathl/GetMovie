import React from 'react'
import { Link } from 'react-router-dom'
import { RiMovie2Fill } from 'react-icons/ri'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
    const moviestest = ['1', '2', '3']

    const landing_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=694f210a11567b3472a88c95b053d7e7&page=1";
    const img_api = "https://image.tmdb.org/t/p/w342";
    const search_api = "https://api.themoviedb.org/3/discover/search/movie?&api_key=694f210a11567b3472a88c95b053d7e7&query=";
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
                <form className="form-search" action="" className="search-form">
                    <div className="input-search" >
                    <input className="input-box" type="text" name="query" placeholder="i.e IRON MAN"/>
                    </div>
                </form>
                <div className="show-contentcard">
                    {movies.map(movies => (
                        <div key={movies.id} className="card-movie">
                            <img className="movie-image" src={img_api+ movies.poster_path} alt={movies.title}/>
                        <div className="card-info">
                            <h2 className="movie-title">{movies.title}</h2>
                            <span className="rating-movie">{movies.vote_average} Rated</span>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
            
            
        </>
    )
}

export default Navbar
