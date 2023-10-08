import React from "react";
import "./PropertyCard.css";
import { AiFillHeart } from "react-icons/ai";
import {truncate} from "lodash"
import { useNavigate } from "react-router";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flexColStart r-card" onClick={()=>navigate(`../properties/${card.id}`)}>
        <AiFillHeart size={24} color="white"/>
        <img src={card.image} alt="Home Image" />
        <span className="secondaryText r-price">
          <span style={{ color: "orange" }}>$</span>
          <span>{card.price}</span>
        </span>
        <span className="primaryText">{truncate(card.title, {length: 15})}</span>
        <span className="secondaryText">{truncate(card.description, {length: 80})}</span>
      </div>
    </div>
  );
};

export default PropertyCard;
