import React from 'react';
import image from '../images/generating.gif';

export default function Callback() {

    return(
        <div className="Main">
            <img src={image} alt="Loading.." />
        </div>
    )
}
