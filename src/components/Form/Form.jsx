import './Form.css';

function Form() {
    return(
        <div className="form-container">
            <h2 className="form-title">Let's partner up</h2>
            <p className="form-desc">Lets level up your industry.</p>
            <form className='form'>
                <input type="text" placeholder="Your name" class="input" />
                <input type="text" placeholder="Job title" class="input" />
                <input type="text" placeholder="Your corporate email" class="input" />
                <input type="text" placeholder="Phone number" class="input" />
                <p className='form-question'>What interested you most about our solutions?</p>
                <ul>
                    <li>
                        <input type="radio" name="interest" id="real-time" />
                        <label for="real-time">Real Time Monitoring and IoT Sensors</label>
                        <div className="check"></div>
                    </li>
                    <li>
                        <input type="radio" name="interest" id="ccms" />
                        <label for="ccms">CCMS and EAM</label>
                        <div className="check"></div>
                    </li>
                    <li>
                        <input type="radio" name="interest" id="all" />
                        <label for="all">All solutions</label>
                        <div className="check"></div>
                    </li>
                </ul>
            </form>
        </div>  
    )
}

export default Form;