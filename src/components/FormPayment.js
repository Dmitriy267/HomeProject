import React, {Component} from "react";
import "../styles/FormPayment.css";
import SpanError from './SpanError';
import SpanErrortel from './SpanErrortel';
import AnswerServer from './AnswerServer';
class FormPayment extends Component {
	constructor(props){
		super(props);
		
		this.state={
			numberTel: "",
			sumTelmobile: "",
			error: null,
			tel:"",
			telvalid: false
		};
		this.telNumberInput=this.telNumberInput.bind(this);
		this.sumTelInput=this.sumTelInput.bind(this);
		this.telValidInput=this.telValidInput.bind(this);
		this.AnswerServerButton=this.AnswerServerButton.bind(this); 
	}
	
	componentDidMount() {
		this.FetchResponse();
		}
		FetchResponse(){ 
		   fetch('/')
		   .then (res=>res.json())
		   .then(
		  (result) => {
			this.setState({
			   tel: result.tel
			});
	   },
	   (error) => {
			this.setState({
			  error
			});
		  }
	   )
   }
	 
   telValidInput(event){
	let telvalid=event.target.value;
	let regexp= new RegExp('^89', 'g');
	let str=regexp.test(telvalid);
	if(str==true){
		this.setState({telvalid:true});
	}else {
		this.setState ({telvalid:false});
	}
	}

	AnswerServerButton=()=>{
		const mesSpan=document.querySelector('.message__span');
		if(this.state.telvalid){
		console.log('Номер совпал' + this.state.numberTel);
		return mesSpan.textContent=`Набран правильный номер`
		}
		else {
		console.log('Номер не совпал' + this.state.numberTel);
		return mesSpan.textContent=`Набран неправильный номер`
		}
		
	}

	telNumberInput(event){
		this.setState({numberTel: event.target.value});
		console.log(event.target.value);
	}
	handleSubmit(event){
		console.log(this.state.tel);
		e.preventDefault();
		fetch('/', {
				method:'POST',
				headers:{
					'Content-Type':'application/json;charset=utf-8'
				},
				body:JSON.stringify(tel)
			})
			.then (res=>res.json())
			.then((result)=>{
				this.setState({
            tel: result.tel
          });
			})
			
			
			
	};
	sumTelInput(event){
		
				this.setState({sumTelmobile: event.target.value});
		console.log(event.target.value);
	}
	render (){
		
		let inputSum=this.state.sumTelmobile; 
		let ErrorSum;
		let ErrorTel;
		let resultServer;
		let telEnt=this.state.numberTel;
		
 if(this.state.telvalid==true&&inputSum!=''&&inputSum<1000&&inputSum>1){
		resultServer=<AnswerServer answer="Правильно заполнены поля"/>
				  	
		 }else{
			resultServer=<AnswerServer answer="Заполните все поля правильно"/>
			 console.log('Платеж не прошел');
		 }

		if(telEnt==''){
			ErrorTel=<SpanErrortel texterrtel="Заполните данное поле"/>
		}
		if(telEnt!=''){
			ErrorTel=<SpanErrortel texterrtel=" "/>
		}
		
		
		if(inputSum>1000){
			console.log('Введите сумму меньше 1000 руб');
			ErrorSum=<SpanError texterr="Введите сумму меньше 1000 руб"/>
		}
		if(inputSum<=1){
			console.log('Введите сумму больше 1 руб');
			ErrorSum=<SpanError texterr="Введите сумму больше 1 руб"/> 
		}
		if(inputSum==''){
			console.log('Заполните данное поле');
			ErrorSum=<SpanError texterr="Заполните данное поле"/> 
		}
		
		const { error, tel } = this.state;
		 if (error) {
       console.log('Ошибка');
    }
				 
	
		return (
		<form className="block-form" onSubmit={this.handleSubmit} >
               <input type="tel" placeholder="+7" className="block-form__input-tel"  required  pattern="[0-9]{11}" name="tel" value={this.state.numberTel} onChange={this.telNumberInput} onInput={this.telValidInput}/>
				   {ErrorTel}
			  
               <input type="number" placeholder="Сумма 'Р'" className="block-form__input-sum" min="1" max="1000" required  name="sumTel" value={this.state.sumTelmobile} onInput={this.sumTelInput}/>
				
				  {ErrorSum}
				
               <button  className="block-form__button-sending" onClick={this.AnswerServerButton}>Оплатить</button>
			   {resultServer}
			 <span className="message__span"></span>
			
			 <div className="link-div"></div> 
            </form>
         
		  
		)
	}
}
export default FormPayment;