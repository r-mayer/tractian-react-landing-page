import './MainButton.css';


function MainButton (props) {
    var size = (props.size === "big") ? "big" : ""
    return (
        <button className={`main-button ${size}`}>{props.children}</button>
    )
}

export default MainButton;