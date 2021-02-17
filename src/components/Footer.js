import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <div className="footer">
      {/*<ul>
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
      </ul>*/}
      <p className="copyright">
        &copy; Copyright {new Date().getFullYear()}, GMB
      </p>
    </div>
  );
};

export default Footer;
