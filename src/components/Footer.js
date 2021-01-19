import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const copyrightStyle = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  padding: "20px",
  transform: "translateX(-50%)",
};

const Footer = (props) => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="/">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon="calendar-check" />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={["fab", "spotify"]} />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon="share" />
          </a>
        </li>
      </ul>
      <p style={copyrightStyle}>
        &copy; Copyright {new Date().getFullYear()}, Grant Besner
      </p>
    </div>
  );
};

export default Footer;
