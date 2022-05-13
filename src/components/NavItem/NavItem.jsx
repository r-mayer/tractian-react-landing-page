import './NavItem.css';
import React, { useState } from 'react';

function NavItem(props) {
    const [IsActive, setIsActive] = useState('false');

    return (
        <li className='nav-item'>
            <a href="/#" className={`nav-link ${IsActive ? "" : "active" }`} onClick= {() => {setIsActive(!IsActive)}}>
                <span className='nav-item-text'>{props.children}</span>
                <i className={`fa-solid fa-angle-down arrow ${IsActive ? "" : "rotate"}`}></i>
            </a>
        </li>
    )
}

export default NavItem;