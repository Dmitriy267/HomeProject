import React from "react";
import "../styles/SearchFromUlList.css";
import {Link} from 'react-router-dom';

function SearchFromUlList (){
return (
  <ul className="search-form__ul-list">
                  <li><Link to="/pagemts">MTC </Link></li>
					<li><Link to ="/pagebilain">Билайн</Link></li>
					<li><Link to ="/pagemegafon">Мегафон</Link></li>  
                </ul>
);
}
export default SearchFromUlList;

