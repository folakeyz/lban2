import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logo from '../img/white.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);

    window.addEventListener('resize', showButton)
    return (
       <>
        <nav className={scroll ? "navbar-active" : "navbar"}>
            <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img src={logo} width="50" className="nav-logo" />
            LOTUS BETA ANALYTICS <br></br>NIGERIA LIMITED
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                   ABOUT US
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                   OUR SOLUTIONS
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                   OUR SERVICES
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                   EVENTS
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/careers' className='nav-links' onClick={closeMobileMenu}>
                   CAREERS
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                   BLOG
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                   CONTACT US
                </Link>
            </li>
            </ul>
            {/* {button && <Button buttonStyle="btn--outline">CONTACT</Button>} */}
            </div>
        </nav>
       </>
    )
}

export default Navbar
