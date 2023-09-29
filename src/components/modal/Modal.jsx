import React from "react";
import "./Modal.css";

const Modal = ({ data, handleCloseModal }) => {
  return (
    <div className="modal" onClick={() => handleCloseModal()}>
      <div className="overlay">
        <div className="modal-content">
          <p className="modal-title">{data?.title}</p>
          <div className="modal-icon">
            {data?.child?.map((el, index) => (
              <div className="frame" key={index}>
                <div className="sm-widget">
                  <div className="status-bottom">
                    <img className="icon-lg" src={el?.icon} alt={el?.name} />
                  </div>
                </div>
                <p className="title-widget">{el?.name}</p>
              </div>
            ))}
            {data?.child2?.map((el, index) => (
              <div className="frame" key={index}>
                <div className="sm-widget">
                  <div className="status-bottom">
                    <img className="icon-lg " src={el?.icon} alt={el?.name} />
                  </div>
                </div>
                <p className="title-widget">{el?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
