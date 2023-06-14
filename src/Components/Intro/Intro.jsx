import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import boy from '../../img/portfolioPics/portfolioimgg.png'
import thumbup from '../../img/thumbup.png'
// import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import Form from '../Form/Form'



const Intro = () => {

    // context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    const transition = {duration : 2, type: 'spring'}

    const [isMoreShowing, setIsMoreShowing] = useState(false)

    return ( 



        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
                    <span>Chukwuemeka Chukwuemeka</span>
                    <span>I specialize in front-end development using React, With in-depth knowledge of JavaScript, Object Oriented Programming, node express, and mongoose, I am well-equipped to tackle a wide range of web development challenges.</span>{isMoreShowing && <p className='more'>Creating beautiful, user-friendly interfaces that are optimized for performance and scalability. Additionally, my expertise in direct response email copywriting and cold email copywriting allows me to deliver compelling content that drives engagement and conversion.

                        Over the years, I have worked on numerous projects, from simple landing pages to complex web applications. I take pride in my ability to communicate effectively with clients, understand their unique needs, and deliver solutions that exceed their expectations. Whether you need a website built from scratch or want to improve your existing web presence, I am confident that I can help you achieve your goals.

                        So if you're looking for a talented web developer who can bring your vision to life, look no further. Contact me today to discuss your project and see how I can help you take your online presence to the next level.</p>}
                    
                  <img src='../../img/portfolioPics/portfolioImg.png' alt=''/>
                    
                    <button onClick={() => setIsMoreShowing(prev => !prev)} className="button i-button">
                        
                        {
                        !isMoreShowing ? 'More' : 'Less'
                    }
                    
                    </button>
                        

                      


                    <div className="i-icons">
                        <Link to='https://github.com/BChukwuemeka'>
                            <img src={Github} alt="" />
                        </Link>

                        <Link to='https://www.linkedin.com/in/chukwuemeka-chukwuemeka'>
                            <img src={Linkedin} alt="" />
                        </Link>  
                        
                        <Link to='https://instagram.com/brichandbez_onlinemall'>
                            <img src={Instagram} alt="" />
                        </Link>
                </div>
                </div>

            </div>

            <div className="i-right">
                
                {/* <img src={Vector1} alt=''/>
                <img src={Vector2} alt=''/> */}
                <img src={boy} alt=''/>


                
                <motion.img 
                initial={{left: "-36%"}}
                whileInView={{left: "-24%"}}
                transition={transition}
                src={glassesimoji} alt=''/>


                <motion.div
                initial={{top:"-4%", left: "-68%"}}
                whileInView={{left: "68%"}}
                transition={transition}
                 className='f-div1'>

                    {/* <FloatingDiv img={Crown} text1={'Web'} text2={'Developer'} /> */}
                
                </motion.div>

                <motion.div
                initial={{left: "9rem", top: "18rem"}}
                whileInView={{left: "0rem"}}
                transition={transition}
                 className='f-div2'>
                    <FloatingDiv img={thumbup} text1={'Best Design'} text2={'Award'} />
                </motion.div>

                { /* blur divs */ }

                <div className="blur"></div>
                <div className="blur-blue"></div>


                
               
            </div>

        </div>
     );
}
 
export default Intro;