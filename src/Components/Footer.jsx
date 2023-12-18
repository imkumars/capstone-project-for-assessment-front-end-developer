import {Link} from "react-router-dom";
import FooterImg from "../assets/logo-footer.png";
import NavLinks from "./Utility/NavLinks";

function Footer(){
    return (
        <footer>
            <div className="wrapper flex-wrap">
                <div className="footer-logo">
                    <img src={FooterImg} alt="Little Lemon Footer logo"/>
                </div>
                <div className="footer-navigation">
                    <h3 className="footer-heading">SITEMAP</h3>
                    <NavLinks />
                </div>
                <div className="footer-contact">
                    <h3 className="footer-heading">CONTACT US</h3>
                </div>
                <div className="fotter-social-connect">
                    <h3 className="footer-heading">CONNECT WITH US</h3>
                    <div className="social-icons">
                        <Link to="https://www.facebook.com/">
                            <i className="bi bi-facebook"></i>
                        </Link>
                        <Link to="https://www.instagram.com/">
                            <i className="bi bi-instagram"></i>
                        </Link>
                        <Link to="http://www.twitter.com/">
                            <i className="bi bi-twitter-x"></i>
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;