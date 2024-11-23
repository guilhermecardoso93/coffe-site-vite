import { gallery } from "../../assets/assets";
import './styles.css'
export function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="section-title">Gallery</h2>
      <div className="section-content">
        <ul className="gallery-list">
          {gallery.map((item, index) => {
            return (
              <img
                src={item}
                alt={`Gallery item ${index}`}
                key={index}
                className="gallery-image"
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
