import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import OurBox from './Components/OurBox';
import RollWood from './Components/RollWood';
import ThePromises from './Components/ThePromises';
import Invitation from './Components/Invitation';

function App() {
  const [isShow, setShow] = useState(false)

  return (
    <div className='outer'>
      {!isShow && (
        <div className='inv-card'>
          <p>The Wedding of Fani & Syukron</p>
          <p>Kepada Yth.</p>
          <p>Syukron</p>
          <button onClick={() => setShow(true)}>Buka Undangan</button>
        </div>
      )}
      <RollWood />
      <div className="App">
      {isShow && (
        <div className='paper-content'>
          <center>
            {/* {!isShow && (
              <OurBox onClickOpen={() => setShow(true)} name='Syukron' />
            )} */}
            
                <ThePromises />
                <Invitation />
              
          </center>
        </div>
      )}
      </div>
      <RollWood />
    </div>
  );
}

export default App;
