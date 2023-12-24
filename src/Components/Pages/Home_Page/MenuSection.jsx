import React from "react";


import Button from "../../Utility/Button";
import SpecialMenuCard from "../../Utility/SpecialMenuCard";
import restaurantSpecialMenu from "../../../data/restaurant-menu-data";
import GreekSaladImg from "../../../assets/menu-img/greek-salad.jpg";
import BruchettaImg from "../../../assets/menu-img/bruchetta.png";
import LemonDessertImg from "../../../assets/menu-img/lemon-dessert.jpg";

const menuImages = [GreekSaladImg, BruchettaImg, LemonDessertImg];

function MenuSection(){

    const specialMenus = restaurantSpecialMenu.map((eachDish, index) => {
        return <SpecialMenuCard key={eachDish.dishName} dishName={eachDish.dishName} dishPrice={eachDish.price} dishdescription={eachDish.description}  imgSrc={menuImages[index]}/>
    });

    return (
        <div className="menu-section">
            <section className="container">
                <h1 className="title-subtitle-font-family">This weeks specials !</h1>
                <Button linkTo="/menu" btnName="Online Menu" styleClass="online-menu-btn"/>
            </section>
            <section className="container">
                {specialMenus}
            </section>
        </div>
    );
}

export default MenuSection;