import './Header.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

function Header() {
    return (
        <div className="header-container container">
            <div className="bg-items">
                <img src="./blueball.svg" alt="a" className='bg-blueball'/>
                <img src="./man-illustration.svg" alt="a" className='bg-man'/>
                <img src="./squares.svg" alt="a" className='bg-squares'/>
            </div>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header;