import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import "./styles.css";

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header>
      <nav className="navbar section-content">
        <a href="/" className="nav-logo">
          <h2 className="logo-text">☕Coffee</h2>
        </a>
        {/* Menu com classe condicional */}
        <ul
          className={`nav-menu ${isMobileMenuOpen ? "show-mobile-menu" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <button
            id="menu-close-button"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X color="black" size={40} />
          </button>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/menu" className="nav-link">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="/gallery" className="nav-link">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <button
          id="menu-open-button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Open menu"
        >
          <AlignJustify color="white" size={40} />
        </button>
      </nav>
    </header>
  );
}
