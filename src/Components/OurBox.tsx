import React from "react";

// import image1 from '../images/image1.jpg'
// import imageDummy from '../images/image-dummy.jpg'
import "./styles.css";

export const DEFAULT_HEIGHT = 300;

type OurBoxProps = {
    width: number;
  name: string;
  onClickOpen: () => void;
};

const OurBox = (props: OurBoxProps) => {
  const { name, onClickOpen, width } = props;

  return (
    <div className='ourbox-name-box' style={{
        width: width ? width - 460 : 0,
        height: DEFAULT_HEIGHT,
      }}>
      <p className="our-name-for">Kepada Yth</p>
      <b className="our-guest-name">{name}</b>
      <br />
      <button onClick={onClickOpen}>Buka</button>
    </div>
  );
};

export default OurBox;
