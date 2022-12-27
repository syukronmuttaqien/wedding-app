/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import { animated, useSpring } from '@react-spring/web'
import './App.css';
import OurBox, { DEFAULT_HEIGHT } from './Components/OurBox';
import RollWood from './Components/RollWood';
import ThePromises from './Components/ThePromises';
import Invitation from './Components/Invitation';

function App() {
  const appRef: any = useRef(null)
  const outerRef: any = useRef(null)
  const paperContentRef: any = useRef(null)
  const [viewHeight, setViewHeight] = useState(0);

  const setDefaultHeight = () => {
    console.log({height: document.getElementsByClassName('paper-content')[0].clientHeight})
    setViewHeight(document.getElementsByClassName('paper-content')[0].clientHeight)
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
    const duration = 1500;
    setShow(!isShow)
    api.start({
      config: {
        duration,
      },
      to: {
        height: `${viewHeight}px`,
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
      window.scrollTo({behavior: 'smooth', top: DEFAULT_HEIGHT + 200})
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
        <animated.div ref={appRef} className="App">
          <animated.div 
            ref={paperContentRef}
            className="paper-content"
            style={viewHeight !== 0 ? {...heightAnimation} : {}}
            >
            <center>
              <OurBox width={outerRef?.current?.clientWidth} name='Syukron' onClickOpen={handleShow} />
              <animated.div style={viewHeight !== 0 ? {...scaleAnimation} : {}}>
                <ThePromises />
                <Invitation />

                <ThePromises />

                <ThePromises />

                <ThePromises />
              </ animated.div>
            </center>
          </animated.div>
        </animated.div>
      <RollWood />
    </div>
  );
}

export default App;
