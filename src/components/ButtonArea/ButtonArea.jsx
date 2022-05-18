import MainButton from '../MainButton/MainButton';
import './ButtonArea.css'

function ButtonArea(props) {
    return(
        <div className="bottom-btn-area">
            <div className="letter-bg">
                <img src="./letter-T.svg" alt="bg-T" className='lt-bg' />
                <img src="./letter-N.svg" alt="bg-N" className='lt-bg' />
            </div>
            <MainButton size="big">Schedule a demo</MainButton>
            <p className={props.isDark ? 'btn-customer' : 'hide'}>Already a customer? <a href="#/" className={props.isDark ? 'link-customer' : 'hide'}>Access here.</a></p>
        </div>
    )
}

export default ButtonArea;