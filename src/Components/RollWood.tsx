import React from 'react'
import roll from '../images/roll.png'
import handleLeft from '../images/handle.png'
import handleRight from '../images/handle-right.png'
import './styles.css'

const RollWood = () => {
    return (
        <div className='rollbar-container'>
            <img className="handle-left" src={handleLeft} alt="handle" />
            <img className="rollbar" src={roll} alt="handle" />
            <img className="handle-right" src={handleRight} alt="handle"/>
        </div>
    )
}

export default RollWood;