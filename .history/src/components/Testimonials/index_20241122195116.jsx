import { testimonials } from "../../assets/assets";
import "./styles.css";

export function Testimonials() {
  
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <div className="section-content">
        <div className="slider-container">
          <div className="slider-wrapper">
            <ul className="testimonials-list">
              {testimonials.map((item, index) => {
                return (
                  <li className="testimonial" key={index}>
                    <img src={item.image} alt="" className="user-image" />
                    <h3 className="name">{item.name}</h3>
                    <i className="feedback">{item.text}</i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
