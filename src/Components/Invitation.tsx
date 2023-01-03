import React from 'react'
import fani from '../images/bride1.png'
import syukron from '../images/bride2.png'

// @ts-ignore
import {Fade} from 'react-awesome-reveal'

const Invitation = () => {
    return (
        <div>
            <Fade triggerOnce cascade delay={1500} direction='up'>
                <h1 className='title-text'>We Are Getting Married</h1>
                <h3 className='fill-text'>
                    Dengan Memohon Rahmat dan Ridho Allah SWT, Kami Bermaksud Menyelenggarakan Pernikahan Kami :
                </h3>
            </Fade>
            <div className='bride-image-container'>
                
                <Fade triggerOnce delay={1500} direction='left'>         
                    <div>
                        <img className='bride-image' src={fani} />
                        <h1 style={{fontSize:36}} className='bride-name'>Fani Maharani</h1>
                        <h2 className='fill-text'>Putri dari : </h2>
                        <h1 className='bride-name'>Bapak Nurdin & Ibu Maryanah</h1>
                    </div>
                </Fade>
                <div className='bride-image-separator'></div>
                <Fade triggerOnce delay={2000} direction='right'>  
                    <div>
                        <img className='bride-image' src={syukron} />
                        <h1 style={{fontSize:36}} className='bride-name'>Syukron Muttaqien</h1>
                        <h2 className='fill-text' >Putra dari : </h2>
                        <h1 className='bride-name'>Bapak Suwardi Saidi & Ibu Nurhayati</h1>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Invitation