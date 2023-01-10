/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react'
import BorderLine from './BorderLine'
import kalender from '../images/kalender.png'

import {Fade} from 'react-awesome-reveal';


const calendarSection1 = 'https://www.google.com/calendar/render?action=TEMPLATE&text=Fani+and+Syukron+Wedding&location=Villa+Park+Glen&dates=20230121T040000Z%2F20230121T100000Z'

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
        } 
        if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } 
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours, minutes, seconds });
        }
    };
    return (
        <section>
            <Fade direction='up'>
                 <div className='wrapper-title-container' >
                    {/* <h1 > ----------</h1> */}
                    <h1 className='title-text title-container'>Countdown To Our Next Journey</h1>
                    {/* <h1 > ----------</h1> */}
                </div>
                <br/>
                <h6 className='fill-text'>
                    Waktu terus berjalan, kami tidak sabar menunggu perjalanan baru kami akan dimulai,
                    untuk itu mari hitung mundur bersama untuk menyambut perjalanan baru kami di mulai. 
                    
                </h6>
                <div className='countdown-outer-container'>
                    <div className='countdown-container'>
                        <div className='time-section'>
                            <h1 className='time'>{state.days || '0'}</h1>
                            <h3 className="title-text">Days</h3>
                        </div>
                        <div className='countdown-divider'><h3> : </h3></div>
                        <div className='time-section'>
                            <h1 className='time'>{state.hours || '00'}</h1>
                            <h3 className="title-text">Hours</h3>
                        </div>
                        <div className='countdown-divider'><h3> : </h3></div>
                        <div className='time-section'>
                            <h1 className='time'>{state.minutes || '00'}</h1>
                            <h3 className="title-text">Minutes</h3>
                        </div>
                        <div className='countdown-divider'><h3> : </h3></div>
                        <div className='time-section'>
                            <h1 className='time'>{state.seconds || '00'}</h1>
                            <h3 className="title-text">Seconds</h3>
                        </div>
                    </div>
                    <a href={calendarSection1} target="_blank" className="button-time width-flexible" rel="noreferrer">
                        <img className="icon" src = {kalender} />
                        Tambahkan Pengingat
                    </a>
                    {/* <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NTBvMHEwdTJ0dHJnMzRlbWxiczIyb2N1ZGsgc3l1a3Jvbm11dHRhcWllbjc0QG0&amp;tmsrc=syukronmuttaqien74%40gmail.com">
                        <img src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif" />
                    </a> */}

                </div>
            </Fade>
        </section>
           
    )

}
export default React.memo(Countdown)


  

    



