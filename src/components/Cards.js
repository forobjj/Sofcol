import React from "react";
import Card from "./Card";
import compras from "../assets/compras.jpg";
import users from "../assets/users.jpg";
import proyectos from "../assets/proyectos.jpg";

const cards = [
  {
    id: 1,
    title: "Gestion Avances",
    image: compras,
    text: "En esta ventana se pueden realizar pedidos de compra de los diferentes proyectos ofrecidos en la página.",
  },
  {
    id: 2,
    title: "Gestion Vendedores",
    image: users,
    text: "En esta ventana se podrán administrar los Vendedores registrados en la página, tanto su información como su rol en la página.",
  },
  {
    id: 3,
    title: "Gestion Proyectos",
    image: proyectos,
    text: "En esta ventana se pueden ver todos los Proyectos disponibles en la empresa, se podrán agregar, modificar o eliminar.",
  },
];

function Cards() {
  return (
    <div className="container justify-content-center align-items-center dashboard-cards-container">
      <div className="row ">
        {cards.map((card) => (
          <div className="col-md-4 " key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
