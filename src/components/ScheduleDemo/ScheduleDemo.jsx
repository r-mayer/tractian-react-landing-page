import Form from '../Form/Form';
import MainButton from '../MainButton/MainButton';
import './ScheduleDemo.css';

function ScheduleDemo() {
    return (
        <div className="schedule-demo-container container">
            <div className="schedule-demo-wrapper">
                <div className="form-wrapper">
                    <Form />
                    <MainButton>Send request</MainButton>
                </div>
                <div className="schedule-hero-wrapper">
                    <p className="schedule-quote-title">Revolutionizing the lives of maintenance professionals</p>
                    <p className="schedule-quote">"With the best technology, we've turned a time-consuming and complex process into a simple and smart experience."</p>
                    <img src="./bg-form.png" alt="Form Background" className='bg-form'/>
                    <img src="./logo.svg" alt="Logo" className='logo-form' />
                </div>
            </div>
        </div>
    )
}

export default ScheduleDemo;