import React,{useState} from 'react'
import {Route} from 'react-router-dom'
import Form2 from "./Form2"
import Button from "./Button"

const Form =() =>{
    // const [Active, setActive] = useState("One");
    return(
        
        <div>
            <h1>Form1</h1>
            
            <button className="form_btn btn-success" >Home</button>
            <div>
                {/* {Active === "One" && ""}
                {Active === "Two" && <Form2 />} */}
                
            </div>
            {/* <Button title="Continue"/> */}
            
            
        </div>
    );
};





export default Form;