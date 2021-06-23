import React,{useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Form from "./Form";
import Form2 from "./Form2";
import Contact from "./Contact";
import NavBar from "./Navbar";
import {Switch , Route, Redirect} from "react-router-dom";

const App =() =>{
    const [active, setActive] = useState("First");
    
    return(
        <>
        
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            
            <Route exact path="/form" component={Form} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
            
            </Switch>
            
        </>
    );
};


    


export default App;