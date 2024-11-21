import {food_list} from "../../assets/assets";

import "./styles.css";

export function Menu() {
  return (
    <div>
      <section className="menu-section">
        <div className="section-content">
          <ul className="menu-list">
            {food_list.food[0].map((item) => {
              return (
                <li key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
