import React,{useState} from 'react'
import Form2 from "./Form2"
import './Form.css'
import {Link} from 'react-scroll'


const Form =() =>{
    const [record, setrecord] = useState([]);
    // const [Active, setActive] = useState("one");

    const [userReg, setuserReg] = useState({
        fname:"",
        pno:"",
        email:"",
        gender:"",
        age:"",
        ht:"",
        wt:"",
        prof:"",
        address:"",
    });
    const handleInput=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setuserReg({
            ...userReg, [name]:value })
    }
    
    const handelSubmit =(e)=>{
        e.preventDefault();
        const name=e.target.name;
        // const value=e.target.value;
        const newRecord = {...userReg, id: new Date().getTime.toString()}
        setrecord([...record, newRecord]);

        setuserReg({...useState, [name]:""})
    }

    const ProgressBar = {
        border: "#008E53 solid",
        color: "#008E53",
        background: "#008E53"
    }

    const icons = {
        border: "#008E53 solid",
        color: "#008E53",
        }

    const form1btn = ()=>{
        
        var f1 = document.getElementById("form1");
        var f2 = document.getElementById("form2");
        var icons = document.getElementById("uc");
        var bar = document.getElementById("bar2");
        if (f1.style.display === "none") {
          f1.style.display = "block";
          
        } 
        else {
          f1.style.display = "none";
          f2.style.display = "block";
          
        }

        

        icons.style.color = "#008E53";
        icons.style.border = "#008E53 solid";
        bar.style.background = "#008E53";
        
    }

    const form2btn=()=>{
        var f3 = document.getElementById("form3");
        var f2 = document.getElementById("form2");
        if (f3.style.display === "none") {
            f3.style.display = "block";
            
          } 
          else {
            f2.style.display = "none";
            // f3.style.display = "block";
            
          }
    }
            
         

        
        
        


   

    

    // here begins the main page


    return(
        
        <div className="form">
            <div>
            <h3 id="headLine">Lets get started with your workout program</h3>
            <h4 id="subHead">Quick FAQ</h4>
            <h5 id="ques">How can filling a form help me get a better shape?</h5>
            <p id="ans">The answer to this question is really simple, filling this small form will help us understand your goal and create a program just for you. </p>
            
            </div>

            <div className="sidebar" id="sidebar">
            
                <div className="progress-blockp"> 
                    <p>Basic Information</p>
                    <p>Describe Yourself</p>
                    <p>Your Goals</p>
                </div>
                <div className="progress-blocki"> 
                    <p><i className="fas fa-2x fa-info-circle " id="ic" style={icons} /></p>
                    <p><i className="fas fa-2x fa-user-circle colch" id="uc"/></p>
                    <p><i className="fas fa-2x fa-bullseye " id="gc"/></p>
                </div>
                <div className="progress-blockl"> 
                    <p className="bar  background" id="bar1" style={ProgressBar}></p>
                    <p className="bar  background colch" id="bar2" ></p>
                </div>




            </div>
            
            
           {/* Here Begins Form1 */}
           <div className="FormDiv" id="form1">
           <div className="info-head">
                <h3 id="info-head">Lets Start With Your Basic Information</h3>
                <p>Please fill the following details so we can contact you with a personalised plan.</p>
            </div>
            <form action="" onSubmit={handelSubmit}>
                
                <div className="fields">
                    <label htmlFor="fname">Full Name</label>
                    <input className="inputtxt" type="text" autoComplete="off" 
                    value={userReg.fname}
                    onChange={handleInput}
                    name="fname" id="fname" />
                </div>
                <div className="fields">
                    <label htmlFor="pno">Phone Number</label>
                    <input type="text" autoComplete="off" className="inputtxt"
                    value={userReg.pno}
                    onChange={handleInput}
                    name="pno" id="pno" />
                </div>
                <div className="fields">
                    <label htmlFor="email">Email</label>
                    <input type="text" autoComplete="off" className="inputtxt"
                    value={userReg.email}
                    onChange={handleInput}
                    name="email" id="email" />
                </div>
                <div className="fields">
                    <label htmlFor="gender">Gender</label>
                    <div className="genDiv">
                        
                        <input type="radio" 
                        value="male"
                        onChange={handleInput}
                        name="gender" id="gender" 
                        checked={userReg.gender=="male"}
                        style={{margin:'0px 20px'}}
                        />
                        <label>Male </label>
                    </div>
                    <div className="genDiv">
                    
                    <input type="radio" 
                    value="female"
                    onChange={handleInput}
                    name="gender" id="gender" 
                    checked={userReg.gender=="female"}
                    style={{margin:'0px 20px'}}
                    />
                    <label>Female </label>
                    </div>
                   
                </div>
                <div className="fields">
                    <label htmlFor="age">Age</label>
                    <input type="text" autoComplete="off" className="inputtxt"
                    value={userReg.age}
                    onChange={handleInput}
                    name="age" id="age" />
                </div>
                <div className="fields">
                    <label htmlFor="hw">Height & Weight</label>

                    <input type="text" autoComplete="off" placeholder="in cm" className="inputtxt param"
                    value={userReg.ht}
                    onChange={handleInput}
                    name="ht" id="ht" />

                    <input type="text" autoComplete="off" placeholder="in kg" className="inputtxt param wt"
                    value={userReg.wt}
                    onChange={handleInput}
                    name="wt" id="wt" />

                </div>
                <div className="fields">
                    <label htmlFor="prof">Profession</label>
                    <input type="text" autoComplete="off" className="inputtxt"
                    value={userReg.prof}
                    onChange={handleInput}
                    name="prof" id="prof" />
                </div>
                <div className="fields addr">
                    <label htmlFor="address">Address</label>
                    <textarea cols="25" type="text" autoComplete="off" className="inputtxt"
                    value={userReg.address}
                    onChange={handleInput}
                    style={{height:'100px'}}
                    name="address" id="address" />
                </div>
                <button id="form1-hid" className="btn" onClick={form1btn}>Continue</button>
            </form>
            </div>

       
            {/* Here Begins Form 2 */}
        
        
        
           <div className="FormDiv" id="form2">
            <div className="info-head">
                    <h3 id="info-head">How Would You Describe Yourself?</h3>
                    <p>Please fill the following details so we can contact you with a personalised plan.</p>
            </div>
            <form action="" onSubmit={handelSubmit}>
                
                <div className="fields">
                    <label htmlFor="desc">How would you describe your daily activity level? </label>
                    <input className="inputtxt" type="text" autoComplete="off" 
                    value={userReg.desc}
                    onChange={handleInput}
                    name="desc" id="desc" />
                </div>
                <div className="fields">
                    <label htmlFor="reg_ex">Do you regularly exercise? (At least 3x per week) </label>
                    <input type="text" autoComplete="off" className="inputtxt"
                    value={userReg.reg_ex}
                    onChange={handleInput}
                    name="reg_ex" id="reg_ex" />
                </div>
                <div className="fields">
                    <label htmlFor="work_inc">Email</label>
                    <input type="text" autoComplete="off" className="inputtxt"
                    value={userReg.work_inc}
                    onChange={handleInput}
                    name="work_inc" id="work_inc" />
                </div>
                <div className="fields">
                    <label htmlFor="gender">Gender</label>
                    <div className="genDiv">
                        
                        <input type="radio" 
                        value="male"
                        onChange={handleInput}
                        name="gender" id="gender" 
                        checked={userReg.gender=="male"}
                        style={{margin:'0px 20px'}}
                        />
                        <label>Male </label>
                    </div>
                    <div className="genDiv">
                    
                    <input type="radio" 
                    value="female"
                    onChange={handleInput}
                    name="gender" id="gender" 
                    checked={userReg.gender=="female"}
                    style={{margin:'0px 20px'}}
                    />
                    <label>Female </label>
                    </div>
                   
                </div>
                <div className="fields">
                    <label htmlFor="age">Age</label>
                    <input type="text" autoComplete="off" className="inputtxt"
                    value={userReg.age}
                    onChange={handleInput}
                    name="age" id="age" />
                </div>
                <div className="fields">
                    <label htmlFor="hw">Height & Weight</label>

                    <input type="text" autoComplete="off" placeholder="in cm" className="inputtxt param"
                    value={userReg.ht}
                    onChange={handleInput}
                    name="ht" id="ht" />

                    <input type="text" autoComplete="off" placeholder="in kg" className="inputtxt param wt"
                    value={userReg.wt}
                    onChange={handleInput}
                    name="wt" id="wt" />

                </div>
                <div className="fields">
                    <label htmlFor="prof">Profession</label>
                    <input type="text" autoComplete="off" className="inputtxt"
                    value={userReg.prof}
                    onChange={handleInput}
                    name="prof" id="prof" />
                </div>
                <div className="fields addr">
                    <label htmlFor="address">Address</label>
                    <input type="text" autoComplete="off" className="inputtxt"
                    value={userReg.address}
                    onChange={handleInput}
                    style={{height:'100px'}}
                    name="address" id="address" />
                </div>
                <button className="btn" onClick={form2btn}>Continue</button>
            </form>
            </div>
            
            {/* <div>
                {
                    record.map((currElem)=>{
                        return(
                            <div className="recs">
                                <p>{currElem.fname}</p>
                                <p>{currElem.pno}</p>
                                <p>{currElem.email}</p>
                                <p>{currElem.gender}</p>
                                <p>{currElem.age}</p>
                                <p>{currElem.ht} cm</p>
                                <p>{currElem.wt} kg</p>
                                <p>{currElem.prof}</p>
                                <p>{currElem.address}</p>
                            </div>
                        )
                    })
                }
            </div> */}
            
            
            
            
        









            
            {/* <div className="Form1">
                {Active === "two" && <Form2 />}
            </div> */}
            
            {/* <div>
            <h4>Form 1 Data</h4>
                {
                    record.map((currElem)=>{
                        return(
                            <div className="recs">
                                <p>{currElem.fname}</p>
                                <p>{currElem.pno}</p>
                                <p>{currElem.email}</p>
                                <p>{currElem.gender}</p>
                                <p>{currElem.age}</p>
                                <p>{currElem.ht} cm</p>
                                <p>{currElem.wt} kg</p>
                                <p>{currElem.prof}</p>
                                <p>{currElem.address}</p>
                            </div>
                        )
                    })
                }
            </div> */}
            </div>

            
            
        
        
    );
};





export default Form;
            
            
            
            

