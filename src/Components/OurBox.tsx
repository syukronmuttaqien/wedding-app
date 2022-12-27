import React from "react";

// import image1 from '../images/image1.jpg'
// import imageDummy from '../images/image-dummy.jpg'
import "./styles.css";

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
      <button className="button-time" style={{width: 'auto'}} onClick={onClickOpen}>Buka</button>
    </div>
  );
};

export default OurBox;
