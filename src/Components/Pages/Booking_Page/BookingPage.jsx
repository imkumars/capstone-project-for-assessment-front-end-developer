import React, {useReducer} from "react";

//import BookingForm from "./BookingForm";
import BookingForm from "./BookingFormUsingFormik";

//import { fetchAPI, submitAPI  } from "../../../mock_api/mock_api1";
import fakeAPI from "../../../mock_api/mock_api2";

import { useNavigate } from "react-router-dom";  //Read more: https://reactrouter.com/en/6.5.0/hooks/use-navigate

import HeroSectionWrapper from "../../Utility/HeroSectionWrapper";

function BookingPage(){

    //Check if form is valid and route to booking-confirmation page.
    const navigate = useNavigate();

    function submitForm(formData){

        const isBookingConfirmed = fakeAPI.submitAPI(formData);

        if(isBookingConfirmed) {

            setTimeout(() => {
                navigate("/booking-confirmation");
            },1000)
        }

    }


    function updateTimes(state, action){

        if(action.type === "resDate"){
            //return new state (i.e array of new time slots)
            const date = new Date(action.reservationDate);
            const newSlots = fakeAPI.fetchAPI(date);

            return newSlots
        }
    }


    const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];


    //const [state, dispatch] = useReducer(reducer, initializeTimes());
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);


    return (
        <>
            <HeroSectionWrapper heroHeadingTxt="Reservations" heroSubHeadingTxt="Book a Table" />
            <div className="form-section">
                <div className="container">

                    <BookingForm availableTimes={availableTimes} dispatchMethod={dispatch} submitFromFunction={submitForm}/>

                </div>
            </div>
        </>

    );
}

export default BookingPage;
