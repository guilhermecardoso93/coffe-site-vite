import { MapPinHouse } from 'lucide-react';
export function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="section-content">
        <ul className="contact-info-list">
          <li className="contact-info">
            <MapPinHouse />
          </li>
        </ul>
      </div>
    </section>
  );
}