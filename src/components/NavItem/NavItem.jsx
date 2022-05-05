import './NavItem.css';

function NavItem(props) {
    if (props.arrow !== "disabled") {
        var drawArrow = <i class="fa-solid fa-angle-down arrow"></i>;
    }

    return (
        <li className='nav-item'>
            <span className='nav-item-text'>{props.children}</span>
            {drawArrow}
        </li>
    )
}

export default NavItem;