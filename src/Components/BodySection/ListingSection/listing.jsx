import React from "react";
import "./listing.css";
import './listing.scss';

//import icons here ===================>//
import {BsArrowRightShort} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';

//import image from ================>//
import img from '../../../Assets/room4.png'
const listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Sasto Kotha</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Sasto Kotha</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Sasto Kotha</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Sasto Kotha</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Sasto Kotha</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Sasto Kotha</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Sasto Kotha</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Sasto Kotha</h3>
        </div>
      </div>
      <div className="seller flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default listing;
