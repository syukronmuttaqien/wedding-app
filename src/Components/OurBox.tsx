import React from "react";
import amplop from '../images/amplop.png'
import photobride from '../images/photo6.jpg'


// import image1 from '../images/image1.jpg'
// import imageDummy from '../images/image-dummy.jpg'
import "./styles.scss";

export const DEFAULT_HEIGHT = 380;

type OurBoxProps = {
  name: string;
  onClickOpen: () => void;
};

const OurBox = (props: OurBoxProps) => {
  const { name, onClickOpen } = props;

  return (
    <><h1 className="bride-name mt-4">You Are Invited To Our Wedding</h1>
  
    <div className="ourbox-container">
      <div>
        <div className='tape'></div>
        <img className='galery-image frame-image' src={photobride} />
      </div>
      <div className='ourbox-name-box'>
      <p style={{fontSize:20 }} className="title-text">Kepada : 
          <b className="fill-text"> {name}</b>
        </p>
        <button className="button-time" style={{width: 'auto'}} onClick={onClickOpen}>
          <img className="icon" style={{width:20}} src={amplop} />Buka Undangan
        </button>
    </div>

    </div>
    </>
  );
};

export default OurBox;
