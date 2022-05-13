import './Solutions.css';
import SolutionCard from '../SolutionCard/SolutionCard';

function Solutions() {
    return(
        <div className="solutions-container container">
            <div className="solutions-header">
                <div className="solutions-title-container">
                    <p>IoT products &amp; solutions for industries</p>
                    <p>Combine monitoring and management, take your pick.</p>
                </div>
                <div className="solutions-img-wrapper">
                    <img src="./monitored-asset.png" alt="Solutions" className='solutions-img'/>
                </div>
            </div>
            <p className="solutions-choose">Choose the area that interest you:</p>
            <div className="solutions-wrapper">
                <SolutionCard pretitle="hardware + connection + software" title="Online Monitoring" desc="Our system centralizes accurate information about your machines" buttontext="Discover our solutions" img="./sensor-box.png"/>
                <SolutionCard pretitle="complete plataform" title="Asset Management" desc="Automate your Work Plans and Work Orders, replace Excel completely" buttontext="Check our products" img="./mobile-assets-tree.png"/>
            </div>
        </div>
    )
}

export default Solutions;