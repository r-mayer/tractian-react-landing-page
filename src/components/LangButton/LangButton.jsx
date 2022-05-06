import './LangButton.css';
import { useState } from 'react';

function LangButton() {
    const [isActive, setActive] = useState(false);

    return (
        <li className='lang-button-container'  onMouseEnter={() => {setActive(true); console.log(isActive)}} onMouseLeave={() => {setActive(false)}}>
            <img src="./flag.svg" alt="Flag Logo" className='flag-logo'/>
            <span className='lang-text'>US</span>
            <i className="fa-solid fa-angle-down arrow"></i>
            {isActive && (
                <div className='list-langs-container'>
                    <div className='list-langs'>
                        <img src="./flag.svg" alt="Flag Logo" className='flag-logo'/>
                        <span className='lang-text'>US</span>
                        <img src="./flag.svg" alt="Flag Logo" className='flag-logo'/>
                        <span className='lang-text'>US</span>
                    </div>
                </div>)}
        </li>
    )
}

export default LangButton;