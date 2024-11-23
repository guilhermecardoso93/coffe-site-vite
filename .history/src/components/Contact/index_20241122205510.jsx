import { MapPinHouse, Mail, Phone  } from "lucide-react";
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
            <Mail  />
            <p>123 Campsite Avenue, Wilderness, CA 98765</p>
          </li>
          <li className="contact-info">
            <Phone  />
            <p>(123) 456-78909)</p>
          </li>
          <li className="contact-info">
            <MapPinHouse />
            <p>123 Campsite Avenue, Wilderness, CA 98765</p>
          </li>
          <li className="contact-info">
            <MapPinHouse />
            <p>123 Campsite Avenue, Wilderness, CA 98765</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
