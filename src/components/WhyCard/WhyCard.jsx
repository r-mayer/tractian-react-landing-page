import './WhyCard.css';

function WhyCard(props) {
    return(
        <div className="why-card-container">
            <img className="card-img" src={props.img} alt="Why Card" />
            <div className="right-content">
                <div className="why-card-title">{props.title}</div>
                <div className="why-card-desc">{props.desc}</div>
            </div>
        </div>
    )
}

export default WhyCard;