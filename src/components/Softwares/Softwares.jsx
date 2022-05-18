import Software from '../Software/Software';
import './Softwares.css';

function Softwares() {
    return(
        <div className="softwares container">
            <div className="software-bg"></div>
            <h2 className="software-section-title">Check our <span>main</span> products in detail</h2>
            <div className="sofwares-wrapper">
                <Software title="Maintenance Software TracOS™" img="./software1.png" size="smaller" desc="The revolutionary CMMS for planning, tracking metrics, and connecting with your team."/>
                <Software title="Online Monitoring Smart Trac" img="./software2.png"  desc="The most complete predictive system on the market. Monitor your assets vibration, temperature and hour meter."/>
            </div>
        </div>
    )
}

export default Softwares;

