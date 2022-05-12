import './Footer.css';

function Footer() {
    return(
        <>
            <div className="footer-container">
                <div className="about-list">
                    <img className='logo white-svg' src="./logo.svg" alt="Tractian" />
                    <li className='list-item'>Meet Tractian</li>
                    <li className='list-item'>Success Cases</li>
                    <li className='list-item'>Press</li>
                    <li className='list-item'>Privacy Policy</li>
                </div>
                
                <ListLinks title="Product" list={["Tractian Sensor", "Plataform", "Features", "Plans and prices"]} />
                <ListLinks title="Content" list={["Guides and Ebooks", "Checklists", "Intensivão", "ROI Calculator"]} />
                <ListLinks title="Contact Us" list={["Contact", "Refer and Win", "Schedule a demo", "Tractian LLC"]} />
            </div>
            <div className="bottom-links">
                <div className="social">
                    <i class="fa-brands fa-linkedin social-icon"></i>
                    <i class="fa-brands fa-facebook-square social-icon"></i>
                    <i class="fa-brands fa-instagram social-icon"></i>
                    <i class="fa-brands fa-youtube social-icon"></i>
                </div>
                <div className="middle">
                    <p>Terms of service</p>
                    <p>Privacy Police</p>
                    <p>Licenses</p>
                </div>
                <div className="credit">
                    <p>Created by Rodrigo Mayer.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;

function ListLinks(props) {
    const listNames = props.list;
    const listItems = listNames.map((listName) => <li className='list-item'>{listName}</li>);
    return(
        <div className="list-container">
            <p className="list-title">{props.title}</p>
            <ul>{listItems}</ul>
        </div>
    )
    
}