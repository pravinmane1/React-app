import React, { Component } from 'react'
import  './App.css'
class CustomInput extends Component {


    constructor(props) {
        super(props)
    }
    
    render() {
        const { props } = this;

        if (props.type == 'textArea') {
            return (
                <div>
                    <label>{props.label}</label>
                    <textarea />
                </div>
            )
        }
        else if (props.type == 'dropDown') {
            return (
            <div>
                <label style='App-link'>{props.label}</label>
                <select> {props.children}</select>
            </div>
            )
        }

        

        return (
            <div>
                <label>{props.label}</label>
                <input type={props.type} />
            </div>
        )
    }
}

export default CustomInput
