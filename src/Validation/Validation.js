import React from 'react';
const validation = (props) => {
    let text=null;
    if(props.inputLength<=5){
        text = <p>Text too short!!</p>
    }else {
        text = <p>Text too long!!</p>
    }
    return(
        <div>
            <p>Length of the Text:-{props.inputLength} </p>
            {text}
        </div>
    )
}
export default validation;