import React from 'react';
import BorderLine from './BorderLine';

import {Fade} from 'react-awesome-reveal';

const ThePromises = () => {
    return (
        <section>
            <Fade triggerOnce cascade direction='up'>
                 <div className='wrapper-title-container' >
                    {/* <h1 > -----</h1> */}
                    <h1 className='title-text title-container'>The Promises</h1>
                    {/* <h1 > ----------</h1> */}
                </div>
                <h6 className='fill-text mt-2 mb-4'>“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia 
                    menciptakan untukmu pasangan-pasangan dari jenismu sendiri, 
                    supaya kamu cenderung dan merasa tenteram kepadanya,
                    dan dijadikan-Nya diantaramu rasa kasih dan sayang.
                    Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
                </h6>
                <h5 className='fill-text mt-4'> (QS Ar-Rum : 21) </h5>
                <BorderLine />
            </Fade>
        </section>
    )
}

export default ThePromises