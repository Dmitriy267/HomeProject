import React, {Component} from "react";
import "../styles/NavMenu.css";

class NavMenu extends Component{
    render(){
        return (
		
             <nav>
                <ul>
                   <li><a href="#">О нас</a></li>
                    <li><a href="#">Частые вопросы</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
			
			
		  
        );
    }
}

export default NavMenu;