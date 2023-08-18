import React from "react";
import Button from "../../UI-kit/Button";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="navigation">
        <li className="navigation__item">
          <a href="#header" className="navigation__link">
            Главная
          </a>
        </li>
        <li className="navigation__item">
          <a href="#opp" className="navigation__link">
            Что даст обучение
          </a>
        </li>
      </ul>
      <Button
        className="navigation__btn"
        text="Личный кабинет"
        type="secondary"
      />
    </nav>
  );
};

export default Navigation;
