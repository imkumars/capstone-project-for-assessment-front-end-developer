import React from "react";

// import StarImg from "../../assets/star-img.png";


function TestimonialsCard({custName, custReview, starRating, custImg}){

    // const starsImg = [...Array(starRating)].map((e, index) => {
    //     return <img key={index} scr={StarImg} data-src={StarImg} alt="star-icon" />
    // });

    const starsImg = [...Array(starRating)].map((e, index) => {
        return <i key={index} className="bi bi-star-fill"></i>
    });

    return (
        <div className="testimonials-card">
            <section>
                <figure>
                    <img src={custImg} alt="customer-img" loading="lazy"/>
                    {/* <i className="bi bi-person-fill"></i> */}
                </figure>
                <section>
                    <h4 className="customer-name">{custName}</h4>
                    <span>
                        {starsImg}
                    </span>
                </section>
            </section>
            <q className="customer-review">{custReview}</q>
        </div>
    );
}

export default TestimonialsCard;