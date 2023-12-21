import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home_Page/HomePage";
import AboutPage from "./Pages/About_Page/About";
//import ReservationPage from "./Pages/Reservation_Page/Reservation";

import BookingPage from "./Pages/Booking_Page/BookingPage";
import ConfirmBooking from "./Pages/Booking_Page/ConfirmedBooking";


function Main(){
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* <Route path="/reservations" element={<ReservationPage />} /> */}

                <Route path="/reservations" element={<BookingPage />} />
                <Route path="/booking-confirmation" element={<ConfirmBooking />}/>
            </Routes>

        </main>
    );
}

export default Main;