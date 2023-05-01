import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Profile1 from '../../img/profilepics/profile1.jpg'
import Profile2 from '../../img/profilepics/profile2.jpg'
import Profile3 from '../../img/profilepics/profile3.jpg'
import Profile4 from '../../img/profilepics/profile4.jpg'
import { Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'





const Testimonial = () => {

     SwiperCore.use([Autoplay])

    const clients = [
        {img: Profile1,
        review: 
"            I have worked with Chukwuemeka and his team on few projects, always on time and takes his work seriously. I always trust him to deliver on time",
        },
        {img: Profile2,
        review: 
"            A special thanks to brich and bez family of designers and brand managers, you guys rock. you saved my skin a number of times. keep up the good work.",
        },
        {img: Profile3,
        review: 
"            If you need a clear thinker who can bring your ideas to life, Chukwuemeka has all you need and he is always on time.",
        },
        {img: Profile4,
        review: 
"            I remember my work with you guys, customer relation is at a 100%, cool calm designers, they listen to what you want and deliver above your expectations. Great team.",
        }
    ] 



    return ( 
        <div className="t-wrapper" id='testimonial'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me</span>
                <div className="blur t-blur1"></div>
                <div className="blur t-blur2"></div>
            </div>

                    {/* slide */}
                    <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{clickable: true}}
                    >

                    {clients.map((client, index) => {
                        return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={client.img} alt=""/>
                            <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                        )
                    })}

                    </Swiper>

             
        </div>
     );
}
 
export default Testimonial;