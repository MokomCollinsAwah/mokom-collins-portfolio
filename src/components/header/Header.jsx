import React, { useState } from 'react';
import { ReactComponent as Sun } from '../../assets/Sun.svg';
import { ReactComponent as Moon } from '../../assets/Moon.svg';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
        // TOGGLE MENU
    const[Toggle, showMenu] = useState(false);

    // DARK MODE CONTROL
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data__theme', 'dark');
        localStorage.setItem('selectedTheme', "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data__theme', 'light');
        localStorage.setItem('selectedTheme', "light")
    };

    const selectedTheme = localStorage.getItem("selectedTheme");

    if(selectedTheme === 'dark') {
        setDarkMode();
    }

    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
        else setLightMode()
    };

  return (
    <header className='header'>
        <nav className="nav container navbar navbar-default navbar-fixed-top">
            <a href="index.html" className="nav__logo"> 
            <img src={logo} alt="Mokom Collins Awah" className='nav__logo-img' />
            Mokom <span style={{ color: '#3366ff', }}>Collins</span>
            </a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav_item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-estate nav__icon"></i>Home
                    </a>
                    </li>
                    <li className="nav_item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i>About
                    </a>
                    </li>
                    <li className="nav_item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i>Skills
                    </a>
                    </li>
                    <li className="nav_item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i>Portfolio
                    </a>
                    </li>
                    <li className="nav_item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav__icon"></i>Contact
                    </a>
                    </li>
                    <div className="dark__mode float">
                            <input type="checkbox" 
                            className="dark__mode-input" 
                            id='dark__mode-toggle' 
                            onChange={toggleTheme}
                            defaultChecked={selectedTheme === 'dark'}
                            />
                            <label className="dark__mode-label" for='dark__mode-toggle'>
                                <Sun/>
                                <Moon/>
                            </label>
                </div>
                </ul>
                
                <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=>  showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
            
        </nav>
    </header>
  )
}

export default Header
