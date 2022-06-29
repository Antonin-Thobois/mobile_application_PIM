import React from "react"

type Props = {
    src : undefined
    alt : any
    style? : undefined
}

const Image = (props : Props) => {
    return(
    <div>
        <img src = {props.src} alt = {props.alt} style = {props.style}/>
    </div>
    )
}

export default Image