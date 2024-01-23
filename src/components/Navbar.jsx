import React from "react";
import "./Navbar.css";
import Fire from "../assets/fire.png";
import Star from "../assets/glowing-star.png";
import Party from "../assets/partying-face.png";
import DarkMode from "./DarkMode/DarkMode";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>

      <div className="navbar_links">
        <DarkMode></DarkMode>
        <a href="#popular">
          Popular <img src={Fire} alt="fire_emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          Top Rated <img src={Star} alt="star_emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          Upcoming{" "}
          <img src={Party} alt="party_emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
