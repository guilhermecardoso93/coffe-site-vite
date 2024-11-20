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
          <h2 className="section-title">About Us</h2>
          <p>
            At Coffee House in Berndorf, Germany, we pride ourselves on being a
            go-to destination for coffee lovers and conversation seekers alike.
            We're dedicated to providing an exceptional coffee experience in a
            cozy and inviting atmosphere, where guests can relax, unwind, and
            enjoy their time in comfort.
          </p>
        </div>
      </div>
    </section>
  );
}
