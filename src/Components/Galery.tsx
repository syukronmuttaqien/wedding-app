import React from 'react';
import { Fade } from 'react-awesome-reveal';
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
import photo4 from '../images/photo4.jpg'
import photo5 from '../images/photo5.jpg'
import photo6 from '../images/photo6.jpg'
import BorderLine from './BorderLine';


const Galery = () => {
    return (
        <div>
            <Fade cascade direction='up'>
                <h1 className='title-text'>Our Memories</h1>
                <h3 className='fill-text quotes'>
                    <Fade duration={200} cascade>&#8220; Berawal dari bercanda dan berakhir dengan rasa yang nyata &#8221;</Fade>
                </h3>
            </Fade>
            <div className='galery-container'>
                <Fade direction='up'>
                    <div>
                        <div className='tape'></div>
                        <img className='galery-image frame-image' src={photo1} />
                    </div>
                </Fade>
                <Fade direction='up'>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo2} />
                </div>
                </Fade>
                <Fade direction='up'>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo3} />
                </div>
                </Fade>

                <Fade direction='up'>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo4} />
                </div>
                </Fade>

                <Fade direction='up'>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo5} />
                </div>
                </Fade>

                <Fade direction='up'>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo6} />
                </div>
                </Fade>
            </div>   
        </div>
    )
}

export default Galery