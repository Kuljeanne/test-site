import React from "react";
import Button from "../../UI-kit/Button";

import "./Modal.scss";

const Modal = ({toggleModal}) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <button className="modal__close-btn" onClick={toggleModal}>
          <span></span>
          <span></span>
        </button>
        <form className="form">
          <h2 className="form__title">Начни прямо сейчас!</h2>
          <h4 className="form__subtitle">
            Получи все нужные навыки для заработка на NFT всего за 28д ней!
          </h4>
          <input className="form__input" type="email" placeholder="Ваш email" />
          <Button text="Оплатить" type="primary" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
