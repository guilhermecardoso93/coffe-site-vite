import { gallery } from "../../assets/assets";
import "./styles.css";
export function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="section-content">
        <ul className="gallery-list">
          {gallery.map((item, index) => {
            return (
              <li className="gallery-item" key={index}>
                <img
                  src={item}
                  alt={`Gallery item ${index}`}
                  className="gallery-image"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
