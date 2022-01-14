import React, {Component} from "react";
import "../styles/MainSection.css";
import SearchFormUlList from './SearchFormUlList';
import {Link} from 'react-router-dom'
class MainSection extends Component {
	constructor(props){
		super(props);
		this.state={value: 'Теле2'};
		this.handleChange=this.handleChange.bind(this);
		 
	}
	
	handleChange(event){
		this.setState({value: event.target.value});
		console.log(event.target.value)
		
	}
	
	render (){
		let selectForm=this.state.value;
		let divSecretivFirst;
	
		if(selectForm==='Теле2'){
		divSecretivFirst=<Link to="/pagetele2">Теле2</Link>
		}
		if(selectForm==='Yota'){
			divSecretivFirst=<Link to="/pageyota">Yota</Link>
		}
		if(selectForm==='СберМобайл'){
			divSecretivFirst=<Link to="/pagesber">СберМобайл</Link>
		}
		if(selectForm==='Ростелеком'){
			divSecretivFirst=<Link to="/pagerostelecom">Ростелеком</Link>
		}
		return (
		  <main>
            <h1>Выберите оператора сотовой связи</h1>
            <form className="search-form" name="connectList">
			<SearchFormUlList/>
                <p className="search-form__text"><b>Другой оператор:</b><br/>
                <select name="company" id="search-form__select" value={this.state.value} onChange={this.handleChange}>
                    <option value="Теле2">Теле2</option>
                    <option value="Yota">Yota</option>
                    <option value="СберМобайл">СберМобайл</option>
                    <option value="Ростелеком">Ростелеком</option>
                </select>
                </p>
                <div className="search-form__div_secretive">
				
					{divSecretivFirst}
						
				</div>
            </form>
        </main>
		)
	}
}
export default MainSection;