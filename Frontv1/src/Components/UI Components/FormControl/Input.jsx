import React from 'react'

const Input = (props) => {
    return (
        <>
        
      <div className="mb-3">
        <label className="form-label">{props.label}</label>
        <input
          type={props.type}
          className={props.className}
        
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
     
        </div>
        </>
    )
}

export default Input

