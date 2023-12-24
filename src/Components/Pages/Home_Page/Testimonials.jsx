import React from "react";

import TestimonialsCard from "../../Utility/TestimonialsCard";
import customerTestimonials from "../../../data/customers-testimonials";
import AlexImg from "../../../assets/customer-img/Alex-img-original_creator_Amir-Seilsepour_unsplash.jpg";
import KeishaImg from "../../../assets/customer-img/Keisha-img-original_creator_Judith-Ejike_unsplash.jpg";
import MeiImg from "../../../assets/customer-img/Mei-img-original_creator_Imansyah-Muhamad-Putera_unsplash.jpg";
import RosaImg from "../../../assets/customer-img/Rosa-img-original_creator_Ashwin-Vaswani_unsplash.jpg";



const fictionalCustomersImages = [AlexImg, KeishaImg, MeiImg, RosaImg];

function Testimonials(){

    const testimonialsCards = customerTestimonials.map((eachCust, index) => {
        return <TestimonialsCard 
                    key={eachCust.name + index} 
                    custName={eachCust.name} 
                    custReview={eachCust.review} 
                    starRating={eachCust.starRating} 
                    custImg={fictionalCustomersImages[index]}    
                    />
    });

    return (
        <div className="testimonials-section">
            <div className="container">
                <section>
                    <h1 className="title-subtitle-font-family">Testimonials</h1>
                </section>
                <section>
                    {testimonialsCards}
                </section>
            </div>
        </div>
    );
}

export default Testimonials;