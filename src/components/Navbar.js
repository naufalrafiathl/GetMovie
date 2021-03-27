
import React from 'react'
import { Link } from 'react-router-dom'
import { RiMovie2Fill } from 'react-icons/ri'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { Button } from './Button'
import './Home.css'
import { Link as Linkz } from "react-scroll"



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



    return (
            <>
            <div className="navbar">
                <div className="navbar-container container">
                <Linkz className="navbar-logo" to='home' activeClass="active" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
                       <RiMovie2Fill className="navbar-icon" />
                       GetMovie
                </Linkz>
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
                            <Link to='/likes' className="nav-links" onClick={closeMobileMenu}>
                                Likes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/bookmark' className="nav-links" onClick={closeMobileMenu}>
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
            </>
    )
}

export default Navbar
