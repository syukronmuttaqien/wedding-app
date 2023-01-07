import React from 'react';
import useWindowDimensions from '../Hooks/useWindowDimensions';

const BorderLine = () => {
    const dimensions = useWindowDimensions()

    if (dimensions.width >= 800) {
        return (
            <h5>-----------------------------------------------------------------</h5>
        )
    }

    if (dimensions.width < 800 && dimensions.width >= 500) {
        return (
            <h5>------------------------------------------------</h5>
        )
    }

    return (
        <h2>---------------------------------------------</h2>
    )
}

export default BorderLine