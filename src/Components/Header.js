import { Link } from "react-router-dom";
import { swiggy,home,aboutUs } from "./utils"; 
import {  contact, cart } from "./utils"; 
 
 const Header = ( ) =>{
    return(
        
            <div className="Header" >
                <div className="Logo-Container">
                    <Link to='/'><img className="Logo" src={swiggy} alt="Logo"/></Link>
                </div>
                <div className="Menu">
                    <ul className="List" >
                        <li><Link to="/"><img className="home" src={home} alt="Home"/></Link></li>
                        <li><Link to="/about"><img className="about" src={aboutUs} alt="about"/></Link></li>
                        <li><Link to="/contact"><img className="contact" src={contact} alt="contact"/></Link></li>
                        <li><Link to="/cart"><img className="cart" src={cart} alt="cart"/></Link></li>
                    </ul>
                </div>
            </div>
    
    )
 }

 export default Header;


