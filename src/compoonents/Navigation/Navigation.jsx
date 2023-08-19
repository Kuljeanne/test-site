import React, { useState } from "react";
import Button from "../../UI-kit/Button";
import "./Navigation.scss";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="nav-container">
      <div className="navigation_desctop">
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
      </div>
      <div className={`burger ` + (menuOpen ? 'active' : '')} onClick={toggleMenu}>
        <span />
        <span />
      </div>
      {menuOpen && (
        <div
          className="background-mobile"
          onClick={(e) => {
            if(!e.target.closest('.navigation_mobile'))
            toggleMenu();
          }}
        >
          <div className="nav-container_mobile">
            <ul className="navigation_mobile">
              <li className="navigation__item">
                <a
                  href="#header"
                  className="navigation__link"
                  onClick={toggleMenu}
                >
                  Главная
                </a>
              </li>
              <li className="navigation__item">
                <a
                  href="#opp"
                  className="navigation__link"
                  onClick={toggleMenu}
                >
                  Что даст обучение
                </a>
              </li>
            </ul>
            <Button
              className="navigation__btn_mobile"
              text="Личный кабинет"
              type="secondary"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
