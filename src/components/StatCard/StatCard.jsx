import './StatCard.css';

function StatCard(props) {
    return(
        <div className="stat-card-container">
            <p className="stat-percentage">{props.perc}</p>
            <p className="stat-desc">{props.desc}</p>
            <img src="./bluecap.png" alt="Bluecap" className='bluecap-img'/>
        </div>
    )
}

export default StatCard;