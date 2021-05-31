import React, { useState } from "react";
import { BiChevronRight, BiPlusMedical } from "react-icons/bi";
import "./UserPage.scss";
import avatar from "../../images/user-avatar.gif";
import ourApp from "../../images/download-app.gif";
import { FaTimes } from "react-icons/fa";

const UserPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="container">
      <div className="userpage">
        <div className="userpage-left">
          <img src={avatar} alt="user-img" className="user-avatar" />
          <div className="content">
            <h4>Personalize your profile!</h4>
            <h5>
              Open Settings{" "}
              <i>
                <BiChevronRight />
              </i>
            </h5>
          </div>
          <div className="vl"></div>
          <h6>Try our app</h6>
          <img src={ourApp} alt="our-app" className="our-app" />
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="userpage-main">
          <div className="userpage-header">
            <div className="content">
              <h4>Display Name</h4>
              <span>username</span>
            </div>
            <div className="links">links</div>
          </div>
          <div className="userpage-data">
            <i>
              <BiPlusMedical />
            </i>
            <h4>You haven't uploaded anything!</h4>
            <div className="userpage-btn-container">
              <button onClick={() => setModal(true)}>upload</button>
              <button onClick={() => setModal(true)}>create</button>
            </div>
          </div>
        </div>
      </div>
      <div className={modal ? "modal show-modal" : "modal"}>
        <div className="modal-content">
          <i onClick={() => setModal(false)} className="close">
            <FaTimes />
          </i>
          <h4>
            This is a Clone not the real site so you can neither create nor
            upload
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
