
import React,{useState} from 'react'
import './Form.css'
import {Link} from 'react-scroll'
import Form3 from "./Form3"

const Form2 =() =>{
    const [record, setrecord] = useState([]);
    const [Active, setActive] = useState("one");
    const [userReg, setuserReg] = useState({
        desc:"",
        reg_ex:"",
        work_inc:"",
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


    return(
        
            
        <div className="form1">
           <div className="FormDiv">
            <div className="info-head">
                    <h3 id="info-head">How Would You Describe Yourself?</h3>
                    <p>Please fill the following details so we can contact you with a personalised plan.</p>
            </div>
            <form action="" onSubmit={handelSubmit}>
                
                <div className="fields">
                    <label htmlFor="desc">Full Name</label>
                    <input className="inputtxt" type="text" autoComplete="off" 
                    value={userReg.desc}
                    onChange={handleInput}
                    name="desc" id="desc" />
                </div>
                <div className="fields">
                    <label htmlFor="reg_ex">Phone Number</label>
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
                <button className="btn" type="submit" onSubmit onClick={()=> setActive("three")}>Continue</button>
            </form>
            </div>
            
            <div>
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
            </div>
            
            
            
            
        </div>
        
    );
};

export default Form2;
                
                
                
                
                
                
                
                
            
           