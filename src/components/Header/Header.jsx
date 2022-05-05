import './Header.css';
import Navbar from '../Navbar/Navbar';


function Header() {
    return (
        <div className="header-container container">
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header;


function Hero() {
    return (
        <div className="hero-container">
            <h1 className="hero-title">Teste</h1>
            <h3 className="hero-text">Teste</h3>
            <div className="app-ratings">
                <p>Google</p>
                <p>Capterra</p>
            </div>
        </div>
    )
}