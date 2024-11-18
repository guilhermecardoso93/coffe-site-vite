import X from "../../assets/x.svg";
import "./styles.css";

export function Navbar() {
  return (
    <header>
      <nav className="navbar section-content">
        <a href="/" className="nav-logo">
          <h2 className="logo-text">☕Coffee</h2>
        </a>
        <ul className="nav-menu">
          <button id="menu-close-button">
            <img src={X} alt="" />
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
            <img src={X} alt="" />
          </button>
      </nav>
    </header>
  );
}