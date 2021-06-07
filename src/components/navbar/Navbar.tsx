import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, subMenu } from "../../data";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import "./NavBar.scss";
import logo from "../../images/logo.gif";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store";
import { logout } from "../../redux/GiphyActions";
import { MdArrowDropDown } from "react-icons/md";
import avatar from "../../images/user-avatar.gif";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavLink {
  id: number;
  url: string;
  title: string;
}

interface SubMenu {
  id: number;
  title: string;
  links: string[];
}

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const dispatch = useDispatch();
  const is_login = useSelector((state: RootStore) => state.giphy.is_login);

  return (
    <nav className="container">
      <div className="nav-logo-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" className="logo-img" />
          <h1>GIPHY</h1>
        </Link>
      </div>
      <div className="nav-links">
        {navLinks.map((link: NavLink) => {
          const { id, url, title } = link;
          return (
            <Link to={`/search/${url}`} key={id} className="links">
              {title}
            </Link>
          );
        })}
        <div className="menu-link">
          <BiDotsVerticalRounded />
          <div className="sub-menu">
            <div className="sub-menu-top">
              {subMenu.map((item: SubMenu) => {
                const { id, title, links } = item;
                return (
                  <div className="sub-menu-content" key={id}>
                    <h2>{title}</h2>
                    <hr />
                    <div className="sub-menu-link">
                      {links.map((link: string, index) => {
                        return <h3 key={index}>{link}</h3>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="sub-menu-footer">
              <h3>© 2021 GIPHY, Inc.</h3>
              <div className="vl"></div>
              <h5>Terms of Service</h5>
              <h5>Community Guidelines</h5>
              <h5>Privacy Policy</h5>
              <h5>Copyright</h5>
              <h5>Manage Cookies</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="login">
        <div className="btn-container">
          <Link to="/user" className="btn">
            upload
          </Link>
          <Link to="/user" className="btn">
            create
          </Link>
        </div>
        {is_login ? (
          <div className="logout-container">
            <img src={avatar} alt="user-img" />
            <h4>Name</h4>
            <i>
              <MdArrowDropDown />
            </i>
            <div className="logout-dropdown">
              <button>Settings</button>
              <button>Favorite</button>
              <button onClick={() => dispatch(logout())}>Log Out</button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="login-container">
            <i>
              <IoPerson />
            </i>
            <button className="login-btn">login</button>
          </Link>
        )}
      </div>
      <div className="nav-2">
        <div
          className="nav-2-btn"
          onClick={() => {
            setMenu(!menu);
            setMenu2(false);
          }}
        >
          <FaBars />
        </div>
        <div className={menu ? "nav-links-2 active" : "nav-links-2"}>
          {navLinks.map((link: NavLink) => {
            const { id, url, title } = link;
            return (
              <Link to={`/search/${url}`} key={id} className="links-2">
                {title}
              </Link>
            );
          })}
          <div className="menu-link-2" onClick={() => setMenu2(!menu2)}>
            <BiDotsVerticalRounded />
            <div className={menu2 ? "sub-menu-2 show-menu-2" : "sub-menu-2"}>
              <div className="sub-menu-top">
                <div className="close-btn" onClick={() => setMenu2(false)}>
                  <FaTimes />
                </div>
                {subMenu.map((item: SubMenu) => {
                  const { id, title, links } = item;
                  return (
                    <div className="sub-menu-content" key={id}>
                      <h2>{title}</h2>
                      <hr />
                      <div className="sub-menu-link">
                        {links.map((link: string, index) => {
                          return <h3 key={index}>{link}</h3>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="sub-menu-footer">
                <h3>© 2021 GIPHY, Inc.</h3>
                <div className="sub-menu-footer-link">
                  <h5>Terms of Service</h5>
                  <h5>Community Guidelines</h5>
                  <h5>Privacy Policy</h5>
                  <h5>Copyright</h5>
                  <h5>Manage Cookies</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="login-2">
            <div className="btn-container">
              <Link to="/user" className="btn">
                upload
              </Link>
              <Link to="/user" className="btn">
                create
              </Link>
            </div>
            {is_login ? (
              <div className="logout-container">
                <h4>Name</h4>
                <i>
                  <MdArrowDropDown />
                </i>
                <div className="logout-dropdown">
                  <button>Settings</button>
                  <button>Favorite</button>
                  <button onClick={() => dispatch(logout())}>Log Out</button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="login-container">
                <button className="login-btn">login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
