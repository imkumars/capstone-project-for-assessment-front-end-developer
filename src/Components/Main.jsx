import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home_Page/HomePage";
import AboutPage from "./Pages/About_Page/About";
//import ReservationPage from "./Pages/Reservation_Page/Reservation";

import BookingPage from "./Pages/Booking_Page/BookingPage";


function Main(){
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* <Route path="/reservations" element={<ReservationPage />} /> */}

                <Route path="/reservations" element={<BookingPage />} />
            </Routes>

        </main>
    );
}

export default Main;