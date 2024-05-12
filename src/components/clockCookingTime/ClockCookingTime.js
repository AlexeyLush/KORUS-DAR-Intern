import './ClockCookingTime.css'
import clock from '../../images/svg/clock.svg'

function ClockCookingTime({minutes}) {

    return (
        <div className="clock_cooking">
            <img alt="Clock SVG" className="clock" src={clock}/>
            <p className="time_of_cooking">{minutes} минут</p>
        </div>
    );

}

export default ClockCookingTime;