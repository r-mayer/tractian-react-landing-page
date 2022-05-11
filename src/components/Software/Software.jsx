import './Software.css';
import MainButton from '../MainButton/MainButton';

function Software(props) {
    return(
        <div className='software-container'>
            <i class="fa-solid fa-bookmark software-icon"></i>
            <h1 className="software-title">{props.title}</h1>
            <div className="software-img-container">
                <img src={props.img} alt="Software" className={"software-img " + props.size }/>
            </div>
            <p className="software-description">{props.desc}</p>
            <MainButton>See More</MainButton>
        </div>
    )
}

export default Software;