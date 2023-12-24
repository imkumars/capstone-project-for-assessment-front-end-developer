import React from "react";

import HeroSectionWrapper from "../../Utility/HeroSectionWrapper";
import MarioAdrianImg from "../../../assets/Mario-and-Adrian-A.jpg"

function AboutPage() {
    return (
        <HeroSectionWrapper heroHeadingTxt="About" heroSubHeadingTxt="About Little Lemon" heroImgSrc={MarioAdrianImg}>
            {/* <p className="hero-description">A bit of History on how it all started.</p> */}
        </HeroSectionWrapper>
    );
}

export default AboutPage;