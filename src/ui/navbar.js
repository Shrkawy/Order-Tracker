import Logo from "../images/logo.svg";
import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light px-3">
            <a className="navbar-brand" href="/">
                <img style={{width: '144px'}} src={Logo} alt="logo" className='img-fluid'/>
            </a>
        </nav>
    )
}

export default Navbar;