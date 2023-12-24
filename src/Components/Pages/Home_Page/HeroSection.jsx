import React from "react";

import HeroImage from "../../../assets/restauranfood.jpg";
import Button from "../../Utility/Button";

import HeroSectionWrapper from "../../Utility/HeroSectionWrapper";


function HeroSection(){
    return(
        <HeroSectionWrapper heroImgSrc={HeroImage} heroHeadingTxt="Little Lemon" heroSubHeadingTxt="Chicago" >

            <p className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button linkTo="/reservations" btnName="Reserve a Table" styleClass="reserve-table-btn" />

        </HeroSectionWrapper>

    );
}

export default HeroSection;