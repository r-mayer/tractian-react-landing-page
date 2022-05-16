import StatCard from '../StatCard/StatCard';
import './Stats.css';

function Stats() {
    return(
        <div className="stats-container container">
            <img src="./bg-stats-img.png" alt="Background" className='bg-stats'/>
            <div className="bg-stats-blur"></div>
            <p className="stats-title">Better machine <span>performance</span> for better maintenance team's <span>productivity</span></p>
            <div className="stats-cards-container">
                <StatCard perc="20%" desc="ASSERTIVENESS OF INSIGHTS GENERATED BY TRACTIAN PLATFORM" icon={<i class="fa-solid fa-arrow-trend-up stats-icon"></i>} />
                <StatCard perc="45%" desc="INCREASED RELIABILITY OF MACHINES WITH TRACTIAN SOLUTION." icon={<i class="fa-solid fa-rocket stats-icon"></i>} />
                <StatCard perc="30%" desc="REDUCTION OF LAST-MINUTE MAINTENANCE OCCURRENCES." icon={<i class="fa-solid fa-arrow-trend-down stats-icon"></i>} />
            </div>
        </div>
    )
}

export default Stats;