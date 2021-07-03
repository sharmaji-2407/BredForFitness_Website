import React,{useState} from 'react'
import {Route} from 'react-router-dom'
import "./Home.css"
import Logo from "./banner_raw.png";
import Form from './Form';
import AboutUs from './AboutUs'
import {Link} from 'react-scroll'
import Contact from './Contact';


const Home =() =>{
    const [nav, setnav] = useState("hid");
    return(
        
        <div className="cont">
            <img className="logo" src={Logo} alt="Bred For Fitness" />
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

            


            <section id="form">
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
            <section id="contact">
                <div className="Form1">
                    {nav === "contact" && <Contact />}
                </div>
            </section>  
            
        </div>
        
    );
};

export default Home;



