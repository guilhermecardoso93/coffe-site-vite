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
        <ul className={`nav-menu ${isMobileMenuOpen ? "show-mobile-menu" : ""}`}>
          <button id="menu-close-button" onClick={closeMobileMenu}>
            <X color="black" size={40} />
          </button>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMobileMenu}>
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMobileMenu}>
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMobileMenu}>
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
