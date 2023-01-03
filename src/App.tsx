/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import { animated, useSpring } from '@react-spring/web'
import './App.scss';
import OurBox, { DEFAULT_HEIGHT } from './Components/OurBox';
import RollWood from './Components/RollWood';
import ThePromises from './Components/ThePromises';
import Invitation from './Components/Invitation';
import Time from './Components/Time';
import Countdown from './Components/Countdown';
import Galery from './Components/Galery';
import BackgroundMusic from './Components/BackgroundMusic';
import Amplop from './Components/Amplop';
import Message from './Components/Message';

function App() {
  const appRef: any = useRef(null)
  const outerRef: any = useRef(null)
  const paperContentRef: any = useRef(null)
  const [viewHeight, setViewHeight] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShow, setShow] = useState(false)


  const setDefaultHeight = () => {
    console.log({heightBasic: document.getElementsByClassName('paper-content')[0].clientHeight})

    const height1 = document.getElementsByClassName('paper-content')[0].clientHeight

    setViewHeight(height1)
  }

  useEffect(() => {
    setDefaultHeight();
  }, [])

  const [heightAnimation, api] = useSpring(() => ({
    from: {
      height: DEFAULT_HEIGHT - 48 + "px", 
    },
  }), [])

  const [scaleAnimation, apiScale] = useSpring(() => ({
    from: {
      opacity: 1,
      display: "none",
      padding: "48px", 
    },
  }), [])

  const handleShow = () => {
    const duration = 1000;
    setShow(!isShow)
    setIsPlaying(true)
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
        opacity: 0,
        display: "none"
      },
      to: {
        opacity: 1,
        display: "block",
      }
    })

    setTimeout(() => {
      window.scrollTo({behavior: 'smooth', top: DEFAULT_HEIGHT})
    }, 100)
  }

  const handleHide = () => {
    const duration = 1000;
    setShow(!isShow)

    apiScale.start({
      config: {
        duration: 500
      },
      reverse: true,
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      onResolve: () => {
        apiScale.start({
          from: {
            display: "block",
          },
          to: {
            display: "none",
          },
        })

        api.start({
          immediate: true,
          to: {
            height: `${viewHeight}px`,
          },
          onResolve: () => {
            api.start({
              config: {
                duration,
              },
              immediate: false,
              from: {
                height: `${viewHeight}px`
              },
              to: {
                height: DEFAULT_HEIGHT - 48 + "px", 
              },
            })
          }
        })
      }
    })

    // setTimeout(() => {
    //   window.scrollTo({behavior: 'smooth', top: DEFAULT_HEIGHT})
    // }, 100)
  }

  console.log({outerRef})

  return (
    <div ref={outerRef} className='outer'>
      <BackgroundMusic isPlaying={isPlaying} />
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
                <Message />
                <Amplop onClickClose={handleHide} />
                
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
