
import Logo from "../assets/Logo.svg";
import NavLinks from "./Utility/NavLinks";


function Navbar(){
    return (
        <nav>
            <img src={Logo} alt="Little lemon logo" />
            <NavLinks />

        </nav>
    );
}

export default Navbar;
