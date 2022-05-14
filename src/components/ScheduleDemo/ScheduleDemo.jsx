import Form from '../Form/Form';
import MainButton from '../MainButton/MainButton';
import './ScheduleDemo.css';

function ScheduleDemo() {
    return (
        <div className="schedule-demo-container container">
            <div className="schedule-demo-wrapper">
                <div className="form-wrapper">
                    <Form />
                    <MainButton>Send</MainButton>
                </div>
                <div className="schedule-hero-wrapper">
                    <p>title</p>
                    <p>image bacnkground</p>
                    <p>logo</p>
                </div>
            </div>
        </div>
    )
}

export default ScheduleDemo;