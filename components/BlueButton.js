import React from 'react';

const BlueButton = ({title, onClick}) => {
    return (
        <button style={{backgroundColor: 'blue'}} onClick={onClick}>{title}</button>
    )
};

export default BlueButton;
