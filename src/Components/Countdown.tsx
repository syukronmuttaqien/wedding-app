import React, {useState, useEffect} from 'react'
import BorderLine from './BorderLine'
import kalender from '../images/kalender.png'


const Countdown = () => {
    const [countdownDate, setCountdownDate] = useState(new Date('01/21/2023').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
        const currentTime = new Date().getTime();

        const distanceToDate = countdownDate - currentTime;

        let days: any = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours: any = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes: any = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds: any = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours, minutes, seconds });
        }
    };
    return (
        <div>
            <h1 className='title-text'>Countdown To Our Next Journey</h1>
            <h3 className='fill-text'>
                Waktu terus berjalan, kami tidak sabar menunggu perjalanan baru kamu akan dimulai,
                untuk itu mari hitung mundur bersama untuk menyambut perjalanan baru kami di mulai. 
                
            </h3>
            <div className='countdown-outer-container'>
                <div className='countdown-container'>
                    <div className='time-section'>
                        <h1 className='time'>{state.days || '0'}</h1>
                        <h3 className="title-text">Days</h3>
                    </div>
                    <div className='countdown-divider' />
                    <div className='time-section'>
                        <h1 className='time'>{state.hours || '00'}</h1>
                        <h3 className="title-text">Hours</h3>
                    </div>
                    <div className='countdown-divider' />
                    <div className='time-section'>
                        <h1 className='time'>{state.minutes || '00'}</h1>
                        <h3 className="title-text">Minutes</h3>
                    </div>
                    <div className='countdown-divider' />
                    <div className='time-section'>
                        <h1 className='time'>{state.seconds || '00'}</h1>
                        <h3 className="title-text">Seconds</h3>
                    </div>
                </div>
                <a href="" style={{width:"48%"}} target="_blank" className="button-time fill-text">
                    <img className="icon" src = {kalender} />
                    Tambahkan Pengingat
                </a>

            </div>
          
        </div>
           
    )

}
export default Countdown


  

    



