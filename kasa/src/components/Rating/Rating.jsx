import React from "react";
import emptyStar from "../../assets/stars/emptyStar.svg";
import fullStar from "../../assets/stars/fullStar.svg";
import './Rating.scss'; 

export default function Rating({ rating }) {
  // Créez un tableau de longueur 5 rempli de true jusqu'au rating
  const stars = Array(5).fill(true, 0, rating).fill(false, rating);

  return (
    <div className="rating-container">
      {stars.map((isFull, index) => (
        <img
          key={index}
          src={isFull ? fullStar : emptyStar}
          alt={isFull ? "full-star" : "empty-star"}
          className="star-icon"
        />
      ))}
    </div>
  );
}