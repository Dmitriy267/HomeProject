import  React from 'react';
import  '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
//import Main from './Main';
import MainPage from './MainPage';
import PageMTS from './PageMTS';
import PageBilain from './PageBilain';
import PageMegafon from './PageMegafon';
import PageTele2 from './PageTele2';
import PageYota from './PageYota';
import PageSber from './PageSber';
import PageRostelecom from './PageRostelecom';
import { Route, Routes, Link, Outlet} from 'react-router-dom';


function App () {
   
        return (
		   <>
		  <Header/>
		  <section className="block-section_app">
                <ul className="block-section__ul_app">
                    <li><Link to="/">Главная страница </Link></li>
					

                </ul>
				<Outlet/>
            </section>
		 <Routes>
		   <Route path="/" element={<MainPage/>}/>
		    <Route path="/pagemts" element={<PageMTS/>}/>
			 <Route path="/pagebilain" element={<PageBilain/>}/>
		    <Route path="/pagemegafon" element={<PageMegafon/>}/>
			 <Route path="/pagetele2" element={<PageTele2/>}/>
		    <Route path="/pageyota" element={<PageYota/>}/>
			 <Route path="/pagesber" element={<PageSber/>}/>
		    <Route path="/pagerostelecom" element={<PageRostelecom/>}/>
		  </Routes>
		  
		  <Footer/>
		  
           </> 
        );        
    
}
export default App;