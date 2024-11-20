import AboutImg from "../../assets/images/about-image.jpg";
import "./styles.css";
export function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-content">
        <div className="about-image-wrapper">
          <img src={AboutImg} alt="" className="about-image" />
        </div>
        <div className="about-details">
          <h2 className="section-title">
            About Us
          </h2>
        </div>
      </div>
    </section>
  );
}
