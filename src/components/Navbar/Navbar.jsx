import './Navbar.css';
import NavItem from '../NavItem/NavItem';
import LangButton from '../LangButton/LangButton';
import MainButton from '../MainButton/MainButton';
import { useState } from 'react';
import { useCallback } from 'react';

function Navbar(props) {

    const [itemState, setState] = useState(
        {
            activeItem: null,
            items: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
            menuNames: [{nameOf: "Solutions"}, {nameOf: "Industries"}, {nameOf: "About Us"}, {nameOf: "Resources"} ],
            imgs: ["./sensor-box.png", "./bluecap.png", "./ativos-recebidos.png", "./faq-hero.png"]
        }
    );

    function toggleActive(index) {
        if (itemState.activeItem === itemState.items[index]) {
            setState({ ...itemState, activeItem: null});
        } else {
            setState({ ...itemState, activeItem: itemState.items[index]});
        }
    }

    const handleClick = useCallback(event => {
        props.setHiddenMenu(false)
      }, [props.setHiddenMenu])

    function getStatus(index) {
        if (itemState.items[index] === itemState.activeItem) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="navbar">
            <header>
                <img src="logo.svg" alt="Logo" className='logo white-svg' onClick={window.scrollTo(0, 0)}/>
                <i class="fa-solid fa-bars hamburg" onClick={handleClick}></i>
                <div className="middle-links">
                    <ul className='middle-links-container'>
                        {
                            itemState.items.map((element, index) => (
                                <div key={index} onClick={() => {toggleActive(index)}}><NavItem status={getStatus(index)} name={itemState.menuNames[index].nameOf} img={itemState.imgs[index]}>{itemState.menuNames[index].nameOf}</NavItem></div>
                            ))
                        }
                        <p className="nav-link nav-item">Blog</p>
                        <LangButton />
                    </ul>
                 </div>
                <div className="right-links">
                    <p className='customer-link'>Customers area</p>
                    <MainButton>Demonstration</MainButton>
                </div>
            </header>
        </div>
    )
}

export default Navbar;