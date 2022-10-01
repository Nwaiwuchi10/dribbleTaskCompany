import { useRef } from "react";
import { Image } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
// import "../Styles/main.css";
import "./NavBar2.css";

function Navbar2() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div style={{ display: "flex", gap: "10px" }}>
        <Image
          src="https://cdn.cdnlogo.com/logos/j/41/jira.svg"
          alt="jj"
          style={{ width: "auto", height: "4vh" }}
        />
        <h3>Nchrys</h3>
      </div>

      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>

        <a href="/#" className="div-pst-tat">
          Request a demo
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar2;
