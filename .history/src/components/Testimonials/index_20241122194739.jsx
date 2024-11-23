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
              <li className="testimonial"></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
