import React,{useState} from 'react';


const Button = ({title,val}) => {
    const [active, setactive] = useState("one");
    return (
    <>
    {/* <button onClick={()=> setactive(val)}> {title} </button>
    <div>{active === "two" && <Form2 />}</div> */}
    

    
    </>
    )
        
}

export default Button;
