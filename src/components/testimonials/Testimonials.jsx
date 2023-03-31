import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nemo? Corrupti sit atque a natus tenetur possimus maiores at fugit pariatur beatae. Illum quo dicta architecto, dignissimos reiciendis amet sunt!",
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nemo? Corrupti sit atque a natus tenetur possimus maiores at fugit pariatur beatae. Illum quo dicta architecto, dignissimos reiciendis amet sunt!",
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nemo? Corrupti sit atque a natus tenetur possimus maiores at fugit pariatur beatae. Illum quo dicta architecto, dignissimos reiciendis amet sunt!",
  },
  {
    avatar: AVTR4,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nemo? Corrupti sit atque a natus tenetur possimus maiores at fugit pariatur beatae. Illum quo dicta architecto, dignissimos reiciendis amet sunt!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__REVIEW">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;