import React from "react";
import message from '../images/message.png'

// import image1 from '../images/image1.jpg'
// import imageDummy from '../images/image-dummy.jpg'
import "./styles.scss";

export const DEFAULT_HEIGHT = 300;

type OurBoxProps = {
  name: string;
  onClickOpen: () => void;
};

const OurBox = (props: OurBoxProps) => {
  const { name, onClickOpen } = props;

  return (
    <div className='ourbox-name-box'>
      <p className="our-name-for">Kepada Yth</p>
      <b className="our-guest-name">{name}</b>
      <br />
      <button className="button-time" style={{width: 'auto'}} onClick={onClickOpen}>
        <img className="icon" style={{width:20}} src={message} />Buka Undangan
      </button>
    </div>
  );
};

export default OurBox;
