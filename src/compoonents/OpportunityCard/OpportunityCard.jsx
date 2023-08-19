import React from "react";
import "./OpportunityCard.scss";


const OpportunityCard = ({ imgSrc, text }) => {
  return (
      <div className="opp-card">
        <div
          className="opp-card__img"
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <div className="opp-card__img-shadow"></div>
        </div>
        <p className="opp-card__text">{text}</p>
        <div className="card-shadow"></div>
      </div>

  );
};

export default OpportunityCard;
