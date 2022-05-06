import MainButton from '../MainButton/MainButton';
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
                <div className="bottom-btn-area">
                    <div className="letter-bg">
                        <img src="./letter-T.svg" alt="bg-T" className='lt-bg' />
                        <img src="./letter-N.svg" alt="bg-N" className='lt-bg' />
                    </div>
                    <MainButton size="big">Schedule a demo</MainButton>
                    <p className='btn-customer'>Already a customer? <a href="http://localhost:3000/" className='link-customer'>Access here.</a></p>
                </div>
            </div>
        </div>
    )
}

export default Hero;