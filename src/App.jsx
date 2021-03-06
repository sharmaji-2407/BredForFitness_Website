import React,{useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Form from "./Form";
import Form2 from "./Form2";
import Contact from "./Contact";
import "./App.css";

import {Switch , Route, Redirect} from "react-router-dom";
import AboutUs from './AboutUs';

const App =() =>{
   
    
    return(
        <>
        
        
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/form" component={Form} />
            <Redirect to="/" />
            
            </Switch>
            
        </>
    );
};


    


export default App;