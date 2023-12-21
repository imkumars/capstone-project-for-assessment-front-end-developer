import React, {useReducer} from "react";

import BookingForm from "./BookingForm";

//import { fetchAPI, submitAPI  } from "../../../mock_api/mock_api1";
import fakeAPI from "../../../mock_api/mock_api2";

import { useNavigate } from "react-router-dom";  //Read more: https://reactrouter.com/en/6.5.0/hooks/use-navigate


function BookingPage(){

    /*
    const [userSelectedDate, setUserSelectedDate] = useState("2023-12-12");
    const [availSlots, setAvailSlots] = useState([]);

    //Using mock_api2
    // const makingAPIRequest = (date) => {
    //     fetchAPI(date)
    //     .then((response) => setAvailSlots([...response]))
    //     .catch((error) => console.log(error));
    // }


    //Using mock_api3
    const makingAPIRequest = (date) => {

        const reserDate = new Date(date);
        const timeSlotsArray = fakeAPI.fetchAPI(reserDate);

        console.log("Time slot array in booking page" ,timeSlotsArray)

        setAvailSlots([...timeSlotsArray])
    }


    useEffect(() => {
        makingAPIRequest(userSelectedDate);
    },[userSelectedDate]);

    //To update avialableTimes
    function updateTimes (state, action){
        //return availableTimes;
        console.log("This is state",state);
        //console.log(action.reservationDate);

        setUserSelectedDate(action.reservationDate);

        //return ["17:00", "18:00", "19:00"];
        return [...availSlots]
    }


    */

    //Check if form is valid and route to booking-confirmation page.
    const navigate = useNavigate();

    function submitForm(formData){

        const isBookingConfirmed = fakeAPI.submitAPI(formData);

        if(isBookingConfirmed) {
            navigate("/booking-confirmation");
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
        <div className="form-section">
            <div className="container">

                <BookingForm availableTimes={availableTimes} dispatchMethod={dispatch} submitFromFunction={submitForm}/>

            </div>
        </div>
    );
}

export default BookingPage;
