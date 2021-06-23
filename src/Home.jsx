import React from 'react'
import {Route} from 'react-router-dom'
import "./Home.css"
import Logo from "./banner2.png";
import Form from './Form';
import AboutUs from './AboutUs'

const Home =() =>{
    return(
        <>
            <img className="logo" src={Logo} alt="Bred For Fitness" />
            
            <div className="Container col-6 col-lg-4">
                <p className="welcome_text">
                    Workout Program Made Just For You
                </p>
            </div>
<<<<<<< HEAD
            <Route render={({ history}) => (
            <button className="form_btn btn-success" onClick={()=>{history.push('/form')}} >Form</button>
            )} />
            <AboutUs />
=======
            
            <button className="form_btn btn-success" >Form</button>
            
>>>>>>> 5e0ba34... button component is added

            
        </>
    );
};

export default Home;