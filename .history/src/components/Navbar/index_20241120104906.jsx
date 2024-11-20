import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import "./styles.css";

export function Navbar() {
  // Estado para controlar a visibilidade do menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Alternar o estado do menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("show-mobile-menu", !isMobileMenuOpen); // Para adicionar/remover a classe no body
  };

  return (
    <header>
      <nav className="navbar section-content">
        <a href="/" className="nav-logo">
          <h2 className="logo-text">☕Coffee</h2>
        </a>
        {/* Menu com classe condicional */}
        <ul className={`nav-menu ${isMobileMenuOpen ? "show-mobile-menu" : ""}`}>
          <button id="menu-close-button" onClick={toggleMobileMenu}>
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
        {/* Botão para abrir o menu */}
        <button id="menu-open-button" onClick={toggleMobileMenu}>
          <AlignJustify color="white" size={40} />
        </button>
      </nav>
    </header>
  );
}
