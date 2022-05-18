import MainButton from '../MainButton/MainButton';
import './SolutionCard.css';

function SolutionCard(props) {
    return(
        <div className="solution-card-container">
            <p className="solution-card-pre-title">{props.pretitle}</p>
            <h2 className="solution-card-title">{props.title}</h2>
            <p className="solution-card-desc">{props.desc}</p>
            <MainButton>{props.buttontext}
                <i className="fa-solid fa-angle-right solution-arrow"></i>
            </MainButton>
            <img src={props.img} alt="Solution" className={`solution-card-img ${props.id === 2 ? "adjust" : ""} `}/>
        </div>
    )
}

export default SolutionCard;