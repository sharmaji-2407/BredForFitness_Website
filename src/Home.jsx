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
            <div className="block_up">
                <div className="bg_rect">
                    <div className="Container col-6 col-lg-4">
                
                        <p className="welcome_text">
                            Workout Program Made Just For You
                        </p>
                    
                    </div>
                    <div className="hd_txt"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    <div className="btn btn_form"><button className="but1 form_btn btn-success" onClick={Form}>Get Started</button></div>
                    <div className="img"></div>
                    <div className="img2"></div>
                 </div>
            </div>
            


            
        </>
    );
};

export default Home;



