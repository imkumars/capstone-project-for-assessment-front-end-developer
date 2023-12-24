
import React from "react";


function ConfirmationCard() {
    return(
        <div className="confirmation-card container">
            <section>
                <i className="bi bi-patch-check-fill"></i>
                <h1>Your Reservation is Confirmed !</h1>
                <p>You will receive a confirmation email shortly</p>
            </section>
            <section></section>
        </div>
    );
}

export default ConfirmationCard;