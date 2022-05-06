import './LightButton.css';


function LightButton (props) {
    var size = (props.size === "big") ? "big" : ""
    return (
        <button className={`light-button ${size}`}>{props.children}</button>
    )
}

export default LightButton;