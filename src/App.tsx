/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import { animated, useSpring } from '@react-spring/web'
import './App.scss';
import OurBox, { height as ourBoxHeight } from './Components/OurBox';
import RollWood from './Components/RollWood';
import ThePromises from './Components/ThePromises';
import Invitation from './Components/Invitation';
import Time from './Components/Time';
import Countdown from './Components/Countdown';
import Galery from './Components/Galery';
import BackgroundMusic, { MusicTrigger } from './Components/BackgroundMusic';
import Amplop from './Components/Amplop';
import Message from './Components/Message';

import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://wedding-app-ff2db-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
const { innerWidth } = window;
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, p) => searchParams.get(p as any),
});

function App() {
  const appRef: any = useRef(null)
  const outerRef: any = useRef(null)
  const ourBoxRef = useRef<any>(null)
  const paperContentRef: any = useRef(null)
  const [viewHeight, setViewHeight] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShow, setShow] = useState(false)
  const [DEFAULT_HEIGHT, SET_DEFAULT_HEIGHT] = useState<any>(380)
  const [forName, setForName] = useState('');
  // const dimensions = useWindowDimensions()
  // console.log({dimensions})

  // @ts-ignore


  const setDefaultHeight = () => {
    console.log({heightBasic: document.getElementsByClassName('paper-content')[0].clientHeight})

    const height1 = document.getElementsByClassName('paper-content')[0].clientHeight

    setViewHeight(height1)
  }

  useEffect(() => {
    setDefaultHeight();
    // @ts-ignore
    const forName = params?.for || ''
    if (forName !== '') {
      setForName(forName)
    }
    // SET_DEFAULT_HEIGHT(ourBoxRef)
  }, [])

  useEffect(() => {

    if (innerWidth <= 280) {
      SET_DEFAULT_HEIGHT(410)
    }

    if (innerWidth > 280 && innerWidth <= 320) {
      SET_DEFAULT_HEIGHT(385)
    }
    
    if (innerWidth > 320 && innerWidth < 401) {
      SET_DEFAULT_HEIGHT(445)
    }

    if (innerWidth >= 401 && innerWidth <= 800) {
      SET_DEFAULT_HEIGHT(450)
    }

    if (innerWidth > 800) {
      SET_DEFAULT_HEIGHT(390)
    }
  }, [])


  const [heightAnimation, api] = useSpring(() => ({
    from: {
      // height: DEFAULT_HEIGHT - 48 + "px", 
      // height: ourBoxRef?.current?.clientHeight + 'px', 
    },
  }), [ourBoxRef])

  const [scaleAnimation, apiScale] = useSpring(() => ({
    from: {
      opacity: 1,
      display: "none",
    },
  }), [])

  const handleShow = () => {
    const duration = 1000;
    setShow(true)
    setIsPlaying(true)
    api.start({
      config: {
        duration,
      },
      from: {
        height: DEFAULT_HEIGHT + 'px',
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
    setShow(false)
    setIsPlaying(false)

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
                height: DEFAULT_HEIGHT + "px", 
              },
            })
          }
        })
      }
    })
  }

  return (
    <>
    <div ref={outerRef} className='outer'>
      {isShow && (
        <MusicTrigger isPlaying={isPlaying} onChangeStatus={() => setIsPlaying(!isPlaying)} />
      )}
      <BackgroundMusic onFinishedPlaying={() => setIsPlaying(false)} isPlaying={isPlaying} />
      <RollWood />
        <animated.div ref={appRef} className="all-container">
          <div className='container-left' />
          <animated.div 
            ref={paperContentRef}
            className="paper-content"
            style={viewHeight !== 0 ? {...heightAnimation} : {}}
            >
            <center>
              <OurBox name={forName} onClickOpen={handleShow} />
              <animated.div style={viewHeight !== 0 ? {...scaleAnimation} : {}}>
                <ThePromises />
                <Invitation />
                <Time />
                <Countdown />
                <Galery />
                <Message database={db} />
                <Amplop onClickClose={handleHide} />
            </animated.div> 
            </center>
          </animated.div>
          <div className='container-right' />
        </animated.div>
      <RollWood />
    </div>
    </>
  );
}

export default App;
