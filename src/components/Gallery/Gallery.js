import React from 'react';

const Gallery = (props) => {
    const {img} = props.photo;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Gallery;