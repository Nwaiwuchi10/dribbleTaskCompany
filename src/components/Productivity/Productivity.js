import React from "react";
import "./Productivity.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import download from "../../assets/images/download.png";
const Productivity = () => {
  return (
    <div className="product-main-div">
      <div className="div-h">
        <div className="div-mrg">
          <div className="div-h3">Easy way to manage ur productivity</div>
          <div className="ps-div">
            It is a waste of energy when we try to conform to a pattern. To
            conserve energy, we must be aware of how we dissipate energy.
          </div>
        </div>
      </div>
      <div className="div-play">
        <div className="start-t">Start free trail</div>
        <div className="display-bs">
          <BsFillPlayCircleFill />
          <div>Watch Video Tutorial </div>{" "}
        </div>
      </div>
      <div className="div-border-product">
        <div className="white-div-border">
          <div className="improve">Improvement</div>
          <div>Just helful for me and i like it</div>
        </div>
        <div className="white-div-border2">
          <div className="div-10">10X</div>
          <div className="faster">Faster manage of data</div>
          <div></div>
          <div></div>
        </div>
        <div className="white-div-border3">
          <div className="improve2">Awesome</div>
          <div>It is a good app for managers</div>
        </div>
      </div>
      {/* <div className="div-bod-flex">
        <div className="bod"></div>
        <div></div>
      </div> */}

      <div className="div-img-flex">
        <div>
          {" "}
          <img src={download} alt="hd" className="product-img" />
        </div>
        <div>
          {" "}
          <img src={download} alt="hd" className="product-img" />
        </div>
      </div>
    </div>
  );
};

export default Productivity;
