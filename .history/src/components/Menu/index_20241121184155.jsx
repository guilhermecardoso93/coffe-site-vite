import { food_list } from "../../assets/assets";

import "./styles.css";

export function Menu() {
  return (
    <div>
      <section className="menu-section">
        <div className="section-content">
          <ul className="menu-list">
            {food_list.map((item) => {
              return (
                <li key={item._id} className="menu-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-image"
                  />
                  <h3>{item.name}</h3>
                  <h2>R${item.price}</h2>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
