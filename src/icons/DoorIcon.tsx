import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function DoorIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 53 53"
      width={props.size}
      height={props.size}
    >
      <Path
        fill={props.color}
        stroke={props.color}
        d="M45,51V1c0-0.122-0.029-0.239-0.071-0.351c-0.008-0.02-0.013-0.04-0.022-0.06c-0.046-0.101-0.108-0.192-0.185-0.274
        c-0.016-0.016-0.032-0.03-0.049-0.046c-0.029-0.026-0.054-0.056-0.085-0.079c-0.059-0.043-0.122-0.076-0.188-0.105
        c-0.005-0.002-0.009-0.006-0.014-0.008c-0.111-0.046-0.229-0.066-0.349-0.07C44.024,0.007,44.013,0,44,0H10C9.447,0,9,0.448,9,1
        v50H4v2h6h34h5v-2H45z M25,47.18V8.227l18-5.85V50.78L25,47.18z M11,2h26.687L23.69,6.549C23.279,6.683,23,7.067,23,7.5V48
        c0,0.477,0.337,0.887,0.804,0.98L33.901,51H11V2z"
      />
    </Svg>
  )
}

export default DoorIcon