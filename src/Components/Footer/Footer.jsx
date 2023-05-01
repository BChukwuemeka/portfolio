import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'
import { Link } from 'react-router-dom'



const Footer = () => {
    return ( 
        <div className="footer">
            <img src={Wave} alt="" />
            <div className="f-content">
                <span>chuquemekachuks12@gmail.com</span>
                <div className="f-icons">
                    <Link to= 'https://instagram.com/brichandbez_onlinemall'>
                        <Insta />
                    </Link>

                    <Link to='https://facebook.com/OjukwuCouture'>
                        <Facebook />
                    </Link>

                    <Link to='https://BChukwuemeka.github.io'>
                        <Github />
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;