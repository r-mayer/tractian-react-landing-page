import './NavItem.css';
import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';


function NavItem(props) {
    const [IsActive, setIsActive] = useState('false');

    useEffect(() => {
        setIsActive(props.status);
    })

    return (
        <>
            <li className='nav-item'>
                <a href="/#" className={`nav-link ${IsActive ? "active" : "" }`} onClick= {() => {setIsActive(!IsActive)}}>
                    <span className='nav-item-text'>{props.children}</span>
                    {IsActive && <Dropdown status={IsActive} name={props.name} img={props.img}/>}
                    <i className={`fa-solid fa-angle-down arrow ${IsActive ? "rotate" : ""}`}></i>
                </a>
            </li>
        </>
    )
}

export default NavItem;