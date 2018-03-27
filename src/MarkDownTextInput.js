import React from 'react';

const MarkDownTextInput = (props) => {
    return (
        <textarea className="mark-down-text-input" onChange={props.handleChange} value={props.defaultValue}>
        </textarea>
    )
}


export default MarkDownTextInput;