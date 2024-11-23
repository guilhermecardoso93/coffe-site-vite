import { gallery } from "../../assets/assets";
export function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="section-title">Gallery</h2>
      <div className="section-content">
        <ul className="gallery-list">
          {gallery.map((index, item) => {
            return <img src={image} alt="" key={index}/>;
          })}
        </ul>
      </div>
    </section>
  );
}
