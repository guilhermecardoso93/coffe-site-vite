import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import "./styles.css";

export function Navbar() {
  // Estado para controlar a visibilidade do menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Funções para abrir/fechar o menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar section-content">
        <a href="/" className="nav-logo">
          <h2 className="logo-text">☕Coffee</h2>
        </a>
        {/* Classe condicional para o menu */}
        <ul
          className={`nav-menu ${isMobileMenuOpen ? "show-mobile-menu" : ""}`}
        >
          <button id="menu-close-button">
            <X color="black" size={40} onClick={closeMobileMenu} />
          </button>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <button id="menu-open-button" onClick={toggleMobileMenu}>
          <AlignJustify color="white" size={40} />
        </button>
      </nav>
    </header>
  );
}
