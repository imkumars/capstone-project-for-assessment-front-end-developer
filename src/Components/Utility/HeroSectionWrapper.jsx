import React from "react";


function HeroSectionWrapper({children, heroImgSrc, heroHeadingTxt, heroSubHeadingTxt}){
    return(
        <div className="hero-section">
        <div className="container">
            <section>
                <h1 className="hero-display-title title-subtitle-font-family">{heroHeadingTxt}</h1>
                <h3 className="hero-display-sub-title title-subtitle-font-family">{heroSubHeadingTxt}</h3>
                {
                    children
                }
            </section>

            {
                heroImgSrc
                    ?
                    <figure className="hero-fig rounded-border-radius">
                        <img src={heroImgSrc} alt="restaurant food" loading="lazy"/>
                    </figure>
                    :
                    <></>
            }


        </div>
    </div>
    );
}

export default HeroSectionWrapper;