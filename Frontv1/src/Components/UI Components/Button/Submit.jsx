import React from 'react'

const Submit = (props) => {
    return (
        
              <>
            <button type={props.type}  onClick={props.onClick} className={props.className}>{props.title}</button>
        </>
        
    )
}

export default Submit
