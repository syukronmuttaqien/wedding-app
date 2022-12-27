import React from 'react'
import fani1 from '../images/Fani.png'
import syukron from '../images/syukron.png'

const Invitation = () => {
    return (
        <div>
            <h1 className='title-text'>We Are Getting Married</h1>
            <h3 className='fill-text'>
                Dengan Memohon Rahmat dan Ridho Allah SWT, Kami Bermaksud Menyelenggarakan Pernikahan Kami :
            </h3>
            <div className='bride-image-container'>              
                <div>
                    <img className='bride-image' src={fani1} />
                    <h1 style={{fontSize:48}}>Fani Maharani</h1>
                    <h2 className='fill-text'>Putri dari : </h2>
                    <h1>Bapak Nurdin & Ibu Maryanah</h1>
                </div>
                <div className='bride-image-separator'></div>
                <div>
                    <img className='bride-image' src={syukron} />
                    <h1 style={{fontSize:48}}>Syukron Muttaqien</h1>
                    <h2 className='fill-text'>Putra dari : </h2>
                    <h1>Bapak Suwardi Saidi & Ibu Nurhayati</h1>

                </div>
            </div>
        </div>
    )
}

export default Invitation