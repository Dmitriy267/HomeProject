import React, {Component} from "react";
import "../styles/Header.css";
import logo from '../images/logo.png';
import NavMenu from "./NavMenu.js";

class Header extends Component {
	render (){
		return (
		<header>
          <div className="header-container">
                 <a href="#"><img src={logo}  alt="Логотип сайта" className="logo"/></a>
           <NavMenu/>
            </div>
        </header>
		)
	}
}
export default Header;