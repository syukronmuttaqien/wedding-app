import React from 'react'

// import image1 from '../images/image1.jpg'
// import imageDummy from '../images/image-dummy.jpg'
import './styles.css'

type OurBoxProps = {
    name: string
    onClickOpen: () => void
}

const OurBox = (props: OurBoxProps) => {
    const { name, onClickOpen } = props;

    return (
        <div className="ourbox-outer-container">
            <div className="ourbox-container">
                {/* <img src={image1} className='ourbox-image' alt='Fani & Syukron' /> */}
                <div className='ourbox-name-box'>
                    <h3 className="our-name-text">Fani & Syukron</h3>
                    <p className='our-name-for'>Kepada Yth</p>
                    <b className='our-guest-name'>{name}</b>
                    <button onClick={onClickOpen}>Buka</button>
                </div>
            </div>
        </div>
    )
}

export default OurBox