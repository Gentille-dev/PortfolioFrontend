import React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { Link, useLocation } from "react-router-dom";
import "../../Styles/Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const linkStyle = {
    fontWeight: 800,
    fontSize: 15,
    color: isHomePage ? "#9c300f" : "rgb(1, 1, 1)",
  };

  const isCategory = location.pathname === "/skills";
  const linkStyleSkills = {
    fontWeight: 800,
    fontSize: 15,
    color: isCategory ? "#9c300f" : "rgb(1, 1, 1)",
  };

  const isAbout = location.pathname === "/about";
  const linkStyleAbout = {
    fontWeight: 800,
    fontSize: 15,
    color: isAbout ? "#9c300f" : "rgb(1, 1, 1)",
  };

  const isContactPage = location.pathname === "/contact";
  const linkStyleContact = {
    fontWeight: 800,
    fontSize: 15,
    color: isContactPage ? "#9c300f" : "rgb(1, 1, 1)",
  };

  const isProfilePage = location.pathname === "/blogs-page";
  const linkStyleBlogs = {
    fontWeight: 800,
    fontSize: 15,
    color: isProfilePage ? "#9c300f" : "rgb(1, 1, 1)",
  };

  return (
    <nav className="navbar">
      <div className="port">
        <h3 className="folio">
          <span className="titans">Port</span>Folio
        </h3>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <a href="/" style={linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" style={linkStyleAbout}>
              About
            </a>
          </li>
          <li>
            <a href="/skills" style={linkStyleSkills}>
              Skills
            </a>
          </li>
          <li>
            <a href="/blogs-page" style={linkStyleBlogs}>
              Blogs
            </a>
          </li>
          <li>
            <a href="/contact" style={linkStyleContact}>
              Contact
            </a>
          </li>
          <li>
            <p>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      variant="contained"
                      {...bindTrigger(popupState)}
                      style={{
                        color: "#ffffff",
                        background: " rgb(1, 1, 1)",
                        fontSize: 8,
                        marginLeft: "50px"
                      }}
                    >
                      Accounts
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <Link className="nav_link" to="/login">
                        <MenuItem onClick={popupState.close}>Login</MenuItem>
                      </Link>
                      <Divider />

                      <Link
                        className="nav_link"
                        to="/signup"
                        style={{ color: "blue" }}
                      >
                        <MenuItem onClick={popupState.close}>Signup</MenuItem>
                      </Link>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
