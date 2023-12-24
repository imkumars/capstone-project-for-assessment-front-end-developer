
import {NavLink} from "react-router-dom";

const navLinksArray = [
    {
        name: "Home",
        linkTo: "/"
    },
    {
        name: "About",
        linkTo: "/about"
    },
    {
        name: "Menu",
        linkTo: "/menu"
    },
    {
        name: "Reservations",
        linkTo: "/reservations"
    },
    {
        name: "Order Online",
        linkTo: "/order-online"
    },
    {
        name: "Login",
        linkTo: "/login"
    }
];

function NavLinks(){

    const links = navLinksArray.map((link) => {
        return <li key={link.name}><NavLink to={link.linkTo}>{link.name}</NavLink></li>
    });

    return(
        <ul>
            {links}
        </ul>
    );
}

export default NavLinks;