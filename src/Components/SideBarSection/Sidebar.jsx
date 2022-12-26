import React from "react";
import "./sidebar.css";
import "./sidebar.scss";

//Imported images
import room3 from "../../Assets/room1.jpg";

//Imported icons from react icons==========>//
import { IoMdSpeedometer } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import {GiGreenhouse} from "react-icons/gi";
import {BsHouseDoorFill} from "react-icons/bs";
import {MdTravelExplore} from "react-icons/md";
import {AiOutlinePieChart} from "react-icons/ai";
import {AiOutlineContacts} from "react-icons/ai";
import {HiTrendingUp} from "react-icons/hi";
import {RiBillLine} from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={room3} alt="Image Name" className="src" />
        <h2>GharBhada</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">Dash Board</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <GiGreenhouse className="icon" />
              <span className="smallText">For Sale</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsHouseDoorFill className="icon" />
              <span className="smallText">For Rent</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdTravelExplore className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <HiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlineContacts className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <RiBillLine className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>
            Having trouble in finding room, please contact us for more questions
          </p>
          <button className="btn">Go To Help Center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
