import React from 'react';
import { Link } from 'react-router-dom'

function HederNavigation(){
	return(
	<nav>
	<ul>
	<li><Link to='/'>Страница с формой выбора оператора сотовой связи</Link></li>
	<li><Link to='/pagemts'>MTC</Link></li>
	<li><Link to='/pagebilain'>Билайн</Link></li>
	<li><Link to='/pagemegagon'>Мегафон</Link></li>
	<li><Link to='/pagetele2'>Теле2</Link></li>
	<li><Link to='/pageyota'>Yota</Link></li>
	<li><Link to='/pagesber'>СберМобайл</Link></li>
	<li><Link to='/pagerostelecom'>Ростелеком</Link></li>
	</ul>
	</nav>
	)
}
export default HederNavigation