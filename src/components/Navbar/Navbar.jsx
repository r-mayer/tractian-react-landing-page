import './Navbar.css';
import NavItem from '../NavItem/NavItem';
import LangButton from '../LangButton/LangButton';
import MainButton from '../MainButton/MainButton';

function Navbar() {
    return (
        <div className="navbar">
            <header>
                <img src="logo.svg" alt="Logo" className='logo white-svg'/>
                <div className="middle-links">
                    <ul>
                        <NavItem>Solutions</NavItem>
                        <NavItem>Industries</NavItem>
                        <NavItem>About Us</NavItem>
                        <NavItem>Resoucers</NavItem>
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