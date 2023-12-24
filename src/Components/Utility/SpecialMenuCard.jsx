import React from "react";

function SpecialMenuCard({imgSrc, dishName, dishPrice, dishdescription}){
    return (
        <div className="special-menu-card" >
            <figure>
                <img src={imgSrc} alt={dishName} loading="lazy"/>
            </figure>
            <article>
                <article className="dish-name-price">
                    <h2>{dishName}</h2>
                    <h4>{dishPrice}</h4>
                </article>
                <p>{dishdescription}</p>
                <strong>
                    <p>Order a delivery</p>
                    <span className="material-symbols-outlined">directions_bike</span>
                </strong>
            </article>
        </div>
    );
}

export default SpecialMenuCard;