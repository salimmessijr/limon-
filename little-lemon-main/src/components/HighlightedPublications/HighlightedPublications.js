import greekSalad from "../../images/greek salad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import lemonDessert from "../../images/lemon dessert.jpg";
import "./highlighted-publications.scss";
import { Link } from "react-router-dom";
import PublicationCard from "../PublicationCard/PublicationCard";

const HighlightedPublications = () => {
  const cardsContent = [
    {
      image: greekSalad,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis culpa, ducimus unde facilis incidunt aut dolores odio excepturi iure.",
      buttonText: "Order a delivery",
    },
    {
      image: bruchetta,
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis culpa, ducimus unde facilis incidunt aut dolores odio excepturi iure.",
      buttonText: "Order a delivery",
    },
    {
      image: lemonDessert,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis culpa, ducimus unde facilis incidunt aut dolores odio excepturi iure.",
      buttonText: "Order a delivery",
    },
  ];

  return (
    <div className="highlighted-publications-wrapper">
      <div className="header">
        <div className="title">This Week Specials</div>
        <div className="button">
          <Link to="/menu" className="menu-button">
            Menu
          </Link>
        </div>
      </div>
      <div className="cards">
        {cardsContent.map((card) => (
          <PublicationCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

export default HighlightedPublications;
