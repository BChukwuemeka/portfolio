import Card from '../Card/Card';
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './resume.pdf'
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from "../../Context";






const Services = () => {

    // context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };


    return ( 
        <div className="services" id='services'>

            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>services</span>
                <span className='redText'>Things I enjoy designing </span>
                <span>UX, UI, Web, Apps, Logo</span>
                <span className='redText'> Languages I Speak </span>
                <span>HTML, CSS, JavaScript
                </span><span>Some Frameworks/Libraries in my shed</span>
                <span> , React, Node.js, Express, MongoDb
                </span>

                     <a href={Resume} download>

                        <button className="button s-button">
                            Download CV
                        </button>
                     </a>


                     <div className="blur s-blur">

                     </div>
            </div>
            
            {/* right side */}
            <div className="cards">
                <motion.div
                initial={{ left: "5rem" }}
                whileInView={{ left: "10rem" }}
                transition={transition}
                >
                    <Card 
                    emoji = {HeartEmoji}
                    heading = {"Design"}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </motion.div>

                <motion.div
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                >
                    <Card 
                    emoji = {Glasses}
                    heading = {"Developer"}
                    detail = {"Html, Css, JavaScript, React, vue.js,"}
                    />
                </motion.div>

                <motion.div
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
                >
                    <Card 
                    emoji = {Humble}
                    heading = {"UI/UX"}
                    detail = {"I like to code things from scratch, and enjoy bringing ideas to life in the browser"}
                    />
                </motion.div>

                <div className="blur s-blur2"></div>

            </div>

        </div>
     );
}
 
export default Services;