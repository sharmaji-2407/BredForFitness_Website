import React,{useState} from 'react'
import {Route} from 'react-router-dom'
import "./Home.css"
import Logo from "./banner_raw.png";
import Form from './Form';
import Form2 from './Form2';
import AboutUs from './AboutUs'
import {Link} from 'react-scroll'
import Contact from './Contact';


const Home =() =>{
    const [nav, setnav] = useState("hid");
    return(
        
        <div className="cont">
        <section id="main">
        <Link to="main" spy={true} smooth={true} duration={200}> <img className="logo" src={Logo} alt="Bred For Fitness" /></Link>
            <div className="nav">
                <nav>
                    <Link to="form" spy={true} smooth={true} duration={200}><a href="#" onClick={()=> setnav("aboutus")}>About Us</a> </Link>
                    <Link to="form" spy={true} smooth={true} duration={200}><a href="#" onClick={()=> setnav("contact")}>Contact</a> </Link>
                    
                    
                </nav>
            </div>
            <div className="block_up">
                <div className="bg_rect">
                    <div className="Container col-6 col-lg-4">
                
                        <p className="welcome_text">
                            Workout Program Made Just For You
                        </p>
                    
                    </div>
                    <div className="hd_txt"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    <Link to="form" spy={true} smooth={true} duration={100}><button className="but1 form_btn" onClick={()=> setnav("show")}>Get Started</button></Link>
                    <div className="img"></div>
                    <div className="img2"></div>
                 </div>
            </div>
            </section>
            


            <section id="form" className="sec">
                <div className="Form1">
                    {nav === "show" && <Form />}
                    {nav === "contact" && <Contact />}
                    {nav === "aboutus" && <AboutUs />}
                </div>
            </section>
            
            {/* {/* <section id="aboutus">
                <div className="Form1">
                    {nav === "aboutus" && <AboutUs />}
                </div>
            </section>  */}
            <section id="form2">
                <div className="Form1">
                    {nav === "form2" && <Form2 />}
                </div>
            </section>  
            
        </div>
        
    );
};

export default Home;
                    
                   
                    



