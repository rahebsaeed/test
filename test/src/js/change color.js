import React from 'react';
const changeColor = (color) => {
    document.documentElement.style.setProperty('--main-color', color);
};
export default changeColor;