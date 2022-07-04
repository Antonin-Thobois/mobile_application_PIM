import React from "react"
import Logo from "../Logo"
import H2 from "../../atoms/H2"
import "./styles.css";

type Props = {}

const NavBar = (props: Props) => {
    return (
        <div className="navBar">
            <Logo/>
            <div>
                <H2 className="h2Style" text = "Un petit changement est mieux que pas de changement..."></H2>
                <H2 className="h2_bisStyle" text = "PRÊTS A RELEVER LE DEFI ???"></H2>
            </div>
        </div>
    )
}

export default NavBar
