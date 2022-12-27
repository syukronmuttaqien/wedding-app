import React from 'react';
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
            <h1 className='title-text'>Our Memories</h1>
            <h3 className='fill-text quotes'>
                &#8220; Berawal dari bercanda dan berakhir dengan rasa yang nyata &#8221;
            </h3>
            <div className='galery-container'>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo1} />
                </div>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo2} />
                </div>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo3} />
                </div>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo4} />
                </div>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo5} />
                </div>
                <div>
                    <div className='tape'></div>
                    <img className='galery-image frame-image' src={photo6} />
                </div>
            </div>   

            
        </div>
    )
}

export default Galery