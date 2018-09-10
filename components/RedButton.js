import React from 'react';

const RedButton = ({title, onClick}) => {
    return (
        <button style={{backgroundColor: 'red'}} onClick={onClick}>{title}</button>
    )
};

export default RedButton;
