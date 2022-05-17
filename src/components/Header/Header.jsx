import './Header.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import NavbarHidden from '../NavbarHidden/NavbarHidden';
import { useEffect, useState } from 'react';

function Header() {
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const hideMenu = () => setHiddenMenu(true);
    const showMenu = () => setHiddenMenu(false);
 
    return (
        <div className="header-container container">
            <div className="bg-items">
                <img src="./blueball.svg" alt="a" className='bg-blueball'/>
                <img src="./man-illustration.svg" alt="a" className='bg-man'/>
                <img src="./squares.svg" alt="a" className='bg-squares'/>
            </div>
            <div className={hiddenMenu ? "hidden-menu" : "hidden-menu hidden-menu-active"}>
                <i className="fa-solid fa-circle-xmark close-btn" onClick={hideMenu}></i>
                <NavbarHidden />
            </div>
            <Navbar hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu}/>
            <Hero />
        </div>
    )
}

export default Header;