import './Brands.css';

function Brands() {
    return (
        <>
        <div className="brands-container container">
            <div className="blur left"></div>
            <div className="blur right"></div>
            <div className="brands-wrapper">
                {/* <div className="blur left"></div>
                <div className="blur right"></div> */}
                <div className="brand-logo"><img src="./logo-tigre-2.png" alt="Brand Logo" className='logo-img'/></div>
                <div className="brand-logo"><img src="./logo-danone-2.png" alt="Brand Logo" className='logo-img'/></div>
                <div className="brand-logo"><img src="./logo-embraer.png" alt="Brand Logo" className='logo-img'/></div>
                <div className="brand-logo"><img src="./logo-john-deere.png" alt="Brand Logo" className='logo-img'/></div>
                <div className="brand-logo"><img src="./logo-pirelli-2.png" alt="Brand Logo" className='logo-img'/></div>
                <div className="brand-logo"><img src="./logo-suzano-2.png" alt="Brand Logo" className='logo-img'/></div>
                <div className="brand-logo"><img src="./logo-arcelor-2.png" alt="Brand Logo" className='logo-img'/></div>
                <div className="brand-logo"><img src="./logo-air-liquide-2.png" alt="Brand Logo" className='logo-img'/></div>
            </div>
        </div>
        </>
    )
}

export default Brands;