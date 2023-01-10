import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import amplop from '../images/amplop.png'
import photobride from '../images/photo6.jpg'


// import image1 from '../images/image1.jpg'
// import imageDummy from '../images/image-dummy.jpg'
import "./styles.scss";

type OurBoxProps = {
  name: string;
  onClickOpen: () => void;
};

export let height = 0;

const OurBox = (props: OurBoxProps) => {
  const { name, onClickOpen } = props;
  height = document.getElementById('ourbox-id')?.clientHeight || 0
    if (name === ''){
      return null
    }

    return (
      <>
        <h1 className="script-text mt-4">Dear,
          <b className="script-text"> {name}</b>
        </h1>
        <h1 className="bride-name mt-4">You Are Invited To Our Wedding</h1>
        <div id="ourbox-id" className="ourbox-container">
          <div>
            <div className='tape'></div>
            <div className="ourbox-image-frame">
              <img className='ourbox-image' src={photobride} />
              <p className="outbox-text-bottom bride-name">Fani & Syukron</p>
            </div>
          </div>
          {/* <div className='ourbox-name-box mt-4'>
            <span className="script-text fs-2">Kepada : 
              <b className="script-text fs-2"> {name}</b>
            </span>
            <button className="button-time mt-3" style={{width: 'auto'}} onClick={onClickOpen}>
              <img className="icon" style={{width:20}} src={amplop} />Buka Undangan
            </button>
          </div> */}
        </div>
        <button className="button-time mt-4 mb-4" style={{width: 'auto'}} onClick={onClickOpen}>
          <img className="icon" style={{width:20}} src={amplop} />Buka Undangan
        </button>
      </>
    )
};

export default React.memo(OurBox);
