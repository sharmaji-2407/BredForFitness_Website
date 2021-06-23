import React,{useState} from 'react'
import {Route} from 'react-router-dom'
import Form2 from "./Form2"

const Form =() =>{
    const [Active, setActive] = useState("One");
    return(
        
        <>
            <h1>Form1</h1>
            <Route render={({ history}) => (
            <button className="form_btn btn-success" onClick={} >Home</button>
            )} />
            
        </>
    );
};



export default Form;