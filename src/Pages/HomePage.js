import React from "react";
import NavBar from "../components/NavBar/NavBar";
import NavBar2 from "../components/NavBar/NavBar2";
import Partners from "../components/Partners/Partners";
import Product from "../components/Productivity/Product";
import Productivity from "../components/Productivity/Productivity";

const HomePage = () => {
  return (
    <div
    //   style={{
    //     width: "95%",
    //     height: "auto",
    //     backgroundColor: "white",
    //     borderRadius: "10px",
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     marginTop: "auto",
    //     marginBottom: "auto",
    //   }}
    >
      <NavBar2 />
      <Productivity />
      <Product />
      {/* <Partners /> */}
    </div>
  );
};

export default HomePage;
