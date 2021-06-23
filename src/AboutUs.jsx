import React from 'react'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css'
import logo from "./banner2.png"


const AboutUs=()=> {
    return (
        <div>
           <div class="body-wrap boxed-container">
                <header class="site-header">
                    <div class="container">
                        <div class="site-header-inner">
                            <div class="brand header-brand">
                                <h1 class="m-0">
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