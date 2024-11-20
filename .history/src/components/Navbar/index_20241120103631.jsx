import { AlignJustify, X } from "lucide-react";
import "./styles.css";

export function Navbar() {
  const menuOpenButton = document.querySelector("#menu-open-button");

  return (
    <header>
      <nav className="navbar section-content">
        <a href="/" className="nav-logo">
          <h2 className="logo-text">☕Coffee</h2>
        </a>
        <ul className="nav-menu">
          <button id="menu-close-button">
            <X color="black" size={40} />
          </button>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
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
        <button id="menu-open-button">
          <AlignJustify color="white" size={40} />
        </button>
      </nav>
    </header>
  );
}