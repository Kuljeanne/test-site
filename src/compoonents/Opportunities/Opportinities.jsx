import React from "react";
import OpportunityCard from "../OpportunityCard/OpportunityCard";
import Ellipse from "../../assets/icons/ellipse";

import "./Opportunities.scss";

const Opportinities = () => {
  const opportunitiesList = [
    {
      imgSrc: "img/stars.png",
      text: "Откроешь свой первый криптокошелек и научишься c ним работать",
    },
    {
      imgSrc: "img/fun.png",
      text: "Поймёшь, как выбирать правильные дропы",
    },
    {
      imgSrc: "img/money.png",
      text: "Построишь план по быстрому приумножению заработанных средств",
    },
    {
      imgSrc: "img/sunglasses.png",
      text: "Узнаешь кто такие холдеры и флипперы",
    },
  ];
  return (
    <section className="opportunities wrapper" id="opp">
      <div className="opp-container">
        <Ellipse className="opp-ball" color="blue" width={85} />
        <Ellipse className="opp-ball" color="purple" width={151} />
        <Ellipse className="opp-ball" color="purple" width={131} />
        <div className="shadow opp-shadow"></div>
        <div className="shadow opp-shadow"></div>
        <h2 className="opportunities__title">Что даст тебе обучение?</h2>
        <ul className="opportunities__list">
          {opportunitiesList.length > 0
            ? opportunitiesList.map(({ imgSrc, text }, indx) => (
                <OpportunityCard key={indx} imgSrc={imgSrc} text={text} />
              ))
            : null}
        </ul>
      </div>
    </section>
  );
};

export default Opportinities;
