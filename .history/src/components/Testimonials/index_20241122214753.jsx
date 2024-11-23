import { Navigation, Pagination, History } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonials } from "../../assets/assets";
import "./styles.css";

export function Testimonials() {
  return (
    <section className="testimonials-section" id='testimonials'>
      <h2 className="section-title">Testimonials</h2>
      <div className="section-content">
        <div className="slider-container">
          <div className="slider-wrapper">
            <ul className="testimonials-list">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                history={{
                  key: "slide",
                }}
                modules={[Navigation, Pagination, History]}
                className="mySwiper"
              >
                {testimonials.map((item, index) => {
                  return (
                    <SwiperSlide data-history={index}>
                      <li className="testimonial" key={index}>
                        <img src={item.image} alt="" className="user-image" />
                        <h3 className="name">{item.name}</h3>
                        <i className="feedback">{item.text}</i>
                      </li>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
