import logo from "../../../../assets/logo.png";
import { Image } from "../../atoms";
import "./styles.css";

type Props = { 
}

const Logo = (props : Props) => {
    return (
    <Image
        src = {logo} alt = "Logo Application" className="logoStyle"
    />
    )
}

export default Logo