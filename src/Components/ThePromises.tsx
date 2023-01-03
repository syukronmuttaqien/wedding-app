import React from 'react';
import BorderLine from './BorderLine';

import {Fade} from 'react-awesome-reveal';

const ThePromises = () => {
    return (
        <div>
            <Fade triggerOnce cascade direction='up'>
                <h1 className='title-text'>The Promises</h1>
                <p className='fill-text'>“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia 
                    menciptakan untukmu pasangan-pasangan dari jenismu sendiri, 
                    supaya kamu cenderung dan merasa tenteram kepadanya,
                    dan dijadikan-Nya diantaramu rasa kasih dan sayang.
                    Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
                </p>
                <h5 className='fill-text'> (QS Ar-Rum : 21) </h5>
                <BorderLine />
            </Fade>
        </div>
    )
}

export default ThePromises