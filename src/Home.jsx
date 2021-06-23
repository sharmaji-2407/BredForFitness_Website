import React from 'react'
import "./Home.css"
import Logo from "./banner2.png";

const Home =() =>{
    return(
        <>
            <img className="logo" src={Logo} alt="Bred For Fitness" />
            
            <div className="Container">
                <p className="welcome_text">
                    Workout Program Made Just For You
                </p>
            </div>
            <button className="form_btn btn-success">Form</button>

            
        </>
    );
};

export default Home;