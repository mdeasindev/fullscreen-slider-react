import React from 'react';

const Slider = ({src}) => {
    return (
        <div className="sliderItem" style={{backgroundImage: "url('"+ src.path +"')"}}>
            <h1>{src.title}</h1>
        </div>
    );
}

export default Slider;