import React from "react";
import Button from "../../UI-kit/Button";
import Ellipse from "../../assets/icons/ellipse";
import "./Promo.scss";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo-container wrapper">
        <div className="promo__info">
          <Ellipse className="promo__ball" color="green" width={87} />
          <h2 className="promo__title">
            Не упусти возможность войти в <b>прибыльную нишу</b>
          </h2>
          <h3 className="promo__subtitle">
            Получи все нужные навыки для заработка на NFT всего за 28 дней
          </h3>
          <Button
            className="promo__btn"
            type="primary"
            text="Начать зарабатывать на NFT"
          />
        </div>
        <div className="img-container">
          <div className="shadow img-shadow"></div>
          <img className="promo__img" src="img/MAN.png" alt="man" />
        </div>
      </div>
    </section>
  );
};

export default Promo;
