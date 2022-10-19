import React from "react";
import { Link } from "react-router-dom";
import Flag from "./flag";

function Top() {
  return (
    <div className="top">
      <ul>
        <li>
          <Link to="/register">REGISTER</Link>
        </li>
        <li>
        <Link to="/login">SIGN IN</Link>
        </li>
        <li>
        <Link to="/faq">FAQs</Link>
        </li>
        <li>
          <button>
            <Flag />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Top;
