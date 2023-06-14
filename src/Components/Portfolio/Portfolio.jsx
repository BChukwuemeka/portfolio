import './Portfolio.css'
// import { Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore, { Pagination, Autoplay} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css'
import Portsite from '../../img/portfolioPics/portfolio01.png'
import AIWebsite from '../../img/portfolioPics/portfolio02.png'
import dataWebsite from '../../img/portfolioPics/portfolio03.png'
import gymWebsite from '../../img/portfolioPics/portfolio04.png'
import PORDMinistries from '../../img/portfolioPics/portfolio05.png'
import ContainerSite from '../../img/portfolioPics/portfolio06.png'
import { Link } from 'react-router-dom';
import Card2 from '../Card2/Card2';



const Portfolio = () => {





const Profiles = [
    {
        id: 1,
        image: gymWebsite,
        name: 'John Doe',
        link: "https://bchukwuemeka.github.io/brichandbezgym/"
    },
    {
        id: 2,
        image: PORDMinistries,
        name: 'Daniel vinyo',
        link: "https://bchukwuemeka.github.io/pordministries/"
    },
    {
        id: 3,
        image: AIWebsite,
        name: 'Edem Quist',
        link: "https://bchukwuemeka.github.io/brichandbezai/"
    },
    {
        id: 4,
        image: Portsite,
        name: 'Shatta Wale',
        link: 'https://BChukwuemeka.github.io/portfolio'
    },
    {
        id: 5,
        image: dataWebsite,
        name: 'Wayne Carter',
        link: 'https://BChukwuemeka.github.io/brichandbezwebsite'
    },
    {
        id: 6,
        image: ContainerSite,
        name: 'Wayne Carter',
        link: "https://bchukwuemeka.github.io/portsmouthservices/"
    }
]



//  SwiperCore.use([Autoplay])

    return ( 
            <div className="portfolio" id='portfolio'>
                    
                    <div className="heading">
                        <span>Recent Projects</span>
                        <span>Portfolio</span>
                        <span>Touch Image to go to Website</span>
                    </div>
          

                    

  
          <section className="PortfolioImgs">
            <div className="container PortfolioImgs__container">
                {
                        Profiles.map(({ id, image, name, job, link }) => {
                                return (
                                        <Link style={{textDecoration: 'none', margin: '2rem auto'}} to={link} ><Card2 onClick key={id} image={image} name={name} job={job} link={link}
                                        /></Link>
                                )
                        }
                                            )}
                                    <span>View more</span>
                    </div>
                    </section>
        </div>
     );
}
 
export default Portfolio;