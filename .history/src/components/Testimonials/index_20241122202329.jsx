import {
  Swiper,
  SwiperSlide,
  Navigation,
  Pagination,
  History,
} from "swiper/react";
import "swiper/css";
import { testimonials } from "../../assets/assets";
import "./styles.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section className="testimonials-section">
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
                    <SwiperSlide>
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
