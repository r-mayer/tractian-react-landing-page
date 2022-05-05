import './LangButton.css';

function LangButton() {
    return (
        <li className='lang-button-container'>
            <img src="./flag.svg" alt="Flag Logo" className='flag-logo'/>
            <span className='lang-text'>US</span>
            <i class="fa-solid fa-angle-down"></i>
        </li>
    )
}

export default LangButton;