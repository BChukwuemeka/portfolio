import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import {Link} from 'react-scroll'
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context";
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'





const Navbar = () => {

// const [closeBar, setcloseBar] = useState (false)
// const [showMenu, setshowMenu] = useState(false)

  const [isNavShowing, setIsNavShowing] = useState(false);

const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;




  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
          
        <div className="n-name">Engr Chukwuemeka</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">

                            


        <div className="n-list">
              <ul >

              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>

                <li>
                    Home
                </li>

                </Link>

                <Link to="services" spy={true} smooth={true}>

                <li>
                    Services
                </li>

                </Link>

                <Link to="experience" spy={true} smooth={true}>

                <li>
                    Experience
                </li>

                </Link>

                <Link to="portfolio" spy={true} smooth={true}>

                <li>
                    Portfolio
                </li>

                </Link>

                <Link to="testimonial" spy={true} smooth={true}>

                <li>
                    Testimonial
                </li>

                </Link>

                <Link to="contact" spy={true} smooth={true}>
                      <li>
                        contact
                      </li> 
                        
                </Link>
            
            

                  
          </ul>
          
         <div className="nav__toggle-btn" onClick=  {() =>  setIsNavShowing(prev => !prev)}>
                        {
                            isNavShowing ? <MdOutlineClose/>  : <GoThreeBars />
                        }
          </div>
              

          </div>


            {/* Mobile Nav */}

                           <div className={`mobile-nav ${isNavShowing ? 'show__nav' : 'hide__nav'}`}  id="" style={ darkMode ? {color : "black", background : "white"} : {color : "white", background : "black"} }>
            <ul className="mobile-lists" >
    
                    <Link onClick=  {() =>  setIsNavShowing(false)} activeClass="active" to="Navbar"  spy={true} smooth={true}>
                      <li>
                          Home
                      </li>
      
                    </Link>
    
                    <Link onClick=  {() =>  setIsNavShowing(false)} to="services" spy={true} smooth={true}>
                      <li>
                          Services
                      </li>
                    </Link>
    
                    <Link onClick=  {() =>  setIsNavShowing(false)} to="experience" spy={true} smooth={true}>
                      <li>
                          Experience
                      </li>
                    </Link>
    
                    <Link onClick=  {() =>  setIsNavShowing(false)} to="portfolio" spy={true} smooth={true}>
                      <li>
                          Portfolio
                      </li>
                    </Link>

                    <Link to="testimonial" spy={true} smooth={true}>
                      <li>
                          Testimonial
                      </li>
                    </Link>
    
                    <Link to="contact" spy={true} smooth={true}>
                          <li>
                            contact
                          </li> 
                            
                    </Link>
                </ul>
                                    
                                                    </div>  
            

              
              </div>
              

            
    </div>
    
                          


  );
};

export default Navbar;
