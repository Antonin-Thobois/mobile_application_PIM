import logo from "../../../../assets/logo.png";
import { Image } from "../../atoms";
import styles from "./styles.css"

type Props = { 
}

const Logo = (props : Props) => {
    return (
    <Image
        src = {logo} alt = "Logo Application" 
    />
    )
}

export default Logo