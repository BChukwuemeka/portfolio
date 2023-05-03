import './Portfolio.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, Autoplay} from 'swiper';
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



const Portfolio = () => {

 SwiperCore.use([Autoplay])

    return ( 
        <div className="portfolio" id='portfolio'>
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>
            <span>Touch Image to view</span>

                    {/* slider */}
            <Swiper
                spaceBetween={10}
                        // loop= {true}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                            // window width is >= 640px
                            640: {
                            width: 640,
                            slidesPerView: 1,
                            },
                            // window width is >= 760px
                            760: {
                            width: 760,
                            slidesPerView: 2,
                            },
                            // window width is >= 1024px
                            1024: {
                            width: 1024,
                                slidesPerView: 2,
                                            spaceBetween: 10,
                            }
                            }}


                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000}}
                    >
                            <SwiperSlide ><Link to="https://bchukwuemeka.github.io/brichandbezgym/" ><img src={gymWebsite} alt='FeatureImage' /></Link></SwiperSlide>
                            <SwiperSlide ><Link to="https://bchukwuemeka.github.io/pordministries/" ><img src={PORDMinistries} alt='FeatureImage' /></Link></SwiperSlide>
                            <SwiperSlide ><Link to="https://bchukwuemeka.github.io/brichandbezai/" ><img src={AIWebsite} alt='FeatureImage' /></Link></SwiperSlide>
                            <SwiperSlide ><img src={dataWebsite} alt='FeatureImage' /></SwiperSlide>
                            <SwiperSlide ><Link to="/" ><img src={Portsite} alt='FeatureImage' /></Link></SwiperSlide>
                            <SwiperSlide ><Link to="https://bchukwuemeka.github.io/portsmouthservices/" ><img src={ContainerSite} alt='FeatureImage' /></Link></SwiperSlide>
                </Swiper>
       
        </div>
     );
}
 
export default Portfolio;