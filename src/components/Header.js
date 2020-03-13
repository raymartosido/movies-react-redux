import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header container">
        <div className="siteLogo"><h1>Movies</h1></div>
        <div className="siteNav">
            <ul className="navLeft">
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <a href="#">Shop</a>
                    <ul>
                        <li><a href="#">Test</a></li>
                    </ul>
                </li>
                <li><a href="#">About</a></li>
            </ul>
            <ul className="navRight">
                <li><a href="#">Already have an account?</a></li>
                <li><a href="#">Cart(<span>0</span>)</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Header;
