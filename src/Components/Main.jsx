import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home_Page/HomePage";
import AboutPage from "./Pages/About_Page/About";
import MenuPage from "./Pages/Menu_Page/MenuPage";

//import ReservationPage from "./Pages/Reservation_Page/Reservation";

import BookingPage from "./Pages/Booking_Page/BookingPage";
import ConfirmBooking from "./Pages/Booking_Page/ConfirmedBooking";
import LoginPage from "./Pages/Login_Page/LoginPage";


function Main(){
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                {/* <Route path="/reservations" element={<ReservationPage />} /> */}

                <Route path="/reservations" element={<BookingPage />} />
                <Route path="/booking-confirmation" element={<ConfirmBooking />}/>
                <Route path="/login" element={<LoginPage />} />
            </Routes>

        </main>
    );
}

export default Main;