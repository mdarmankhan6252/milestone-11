import img_1 from '../assets/img/carousel1.jpg'
import img_2 from '../assets/img/carousel2.jpg'
import img_3 from '../assets/img/carousel3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
   return (
      <>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               <Slide image={img_1} title={'Get your web development Project in a minute'}/>
            </SwiperSlide>
            <SwiperSlide>
            <Slide image={img_2} title={'Get your web development Project in a minute'}/>
            </SwiperSlide>
            <SwiperSlide>
            <Slide image={img_3} title={'Get your web development Project in a minute'}/>
            </SwiperSlide>
         </Swiper>
      </>
   );
}
