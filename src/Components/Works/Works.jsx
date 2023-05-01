import './Works.css'
import Upwork from '../../img/upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/shopify.png'
import Facebook from '../../img/facebook.png'
import { useContext } from 'react'
import {ThemeContext} from '../../Context'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



const Works = () => {

    // context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


    return ( 
        <div className="works" id='works'>
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>
                </span>
                <span>Brands & Clients</span>
                <span>Boxtel Logistics Abuja
                     <br/> Merchandising Frontiers LTD Lagos.
                     <br/> Interstreet Messenger Lagos.
                     <br/> SmartHomes Nigeria LTd Abuja.
                     <br/> CooperateFoot Nigeria LTd Abuja.
                     <br/> Pool of redemption Assemblies Nyanya.
                </span>

                <Link to="/contact">
                    
                        <button className="button s-button">
                            Contact me
                        </button>
                    </Link>


                     <div className="blur s-blur">

                     </div>
            </div>

                {/* right side */}
                <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }} 
                    className="w-mainCircle">
                        <div className="w-secCircle">
                            <img src={Upwork} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Fiverr} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Amazon} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Shopify} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Facebook} alt="" />
                        </div>
                    </motion.div>
                                {/* background circle */}

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
                </div>


        </div>
     );
}
 
export default Works;