import React, {useReducer} from "react";

import BookingForm from "./BookingForm";

function BookingPage(){

    //To update avialableTimes
    function updateTimes (state, action){
        //return availableTimes;
        console.log(state);
        console.log(action.reservationDate);

        return ["17:00", "18:00", "19:00"];
    }

    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }


    //const [state, dispatch] = useReducer(reducer, initializeTimes());
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());




    return (
        <div className="form-section">
            <div className="container">

                <BookingForm availableTimes={availableTimes} dispatchMethod={dispatch}/>

            </div>
        </div>
    );
}

export default BookingPage;
