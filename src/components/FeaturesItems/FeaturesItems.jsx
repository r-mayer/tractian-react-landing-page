import './FeaturesItems.css';

function FeaturesItems(props) {
    return(
        <div className="features-items-container">
            <img className='feature-item-img' src={props.img} alt="Feature" />
            <p className='feature-item-title'>{props.title}</p>
            <p className='feature-item-text'>{props.text}</p>
            <a href="#" className='read-more-btn'>Read More</a>
        </div>
    )
}

export default FeaturesItems;