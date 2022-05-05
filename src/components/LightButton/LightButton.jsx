import './LightButton.css';


function LightButton (props) {
    return(
        <button className='light-button'>{props.children}</button>
    )
}

export default LightButton;