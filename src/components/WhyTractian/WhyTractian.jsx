import MainButton from '../MainButton/MainButton';
import WhyCard from '../WhyCard/WhyCard';
import './WhyTractian.css';

function WhyTractian() {
    return(
        <div className="why-tractian-container container">
            <img src="./blueball.svg" alt="a" className='bg-blueball-why'/>
            <div className="why-bg"></div>
            <h2 className='why-title'>Why <span>Tractian?</span></h2>
            <div className="why-cards-wrapper">
                <WhyCard title="Predictive Maintenance" img="./why-logo1.svg" desc="Automatic fault detection, real-time asset health, reliability percentage and automatic insights." />
                <WhyCard title="Online Monitoring" img="./why-logo2.svg" desc="Tractian sensor collects vibration, temperature, hour meter and energy consumption data in real time." />
                <WhyCard title="Instant Setup" img="./why-logo3.svg" desc="Plug & Play solution, forget about gateways or routers, communication via independent 2G / 3G network." />
                <WhyCard title="Integrated CMMS" img="./why-logo4.svg" desc="Automate processes, work orders, and have total control over your assets and staff." />
            </div>
            <div className="why-tractian-button">
                <MainButton size="big">Get Started!</MainButton>
            </div>
        </div>
    )
}

export default WhyTractian;