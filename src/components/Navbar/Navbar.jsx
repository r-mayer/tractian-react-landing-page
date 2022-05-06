import './Navbar.css';
import NavItem from '../NavItem/NavItem';
import LangButton from '../LangButton/LangButton';
import LightButton from '../LightButton/LightButton';

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
                        <NavItem arrow="disabled">Blog</NavItem>
                        <LangButton />
                    </ul>
                 </div>
                <div className="right-links">
                    <p className='customer-link'>Customers area</p>
                    <LightButton>Demonstration</LightButton>
                </div>
            </header>
        </div>
    )
}

export default Navbar;