import React from 'react'
// import * as css from './style/css';
import logo from "./banner2.png"
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const AboutUs=()=> {
    return (
        <div>
           <div class="body-wrap boxed-container">
                <header className="site-header">
                    <div className="container">
                        <div className="site-header-inner">
                            <div className="brand header-brand">
                                <h1 className="m-0">
                                    <a href="#">
								        <img src={logo} alt="BFF"/>
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </header> 
            </div>
        </div>
    )
}

export default AboutUs;