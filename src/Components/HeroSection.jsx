
import HeroImage from "../assets/restauranfood.jpg";

function HeroSection(){
    return(
        <div className="hero-section">
            <div className="wrapper position-rel">
                <section>
                    <h1 className="hero-display-title title-subtitle-font-family">Little Lemon</h1>
                    <h3 className="hero-display-sub-title title-subtitle-font-family">Chicago</h3>
                    <p className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href="/reservations">
                        <button type="button" className="reserve-table-btn rounded-border-radius">Reserve a Table</button>
                    </a>

                </section>
                <figure className="hero-fig rounded-border-radius">
                    <img src={HeroImage} alt="restaurant food" />
                </figure>
            </div>
        </div>
    );
}

export default HeroSection;