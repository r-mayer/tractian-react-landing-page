import './DropdownList.css';

function DropdownList(props) {

    return(
        <div className='dropdown-list-container'>
            {props.img !== "null" && <img src={props.img} alt="Background" className='dropdown-bg'/>}
            <h2 className="dropdown-list-title">{props.data.title}</h2>
            <ul className='dropdown-list'>
                <li className="dropdown-list-item">
                    <img src={props.data.listItems[0].listIcon} alt="Icon" className='dropdown-list-item-icon'/>
                    <div className="dropdown-list-item-rigth">
                        <p className="dropdown-list-item-name">{props.data.listItems[0].listTitle}</p>
                        <p className="dropdown-list-item-desc">Real time smart sensor</p>
                    </div>
                </li>
                <li className="dropdown-list-item">
                    <img src={props.data.listItems[1].listIcon} alt="Icon" className='dropdown-list-item-icon'/>
                    <div className="dropdown-list-item-rigth">
                        <p className="dropdown-list-item-name">{props.data.listItems[1].listTitle}</p>
                        <p className="dropdown-list-item-desc">Real time smart sensor</p>
                    </div>
                </li>
                <li className="dropdown-list-item">
                    <img src={props.data.listItems[2].listIcon} alt="Icon" className='dropdown-list-item-icon'/>
                    <div className="dropdown-list-item-rigth">
                        <p className="dropdown-list-item-name">{props.data.listItems[2].listTitle}</p>
                        <p className="dropdown-list-item-desc">Real time smart sensor</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default DropdownList;