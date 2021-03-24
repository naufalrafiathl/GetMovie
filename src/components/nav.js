import React from 'react'
import { Link } from 'react-router-dom'
import { RiMovie2Fill } from 'react-icons/ri'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react";
import { Button } from './Button'
import './Navbar.css'

function Navbar() {

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

    const movies = [
        {},
        {},
        {},
    ]

   

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
                                <Link to='/donate' className="btn-link">
                                    <Button buttonStyle='btn--outline'>DONATE</Button>
                                </Link>
                            ): (
                                <Link to='/donate' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--wide'>DONATE</Button>
                                </Link>
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
            </div>
            
        </>
    )
}

export default Navbar
