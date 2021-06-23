import React,{useState} from 'react'
import {Route} from 'react-router-dom'
import Form2 from "./Form2"
import Button from "./Button"

const Form =() =>{
    const [Active, setActive] = useState("One");
    return(
        
        <>
            <h1>Form1</h1>
<<<<<<< HEAD
            <Route render={({ history}) => (
            <button className="form_btn btn-success" >Home</button>
            )} />
=======
            
            <button className="form_btn btn-success" >Home</button>
            <div>
                
                {Active === "Two" && <Form2 />}
            </div>
            <Button title="Continue"/>
>>>>>>> 5e0ba34... button component is added
            
        </>
    );
};





export default Form;