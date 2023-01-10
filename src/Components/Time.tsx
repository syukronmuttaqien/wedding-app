import React from "react";
import cincin from '../images/cincin.png';
import gate from '../images/gate.png';
import border from '../images/border.png';
import location from '../images/location-pin.png';
import BorderLine from "./BorderLine";

import {Fade} from 'react-awesome-reveal'


const Time = () => {
    return(
        <section>
            <Fade direction="up">
                <div className='wrapper-title-container' >
                    {/* <h1 > ----------</h1> */}
                    <h1 className='title-text title-container'>Events</h1>
                    {/* <h1 > ----------</h1> */}
                </div>
            </Fade>
            <div className="time-outer">
                    <div className="time-container">
                        <div className="time-border">
                            <Fade direction="up">
                                <img className="time-image" src= {cincin} alt="time-left-pic"/>
                                <h2 className="title-text">Akad Nikah</h2>
                                <img className="time-border-image" src= {border} alt="time-left-pic"/>
                                <h2 className="fill-text">Sabtu, 21 Januari 2023</h2>
                                <h2 className="fill-text">09.00 WIB - 11.00 WIB</h2>
                            </Fade>
                        </div> 
                        {/* <div className="time-divider"></div> */}
                        <div className="time-border">
                            <Fade direction="up">
                                <img className="time-image" src= {gate} alt="time-right-pic" />
                                <h2 className="title-text">Resepsi</h2>
                                <img className="time-border-image" src= {border} alt="time-right-pic" />
                                <h2 className="fill-text">Sabtu, 21 Januari 2023</h2>
                                <h2 className="fill-text">Sesi 1 : 12.00 WIB - 15.00 WIB
                                <br /> Sesi 2 : 15.00 WIB - 17.00 WIB
                                </h2>
                            </Fade>
                        </div> 
                    </div>
                    <Fade cascade direction="up">
                        <h2 className="fill-text">Villa Park Glenn
                            <br /> Jl. Cijeruk-Caringin Wr. Menteng, Kec. Cijeruk, Kabupaten Bogor, Jawa Barat 16740
                        </h2>
                        <br /> 
                        <a href="https://goo.gl/maps/PQFANFkvMMmT3CKS9"  target="_blank" className="button-time" rel="noreferrer">
                            <img className="icon" src = {location} alt="location-icon" />
                            Lihat Lokasi
                        </a>  
                    </Fade>
                    <br /><br />   <br /><br />  
            </div>
        </section>
        
        
    )
}

export default Time