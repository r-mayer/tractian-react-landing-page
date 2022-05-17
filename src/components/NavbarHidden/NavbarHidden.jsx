import './NavbarHidden.css';
import NavItem from '../NavItem/NavItem';
import { useState } from 'react';

function NavbarHidden() {

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

    function getStatus(index) {
        if (itemState.items[index] === itemState.activeItem) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="hidden-navbar">
            <header className='hidden-header'>
                <div className="hidden-links">
                    <ul className='hidden-links-container'>
                        {
                            itemState.items.map((element, index) => (
                                <div key={index} onClick={() => {toggleActive(index)}}><NavItem status={getStatus(index)} name={itemState.menuNames[index].nameOf} img={itemState.imgs[index]} hidden={true}>{itemState.menuNames[index].nameOf}</NavItem></div>
                            ))
                        }
                        <p className="nav-link nav-item">Blog</p>
                    </ul>
                 </div>
            </header>
        </div>
    )
}

export default NavbarHidden;