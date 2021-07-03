import React,{useState} from 'react'
import Form2 from "./Form2"


const Form =() =>{
    const [record, setrecord] = useState([]);
    const [Active, setActive] = useState("one");

    const [userReg, setuserReg] = useState({
        fname:"",
        pno:"",
        email:"",
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
        const value=e.target.value;
        const newRecord = {...userReg, id: new Date().getTime.toString()}
        setrecord([...record, newRecord]);

        setuserReg({...useState, [name]:""})
    }

    

    // here begins the main page


    return(
        
        <div className="form1">
            <h1>Form1</h1>
            <form action="" onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" autoComplete="off" 
                    value={userReg.fname}
                    onChange={handleInput}
                    name="fname" id="fname" />
                </div>
                <div>
                    <label htmlFor="pno">Phone Number</label>
                    <input type="text" autoComplete="off" 
                    value={userReg.pno}
                    onChange={handleInput}
                    name="pno" id="pno" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" autoComplete="off" 
                    value={userReg.email}
                    onChange={handleInput}
                    name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <label>Male</label>
                    <input type="radio" 
                    value="male"
                    onChange={handleInput}
                    name="gender" id="gender" 
                    checked={userReg.gender=="male"}
                    />

                    <label>Female</label>
                    <input type="radio" 
                    value="female"
                    onChange={handleInput}
                    name="gender" id="gender" 
                    checked={userReg.gender=="female"}
                    />
                   <p>{userReg.gender}</p>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="text" autoComplete="off" 
                    value={userReg.age}
                    onChange={handleInput}
                    name="age" id="age" />
                </div>
                <div>
                    <label htmlFor="hw">Height & Weight</label>
                    <input type="text" autoComplete="off" 
                    value={userReg.ht}
                    onChange={handleInput}
                    name="ht" id="ht" />
                    <input type="text" autoComplete="off" 
                    value={userReg.wt}
                    onChange={handleInput}
                    name="wt" id="wt" />
                </div>
                <div>
                    <label htmlFor="prof">Profession</label>
                    <input type="text" autoComplete="off" 
                    value={userReg.prof}
                    onChange={handleInput}
                    name="prof" id="prof" />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" autoComplete="off" 
                    value={userReg.address}
                    onChange={handleInput}
                    name="address" id="address" />
                </div>
                <button type="submit" onSubmit onClick={()=> setActive("two")}>Continue</button>
            </form>
            
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
            
            
            <div className="Form2">
                {Active === "two" && <Form2 />}
                
            </div>

            
            
        </div>
    );
};





export default Form;