import { food_list } from "../../assets/assets";

import "./styles.css";

export function Menu() {
  return (
    <section className="menu-section">
      <h2 className="section-title">Our Menu</h2>
      <div className="section-content">
        <ul className="menu-list">
          {food_list.map((item) => {
            const precoFormatado = item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });

            return (
              <li key={item._id} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-image" />
                <h3 className="name">{item.name}</h3>
                <h2 className="price">{precoFormatado}</h2>
                <p className="description">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
