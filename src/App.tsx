/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import { animated, useSpring } from '@react-spring/web'
import './App.css';
import OurBox, { DEFAULT_HEIGHT } from './Components/OurBox';
import RollWood from './Components/RollWood';
import ThePromises from './Components/ThePromises';
import Invitation from './Components/Invitation';
import Time from './Components/Time';
import Countdown from './Components/Countdown';
import Galery from './Components/Galery';
import { useMeasure } from '@reactivers/hooks';

function App() {
  const appRef: any = useRef(null)
  const outerRef: any = useRef(null)
  const paperContentRef: any = useRef(null)
  const [viewHeight, setViewHeight] = useState(0);


  const setDefaultHeight = () => {
    console.log({heightBasic: document.getElementsByClassName('paper-content')[0].clientHeight})

    const height1 = document.getElementsByClassName('paper-content')[0].clientHeight

    setViewHeight(height1)
  }

  useEffect(() => {
    setDefaultHeight();
  }, [])


  const [isShow, setShow] = useState(false)
  const [heightAnimation, api] = useSpring(() => ({
    from: {
      height: DEFAULT_HEIGHT - 48 + "px", 
    },
  }), [viewHeight])
  const [scaleAnimation, apiScale] = useSpring(() => ({
    from: {
      display: "none",
      padding: "48px", 
    },
  }), [viewHeight])

  const handleShow = () => {
    const duration = 1000;
    setShow(!isShow)
    api.start({
      config: {
        duration,
      },
      to: {
        height: `${viewHeight}px`,
      },
      onResolve: () => {
        api.start({
          to: {
            height: "auto",
          }
        })
      }
    })

    apiScale.start({
      config: {
        duration: 500
      },
      from: {
        // padding: "0px",
      },
      to: {
        display: "block",
        padding: "48px",
      }
    })

    setTimeout(() => {
      window.scrollTo({behavior: 'smooth', top: DEFAULT_HEIGHT})
    }, 100)
  }

  console.log({outerRef})

  return (
    <div ref={outerRef} className='outer'>
      {/* {!isShow && (
        <div className='inv-card'>
          <p>The Wedding of Fani & Syukron</p>
          <p>Kepada Yth.</p>
          <p>Syukron</p>
          <button onClick={handleShow}>Buka Undangan</button>
        </div>
       )}  */}
      <RollWood />
        <animated.div ref={appRef} className="all-container">
          <div className='container-left' />
          <animated.div 
            ref={paperContentRef}
            className="paper-content"
            style={viewHeight !== 0 ? {...heightAnimation} : {}}
            >
            <center>
              <OurBox name='Syukron' onClickOpen={handleShow} />
              <animated.div style={viewHeight !== 0 ? {...scaleAnimation} : {}}>
                <ThePromises />
                <Invitation />
                <Time />
                <Countdown />
                <Galery />
            </animated.div> 
            </center>
          </animated.div>
          <div className='container-right' />
        </animated.div>
      <RollWood />
    </div>
  );
}

export default App;
