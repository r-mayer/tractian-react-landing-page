import MainButton from '../MainButton/MainButton';
import './ButtonArea.css'

function ButtonArea() {
    return(
        <div className="bottom-btn-area">
            <div className="letter-bg">
                <img src="./letter-T.svg" alt="bg-T" className='lt-bg' />
                <img src="./letter-N.svg" alt="bg-N" className='lt-bg' />
            </div>
            <MainButton size="big">Schedule a demo</MainButton>
            <p className='btn-customer'>Already a customer? <a href="http://localhost:3000/" className='link-customer'>Access here.</a></p>
        </div>
    )
}

export default ButtonArea;