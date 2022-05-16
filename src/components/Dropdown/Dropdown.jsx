import "./Dropdown.css";
import DropdownList from '../DropdownList/DropdownList';

function Dropdown(props) {
    const menuData = [
        {
            title: "Smart Trac ONLINE MONITORING",
            listItems: [{
                listTitle: "Tractian Smart Sensor",
                listDesc: "Real-time analysis of vibration and temperature.",
                listIcon: "./menu-list-icon0.svg"
            }, {
                listTitle: "Monitoring Plataform",
                listDesc: "Monitor the condition of your machines from anywhere.",
                listIcon: "./menu-list-icon7.svg"
            }, {
                listTitle: "See how it works",
                listDesc: "Discover how TRACTIAN makes the maintenence professional's routine easier.",
                listIcon: "./menu-list-icon6.svg"
            }],
        },
        {
            title: "TracOS™ ASSET MANAGEMENT",
            listItems: [{
                listTitle: "Maintenance Management Software",
                listDesc: "Maintenance Management with the most complete platform on the market.",
                listIcon: "./menu-list-icon5.svg"
            }, {
                listTitle: "CMMS Features",
                listDesc: "Centralize you team activities and boost your results.",
                listIcon: "./menu-list-icon4.svg"
            }, {
                listTitle: "Capterra 2021 ranking",
                listDesc: "We are TOP CMMS, OEE and EAM solutions in Capterra 2021 ranking.",
                listIcon: "./menu-list-icon5.svg"
            }],
        },
        {
            title: "Overview",
            listItems: [{
                listTitle: "Plans",
                listDesc: "Find out how to get our solution.",
                listIcon: "./menu-list-icon3.svg"
            }, {
                listTitle: "Frequently questions",
                listDesc: "Understand in depth how our technology works.",
                listIcon: "./menu-list-icon10.svg"
            }, {
                listTitle: "Talk to an expert",
                listDesc: "Get to know the system and see all its advantages.",
                listIcon: "./menu-list-icon2.svg"
            }],
        }
    ];


    return(
        <div className="dropdown-container">
            <div className="dropdown-wrapper">
                <DropdownList data={menuData[0]} img={props.img}></DropdownList>
                <DropdownList data={menuData[1]} img="null"></DropdownList>
                <DropdownList data={menuData[2]} img="null"></DropdownList>
            </div>
        </div>
    )
}

export default Dropdown;