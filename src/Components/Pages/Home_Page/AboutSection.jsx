import React from "react";

import aboutRestaurantText from "../../../data/about-restaurant-data"
import restaurantImg from "../../../assets/restaurant.jpg";
import restaurantBImg from "../../../assets/restaurant-chef-B.jpg";

function AboutSection(){
    return(
        <section className="about-section">
            <div className="container">
                <section>
                    <h1 className="title-subtitle-font-family">Little Lemon</h1>
                    <h3 className="title-subtitle-font-family">Chicago</h3>
                    <p className="about-restaurant-text">{aboutRestaurantText}</p>
                </section>
                <figure>
                    <img src={restaurantImg} alt="restaurant" loading="lazy"/>
                    <img src={restaurantBImg} alt="restaurant-img-b" loading="lazy"/>
                </figure>
            </div>
        </section>
    );
}

export default AboutSection;