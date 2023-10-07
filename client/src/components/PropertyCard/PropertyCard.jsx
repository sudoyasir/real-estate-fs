import React from "react";
import "./PropertyCard.css";
import { AiFillHeart } from "react-icons/ai";

const PropertyCard = ({ card }) => {
  return (
    <div>
      <div className="flexColStart r-card">
        <AiFillHeart size={24} color="white"/>
        <img src={card.image} alt="Home Image" />
        <span className="secondaryText r-price">
          <span style={{ color: "orange" }}>$</span>
          <span>{card.price}</span>
        </span>
        <span className="primaryText">{card.name}</span>
        <span className="secondaryText">{card.detail}</span>
      </div>
    </div>
  );
};

export default PropertyCard;
