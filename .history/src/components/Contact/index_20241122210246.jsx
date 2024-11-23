import { MapPinHouse, Mail, Phone, Clock, Globe } from "lucide-react";
import "./styles.css";
export function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="section-content">
        <ul className="contact-info-list">
          <li className="contact-info">
            <MapPinHouse />
            <p>123 Campsite Avenue, Wilderness, CA 98765</p>
          </li>
          <li className="contact-info">
            <Mail />
            <p>123 Campsite Avenue, Wilderness, CA 98765</p>
          </li>
          <li className="contact-info">
            <Phone />
            <p>(123) 456-78909</p>
          </li>
          <li className="contact-info">
            <Clock />
            <p>Monday - Friday | 09:00 AM - 05:00 PM</p>
          </li>
          <li className="contact-info">
            <Globe />
            <p>www.codingnepalweb.com</p>
          </li>
        </ul>
        <form action="#" className="contact-form">
          <input
            type="text"
            className="form-input"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="form-input"
            placeholder="Your e-mail"
            required
          />
          <textarea className="form-input"></textarea>
        </form>
      </div>
    </section>
  );
}
