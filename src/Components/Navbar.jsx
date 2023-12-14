import Logo from "../assets/Logo.svg";


function Navbar(){
    return (
        <nav className="nav-bar">

            <div className="wrapper">
                <img src={Logo} alt="Little lemon logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>

                </ul>

            </div>

        </nav>
    );
}

export default Navbar;
