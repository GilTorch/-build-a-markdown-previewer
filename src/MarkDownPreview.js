import React from 'react';

const  MarkDownPreview = (props) => {
        return (
            <div className="marked-down-preview">
                   <p dangerouslySetInnerHTML={{"__html":props.markedDownText || props.defaultValue}}>
                   </p> 
            </div>
        )
}



export default MarkDownPreview;