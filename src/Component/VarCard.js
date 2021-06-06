import React from 'react'

function VarCard(props) {
    return (
        <div class="card" style={{ width: "30rem" }}>
            <p>{props.title}</p>
            <p>name: {props.name}</p>
            <p>surname: {props.surname}</p>
            <p>gender: {props.gender}</p>
            <p>title: {props.title}</p>
            <div class="row ">
                {props.children}
            </div>
            <p>{props.info}</p>
        </div>
    )
}

export default VarCard
