import Software from '../Software/Software';
import './Softwares.css';

function Softwares() {
    return(
        <div className="softwares container">
            <div className="software-bg"></div>
            <Software title="Maintenance Software TracOS™" img="./software1.png" size="smaller" desc="The revolutionary CMMS for planning, tracking metrics, and connecting with your team."/>
            <Software title="Online Monitoring Smart Trac" img="./software2.png"  desc="The most complete predictive system on the market. Monitor your assets vibration, temperature and hour meter."/>
        </div>
    )
}

export default Softwares;

