
import React, {useState, useEffect} from "react";


const formStyles = {
    display: "grid",
    maxWidth: "200px",
    gap: "20px"
}

function BookingForm({availableTimes, dispatchMethod, submitFromFunction}){


    // Initial form data
    const [formData, setFormData] = useState({
        resDate: "",
        resTime: availableTimes[0],
        numOfGuests: "1",
        typeOfOccasion: "Birthday",
    });


    //To console log changes
    useEffect(() => {
        console.log(formData);
    },[formData]);


    // Handle any input,select value changes and update formData accordingly
    const handleFormDataChange = (e) => {
        // setFormData({
        //     ...formData, [e.target.name]: e.target.value
        // });
        setFormData(preVal => {
            return {...preVal, [e.target.name]: e.target.value}
        });

        //Check if date input was changed, if true then pass date as a callback to dispatchMethod
        if(e.target.name === "resDate"){
            dispatchMethod({type: e.target.name, reservationDate: e.target.value});
        }

    }



    //Handle form submittion
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log("form submitted");

        submitFromFunction(formData);
    }

    const availableTimeSlot = availableTimes.map((eachSlot, index) => {
        return <option key={index}>{eachSlot}</option>
    });

    return (
        <form style={formStyles} onSubmit={handleFormSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={formData.resDate} onChange={handleFormDataChange} name="resDate" aria-label="Select date to reserve a table" />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={formData.resTime} onChange={handleFormDataChange} name="resTime" aria-label="Available time slots">
                {/* <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option> */}
                {availableTimeSlot}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.numOfGuests} onChange={handleFormDataChange} name="numOfGuests" aria-label="Number of guests"/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.typeOfOccasion} onChange={handleFormDataChange} name="typeOfOccasion" aria-label="Select type of Occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" className="primary-btn rounded-border-radius"  />
        </form>
    );
}

export default BookingForm;