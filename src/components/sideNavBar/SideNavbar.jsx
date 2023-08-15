import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import "./SideNavBar.css";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";

export const SideNavbar = () => {
  const { logoutHandler, currentUser } = useAuth();
  const { getUserInfoByUsername } = useUser();
  return (
    <aside className="side-nav-bar">
      <ul className="side-nav-bar-items">
        <li>
          <NavLink to="/" className="nav-bar-links">
            <AiOutlineHome className="home-icon" />
            <span className="side-nav-bar-item-name">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" className="nav-bar-links">
            <MdExplore className="home-icon" />
            <span className="side-nav-bar-item-name">Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmark" className="nav-bar-links">
            <BsBookmark className="home-icon" />
            <span className="side-nav-bar-item-name">Bookmarks</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            getUserInfoByUsername(currentUser.username);
          }}
        >
          <NavLink
            to={`/profile/${currentUser.username}`}
            className="nav-bar-links"
          >
            <CgProfile className="home-icon" />
            <span className="side-nav-bar-item-name">Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            onClick={logoutHandler}
            className="nav-bar-links"
          >
            <BiLogOut className="home-icon" />
            <span className="side-nav-bar-item-name">Logout</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
