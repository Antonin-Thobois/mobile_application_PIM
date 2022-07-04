import React from "react"

type Props = {
    src : any
    alt : any
    className : any
}

const Image = (props : Props) => {
    return(
    <img src = {props.src} alt = {props.alt} className = {props.className}/>
    )
}

export default Image