import React from 'react';
import './Char.css'
const char = (props) => {

    return(
        <div className="box" onClick={props.delete}>
            {props.list}
        </div>
    )
}
export default char;