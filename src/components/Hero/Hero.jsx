import ButtonArea from '../ButtonArea/ButtonArea';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <div className="wrapper">
                <h1 className="hero-title">Online Monitoring and Asset Management in One Place</h1>
                <h3 className="hero-text">Avoid failures in your machines and make downtime a thing of the past with <span className='blue'>TRACTIAN's</span> predictive system.</h3>
                <div className="app-ratings">
                    <img src="./google-logo.svg" alt="Play Store Logo" className='google-logo'/>
                    <img src="./captera-logo.svg" alt="Capterra Logo" className='capterra-logo'/>
                </div>
                <ButtonArea />
            </div>
        </div>
    )
}

export default Hero;