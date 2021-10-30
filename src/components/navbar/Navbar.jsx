import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import Logo from "../../image/Logo.png"

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand-container">
                    <img className="logo" src={Logo} alt="" />
                    <a class="navbar-brand" href="#">CREDIOMETER</a>
                </div>
                <div className="navbar-right-container">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active nav-item-setup">
                                <a class="nav-link" href="#">Setup Guide</a>
                            </li>
                            <li class="nav-item nav-item-notification">
                                <i class="fas fa-bell"></i>
                            </li>
                            <li class="nav-item nav-item-support">
                                <i class="fas fa-question-circle"></i>
                            </li>
                            <li class="nav-item dropdown nav-item-katy">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Katy's Kitchen
                                </a>
                            </li>
                        </ul>
    
                    </div>
                </div>    
            </nav>
        </div>
    )
}

export default Navbar;
