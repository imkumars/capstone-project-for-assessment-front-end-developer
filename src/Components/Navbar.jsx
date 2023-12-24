
import Logo from "../assets/Logo.svg";
import NavLinks from "./Utility/NavLinks";

import React, {useState, useEffect} from "react";

import NavbarMobile from "./NavbarMobile";


function Navbar(){

    const [screenWidthValue, setScreenWidthValue] = useState(
        {
            screenWidth: window.innerWidth,
            isMobileScreen: false
        });

    const handleScreenChange = () => {
        const newScreenSize = window.innerWidth;

        setScreenWidthValue(preVal => ({
            ...preVal, screenWidth: newScreenSize
        }));
    }

    useEffect(() => {
        window.addEventListener("resize", handleScreenChange);

        return(() => {
            window.removeEventListener("resize", handleScreenChange);
        });
    },[screenWidthValue.screenWidth]);

    useEffect(() => {
        if(screenWidthValue.screenWidth < 800){
            setScreenWidthValue(preVal => ({
                ...preVal, isMobileScreen: true
            }));
        } else {
            setScreenWidthValue(preVal => ({
                ...preVal, isMobileScreen: false
            }));
        }

    }, [screenWidthValue.screenWidth]);

;

    return (
        <nav className="container">
            {
                screenWidthValue.isMobileScreen ? <NavbarMobile /> : <img src={Logo} alt="Little lemon logo" />
            }
            <NavLinks />

        </nav>
    );
}

export default Navbar;
