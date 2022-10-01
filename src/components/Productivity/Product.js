import React from "react";
import "./Productivity.css";
import "../Partners/Partners.css";
import flutterwave from "../../assets/images/flutterwave.png";
import kudda from "../../assets/images/kudda.png";
import sendchamp from "../../assets/images/sendchamp.png";
import identitypass from "../../assets/images/identitypass.png";
import fincra from "../../assets/images/fincra.png";

import Image from "react-bootstrap/Image";

const Product = () => {
  return (
    <div className="partners-head-div">
      <div className="partner-row-div">
        <Image src={kudda} alt="eg" className="img1" />
        <Image src={fincra} alt="eg" className="img2" />
        {/* <Image src={sendchamp} alt="eg" className="img3" /> */}
        <Image src={flutterwave} alt="eg" className="img4" />

        <Image src={identitypass} alt="eg" className="img5" />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(200, 232, 245)"
          fill-opacity="1"
          d="M0,320L60,293.3C120,267,240,213,360,165.3C480,117,600,75,720,96C840,117,960,203,1080,250.7C1200,299,1320,309,1380,314.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,128L720,256L1440,96L1440,320L720,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default Product;
