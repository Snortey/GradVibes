import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { IoCloudUploadOutline } from "react-icons/io5";

import { GoArrowUpRight } from "react-icons/go";
import image1 from "../../Assets/Images/1671269279647.jpg";
import image2 from "../../Assets/Images/1671269279655.jpg";

const Home = () => {
  return (
    <section className="mainhome">
      <div className="home_container">
        <div className="home_header">
          <div className="home_header-top">
            <h4>Welcome to the KNUST Alumni</h4>
          </div>
          <div className="home_header-bottom">
            <div className="home_header-bottom-first">
              <h2>Digital</h2>
              <div className="bottom-first_image-container">
                <img
                  src={image1}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="home_header-bottom-second">
              <h2>Picture</h2>
              <div className="bottom-second_image-container">
                <img
                  src={image2}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h2>Book</h2>
            </div>
          </div>
        </div>
        <div className="home_footer">
          <Link to={""} className="btn">
            <h3>Upload picture</h3>
            <IoCloudUploadOutline className="home_footer-icon" />
          </Link>
          <Link to={""} className="btn">
            <h3>View pictures</h3>
            <GoArrowUpRight className="home_footer-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
