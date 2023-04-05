import "./testimonials.css";
import AVTR1 from "../../assets/getu.png";
import AVTR2 from "../../assets/neba.png";
import AVTR3 from "../../assets/bart.png";
import AVTR4 from "../../assets/mario.png";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Getu Tadesse",
    position: "software engineer",
    review:
      "Abraham consistently delivers high-quality code under tight deadlines and demonstrates strong problem-solving abilities. Highly recommend for any software engineering role.",
  },
  {
    avatar: AVTR2,
    name: "Nebyou Chaka",
    position: "software engineer",
    review:
      "[Name] is a skilled software engineer with excellent communication and collaboration skills. A valuable team player who consistently meets project goals.",
  },
  {
    avatar: AVTR3,
    name: "Bart Budak",
    position: "senior software engineer",
    review:
      "I have worked with Abraham for a years and have always been impressed by their technical expertise and attention to detail. They consistently deliver top-notch work and are a pleasure to work with.",
  },
  {
    avatar: AVTR4,
    name: "Mario Brown",
    position: "software engineer",
    review:
      "As a software engineering manager, I have had the pleasure of working with many talented engineers, and Abraham is one of the best. They are able to quickly grasp complex concepts and deliver effective solutions. I highly recommend Abraham for any software engineering position.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Co-workers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, position, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <h5 style={{ color: "gray" }}>{position}</h5>
              <small className="client__REVIEW">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
