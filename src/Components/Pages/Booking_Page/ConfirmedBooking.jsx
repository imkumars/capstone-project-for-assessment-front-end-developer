import React from "react";


import HeroSectionWrapper from "../../Utility/HeroSectionWrapper";
import ConfirmationCard from "../../Utility/ConfirmationCard";

function ConfirmBooking(){
    return (
        <>
            <HeroSectionWrapper heroHeadingTxt="Booking status" heroSubHeadingTxt="Delighted to serve you Better" />
            <section className="booking-confirmaton-section">
                <ConfirmationCard />
            </section>
        </>

    );

}

export default ConfirmBooking;