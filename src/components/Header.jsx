import React from 'react'
import { Link } from 'react-router-dom'
import  Logo  from '../assets/cafe-space-logo.png'
import Menu from '../assets/menu.png'
import CloseIcon from '../assets/close.png'

function Header() {

    function handleMenuClick() {
        const sidebar = document.getElementsByClassName('sidebar')[0]
        sidebar.style.display = sidebar.style.display == "none" ? "block" : "none";
        // sidebar.style.width = sidebar.style.width == "0px" ? "300px": "0" ;
        console.log(sidebar.style.width);

    }

    function handleSidebarCloseClick() {
        document.getElementsByClassName('sidebar')[0].style.display = "none"
    }
    return (
        <header className="header">
            <div className="header-title-logo-div">
                <h1>Cafe-Space</h1>
                <img src={Logo} className='logo' />
            </div>
            <nav>
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/finder' className="nav-link">Finder</Link>
                <a href="#about" className="nav-link">About</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>
            <img src={Menu} className="menu" onClick={() => handleMenuClick()} /> 
            <div className="sidebar">
                <div className="sidebar-item" onClick={() => handleSidebarCloseClick()}>
                    <img src={CloseIcon} className="close-icon"  />
                </div>

                <div className="sidebar-item" >
                    <Link to='/' className="nav-link">Home</Link>
                </div>

                <div className="sidebar-item" >
                    <Link to='/finder' className="nav-link">Finder</Link>
                </div>
        
                <div className="sidebar-item" >
                    <a href="#about" className="nav-link">About</a>
                </div>

                <div className="sidebar-item" >
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header
