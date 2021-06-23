import React from 'react'
import {Route} from 'react-router-dom'
import "./Home.css"
import Logo from "./banner2.png";
import Form from './Form';

const Home =() =>{
    return(
        <>
            <img className="logo" src={Logo} alt="Bred For Fitness" />
            
            <div className="Container col-6 col-lg-4">
                <p className="welcome_text">
                    Workout Program Made Just For You
                </p>
            </div>
            <Route render={({ history}) => (
            <button className="form_btn btn-success" onClick={()=>{history.push('/form')}} >Form</button>
            )} />

            
        </>
    );
};

export default Home;