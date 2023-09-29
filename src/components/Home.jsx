import React from "react";
import "./home.css";
import imageMain from "../assets/image-632.png";
import group from "../assets/group.svg";
import boxIcon from "../assets/box.svg";
import buildingIcon from "../assets/building.svg";
import addItemIcon from "../assets/additem.svg";
import chartSquareIcon from "../assets/chart-square.svg";
import dataIcon from "../assets/data.svg";
import favoriteChartIcon from "../assets/favorite-chart.svg";
import infoCircleIcon from "../assets/info-circle.svg";
import loginIcon from "../assets/login.svg";
import logoutIcon from "../assets/logout.svg";
import peopleIcon from "../assets/people.svg";
import shoppingCartIcon from "../assets/shopping-cart.svg";
import ticketDiscountIcon from "../assets/ticket-discount.svg";
import Widget from "./widget/Widget";

const widgetTop = [
  {
    id: 1,
    title: "Explore",
    child: [
      { icon: boxIcon, name: "Product Category" },
      { icon: buildingIcon, name: "Company" },
    ],
  },
  {
    id: 2,
    title: "Profiles",
    child: [
      { icon: addItemIcon, name: "Add Subscription" },
      { icon: infoCircleIcon, name: "Public Information" },
    ],
    child2: [
      { icon: favoriteChartIcon, name: "Business Information" },
      { icon: peopleIcon, name: "Connection" },
    ],
  },
  {
    id: 3,
    title: "Store",
    child: [
      { icon: shoppingCartIcon, name: "Online shop" },
      { icon: chartSquareIcon, name: "Product Dashboard" },
    ],
    child2: [{ icon: ticketDiscountIcon, name: "Offer Dashboard" }],
  },
];

const widgetBottom = [
  {
    id: 1,
    title: "Developer",
    icon: dataIcon,
  },
  {
    id: 2,
    title: "Message",
    icon: loginIcon,
  },
  {
    id: 3,
    title: "Log out",
    icon: logoutIcon,
  },
];

export default function Home() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="left">
          <div className="title">
            <h5>Welcome to</h5>
            <h2>GrainLogic!</h2>
          </div>
          <div className="img">
            <img className="img-group" src={group} alt="" />
            <img className="img" src={imageMain} alt="" height={400} />
          </div>
        </div>
        <div className="right">
          <Widget widgetTop={widgetTop} widgetBottom={widgetBottom} />
        </div>
      </div>
    </div>
  );
}
