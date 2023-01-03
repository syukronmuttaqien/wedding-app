import React from "react";
import cincin from '../images/cincin.png';
import gate from '../images/gate.png';
import border from '../images/border.png';
import location from '../images/location-pin.png';
import BorderLine from "./BorderLine";

import {Fade} from 'react-awesome-reveal'


const Time = () => {
    return(
        <div>
            <Fade direction="up">
                <BorderLine />
                <h1 className="title-text">Our Event Will Be Held At : </h1>
                <div className="time-outer">
                    <div className="time-container">
                        <div className="time-border">
                            <img className="time-image" src= {cincin} alt="time-left-pic"/>
                            <h2 className="title-text">Akad Nikah</h2>
                            <img className="time-border-image" src= {border} alt="time-left-pic"/>
                            <h2 className="fill-text">Sabtu, 21 Januari 2023</h2>
                            <h2 className="fill-text">09.00 Wib - 11.00 Wib</h2>
                        </div> 
                        {/* <div className="time-divider"></div> */}
                        <div className="time-border">
                            <img className="time-image" src= {gate} alt="time-right-pic" />
                            <h2 className="title-text">Resepsi</h2>
                            <img className="time-border-image" src= {border} alt="time-right-pic" />
                            <h2 className="fill-text">Sabtu, 21 Januari 2023</h2>
                            <h2 className="fill-text">Sesi 1 : 12.00 Wib - 15.00 Wib
                            <br /> Sesi 2 : 15.00 Wib - 17.00 Wib
                            </h2>
                        </div> 
                    </div>
                    <h2 className="fill-text">Villa Park Glenn
                        <br /> 7RV2+G74, Wr. Menteng, Kec. Cijeruk, Kabupaten Bogor, Jawa Barat 16740
                    </h2>
                    <br /> 
                    <a href="https://goo.gl/maps/PQFANFkvMMmT3CKS9"  target="_blank" className="button-time fill-text" rel="noreferrer">
                        <img className="icon" src = {location} alt="location-icon" />
                        Lihat Lokasi
                    </a>  
                    <br /><br />   <br /><br />  
                </div>
            </Fade>
        </div>
        
        
    )
}

export default Time