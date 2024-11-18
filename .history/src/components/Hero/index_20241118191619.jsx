import "./styles.css";

export function Hero() {
  return (
    <main>
      <section className="hero-section">
        <div className="section-content">
          <div className="hero-details">
            <h2 className="title">Best Coffee</h2>
            <h3 className="subtitle">
              Make your day great with our special coffee!
            </h3>
            <p className="description">
              Welcome to uor coffee paradise, where every tells a story end
              every cup sparks joy.
            </p>
            <div className="buttons">
              <a href="#" className="button order-now">
                {" "}
                Order Now
              </a>
              <a href="#" className="button order-now">
                {" "}
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}