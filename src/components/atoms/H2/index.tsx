import React from "react"

type Props = {
    text : any
    className : any
}

const H2 = (props : Props) => {
    return(
    <h2 className = {props.className}> {props.text} </h2>
    )
}

export default H2