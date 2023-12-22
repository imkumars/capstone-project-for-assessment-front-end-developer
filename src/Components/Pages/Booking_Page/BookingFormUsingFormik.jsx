
import React from "react";

import { useFormik } from "formik";
import * as Yup from 'yup';



const formStyles = {
    display: "grid",
    maxWidth: "200px",
    gap: "20px"
};



function BookingForm({availableTimes, dispatchMethod, submitFromFunction}){


    //form validation

    const initialValues = {
        resDate: "",
        resTime: availableTimes[0],
        numOfGuests: "1",
        typeOfOccasion: "Birthday"
    };

    const onSubmit =  (values) => {
        console.log("Form on submit", values);
        submitFromFunction(values);
    }

    const validationSchema = Yup.object({
        resDate: Yup.string().required("Select date to reserve a table"),
        numOfGuests: Yup.number()
            .min(1, "Number of guests should not be less than 1")
            .max(10, "Number of guests should not be more than 10")
            .required("Number of guests should be from 1 to 10"),
    });


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });


    //form validation


    console.log(formik.values);
    console.log(formik.errors);


    function customOnChanageListener(e){
       if(e.target.name === "resDate"){
            //console.log("date changed")
            dispatchMethod({type: e.target.name, reservationDate: e.target.value});
        }
    }


    const availableTimeSlot = availableTimes.map((eachSlot, index) => {
        return <option key={index}>{eachSlot}</option>
    });

    return (
        <form style={formStyles} onSubmit={formik.handleSubmit} onChange={customOnChanageListener}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="resDate"
                value={formik.values.resDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-label="Select date to reserve a table"
                aria-required= "true"
                />

            <span
                className={(formik.errors.resDate && formik.touched.resDate) ? "form-error-msg" : "display-none" }
                >{formik.errors.resDate}
            </span>


            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="resTime"
                value={formik.values.resTime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-label="Available time slots"
                aria-required= "true">
                {availableTimeSlot}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                name="numOfGuests"
                value={formik.values.numOfGuests}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-label="Number of guests"
                aria-required= "true"/>

            <span
                className={(formik.errors.numOfGuests && formik.touched.numOfGuests) ? "form-error-msg" : "display-none" }
                >{formik.errors.numOfGuests}
            </span>

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="typeOfOccasion"
                value={formik.values.typeOfOccasion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-label="Select type of Occasion"
                aria-required= "true">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input
                type="submit"
                value="Make Your reservation"
                className="primary-btn rounded-border-radius"
                disabled={(formik.errors.resDate || formik.errors.numOfGuests) ? true : false}
                aria-disabled={(formik.errors.resDate || formik.errors.numOfGuests) ? true : false}
            />

        </form>
    );
}

export default BookingForm;