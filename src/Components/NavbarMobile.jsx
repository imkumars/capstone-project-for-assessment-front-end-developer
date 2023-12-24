import React, {useState} from "react";
import HamburgerIcon from "../assets/icons/icon _hamburger_menu.png";
import CloseIcon from "../assets/icons/icon _close_menu.png";
import Logo from "../assets/Logo.svg";
import Basket from "../assets/icons/Basket.png";
import { useNavigate } from "react-router-dom";


function NavbarMobile(){

    const [openMenu, setOpenMenu] = useState(false);

    const handlehamburgerIcon = () => {
        setOpenMenu(!openMenu);
    }

    //redirect users to login first in order to access cart
    const navigate = useNavigate();
    const handleCartIcon = () => {

        navigate("/login");
    }


    return(
        <div className={`navbar-mobile ${openMenu ? "show-menu" : ""}`}>
            <button type="button" className="hamburger-icon primary-btn rounded-border-radius navbar-mobile-button" onClick={handlehamburgerIcon}>
                {
                    openMenu ?
                        <img src={CloseIcon} alt="Close-icon" />
                        :
                        <img src={HamburgerIcon} alt="Hamburger-icon" />
                }

            </button>
            <figure className="little-lemonn-logo">
                <img src={Logo} alt="Little-Lemon_logo"/>
            </figure>
            <button type="button" className="basket-icon primary-btn rounded-border-radius navbar-mobile-button" onClick={handleCartIcon}>
                <img src={Basket} alt="Basket-icon"/>
            </button>

        </div>
    );
}

export default NavbarMobile