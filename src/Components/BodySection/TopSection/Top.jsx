import React from "react";
import "./top.css";
import "./top.scss";

//Imported icons===========>//
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import {BsArrowRightShort} from 'react-icons/bs';

//impored images===============>//
//import img from "../../../Assets/user1.jpg";
import img from "../../../Assets/plant1.png";
import video from "../../../Assets/room3.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title ">
          <h1>Welcome to GharBhada.com</h1>
          <p>Hello Gus, Welcome Back</p>
        </div>
        <div className="searchbar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className=" icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon " />
          <div className="adimnImage">
            {/* <img src={img} alt="Admin Image" />*/}
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Sell and take rent the room you want</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            quidem expedita beatae ipsum rerum soluta libero eos modi iure
            inventore dignissimos necessitatibus quasi excepturi impedit ullam
            animi consectetur repellat recusandae.
          </p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent ">Top Sellers</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Our Stat</h1>
              <div className="flex">
                <span>
                  Today <br /> <small>5 orders</small>
                </span>
              </div>
              <div className="flex">
                <span>
                  This Month <br /> <small>125 order</small>
                </span>
              </div>
              
              <div className="flex link">
                Go To Our Orders<BsArrowRightShort className="icon"/>
              </div>
            </div>
            <div className="imgDiv">
              <img src={img} alt="Image Name" />
            </div>
            {/*we shall use this card later*/}
           {/* <div className="sideBarCard">
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
  </div>}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
