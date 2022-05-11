import './Brands.css';

function Brands() {
    return (
        <>
        <div className="brands-container container">
            {/* <div className="blur left"></div>
            <div className="blur right"></div> */}
            <div className="brand-logo"><img src="./logo-embraer.png" alt="Brand Logo" className='logo-img'/></div>
            <div className="brand-logo"><img src="./logo-john-deere.png" alt="Brand Logo" className='logo-img'/></div>
            <div className="brand-logo"><img src="./logo-pirelli-2.png" alt="Brand Logo" className='logo-img'/></div>
            <div className="brand-logo"><img src="./logo-suzano-2.png" alt="Brand Logo" className='logo-img'/></div>
            <div className="brand-logo"><img src="./logo-arcelor-2.png" alt="Brand Logo" className='logo-img'/></div>
        </div>
        </>
    )
}

export default Brands;