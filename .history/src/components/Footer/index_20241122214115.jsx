import { Instagram, Twitter, Youtube } from "lucide-react";
import "./styles.css";

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="section-content">
        <p className="copyright-text"> © 2024 Coffee Shop</p>

        <div className="social-link-list">
          <a href="" className="social-link">
            <Instagram />
          </a>
          <a href="" className="social-link">
            <Twitter />
          </a>
          <a href="" className="social-link">
            <Youtube />
          </a>
        </div>
        <p className="policy-text">
          <a href="" className="policy-link">
            Privacy Policy
          </a>
          <span className="separator">.</span>
          <a href="" className="policy-link">
            Refund Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
