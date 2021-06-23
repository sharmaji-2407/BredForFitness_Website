import React from 'react';

const Button = ({title,val}) => {
    return <button onClick={val}>{title}</button>
        
}

export default Button;
