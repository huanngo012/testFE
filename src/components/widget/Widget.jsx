import React, { useState } from "react";
import "./Widget.css";
import Modal from "../modal/Modal";

const Widget = ({ widgetTop, widgetBottom }) => {
  const [selectedEl, setSelectedEl] = useState(null);

  const handleShowModalClick = (el) => {
    setSelectedEl(el);
  };

  const handleCloseModal = () => {
    setSelectedEl(null);
  };

  return (
    <div className="widget">
      <div className="top">
        {widgetTop?.map((el, index) => (
          <div
            className="frame"
            key={index}
            onClick={() => handleShowModalClick(el)}
          >
            <div className="sm-widget-top">
              <div className="status-top ">
                {el?.child?.map((icon, index) => (
                  <img
                    key={index}
                    className="icon-md icon"
                    src={icon?.icon}
                    alt={icon?.name}
                  />
                ))}
              </div>
              <div className="status-top ">
                {el?.child2?.map((icon, index) => (
                  <img
                    key={index}
                    className="icon-md "
                    src={icon?.icon}
                    alt={icon?.name}
                  />
                ))}
              </div>
            </div>
            <p className="title-widget">{el?.title}</p>
          </div>
        ))}
      </div>
      <div className="bottom">
        {widgetBottom?.map((el, index) => (
          <div className="frame" key={index}>
            <div className="sm-widget">
              <div className="status-bottom ">
                <img className="icon-lg " src={el?.icon} alt={el?.title} />
              </div>
            </div>
            <p className="title-widget">{el?.title}</p>
          </div>
        ))}
      </div>
      {selectedEl ? (
        <Modal handleCloseModal={handleCloseModal} data={selectedEl}></Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Widget;
