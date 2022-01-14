import React, { useState} from "react";
import "../styles/FormPaymentTel.css";
//import SpanError from './SpanError';
//import SpanErrortel from './SpanErrortel';
 //import AnswerServer from './AnswerServer';
 
function  FormPaymentTel(){
    const [numberTel, setnumberTel]=useState('');
    const [sumTelmobile, setsumTelmobile]=useState('');
    
	

	 
	function telNumberInput(event){
		setnumberTel(event.target.value);
		console.log(event.target.value);
         numberTelValid();
    }
    function sumTelInput(event){
        setsumTelmobile(event.target.value);
console.log(event.target.value);
sumTelValid();
}
function sumTelValid(){
    const ErrorSum=document.querySelector('.block-form__span-error_second');
    if(setsumTelmobile>1000){
        console.log('Введите сумму меньше 1000 руб');
        ErrorSum.textContent="Введите сумму меньше 1000 руб"
    }
     if (setsumTelmobile<=1){
        console.log('Введите сумму больше 1 руб');
        ErrorSum.textContent="Введите сумму больше 1 руб"
    }
    if(setsumTelmobile==''){
        console.log('Заполните данное поле');
        ErrorSum.textContent="Заполните данное поле"
    }else{
        ErrorSum.textContent=""
    }

}
        function numberTelValid(){
            const ErrorTel=document.querySelector('.block-form__span-error');
            const  regexp= new RegExp('^8927$', 'g');
            let newstr=regexp.test(setnumberTel);
            if(newstr==true){
                ErrorTel.textContent=``
            }else{
                ErrorTel.textContent=`Вы ввели неправильный номер`
            }
            if(setnumberTel==''){
                console.log('Заполните данное поле');
                ErrorTel.textContent="Заполните данное поле"
            }
            if(setnumberTel!=''){
                console.log('');
                ErrorTel.textContent=``;
            }

            
        }
		
	
	function handleSubmit(event) {
			console.log(tel.target.value);
			e.preventDefault();
    }
	

		
	
				 
	return(
        
		
        
		<form className="block-form" onSubmit={handleSubmit} >
               <input type="tel" placeholder="+7" className="block-form__input-tel"  required  pattern="[0-9]{11}" name="tel" value={numberTel} onInput={telNumberInput}/>
               <span class="block-form__span-error"></span>
			<input type="number" placeholder="Сумма 'Р'" className="block-form__input-sum" min="1" max="1000" required  name="sumTel" value={sumTelmobile} onInput={sumTelInput}/>
            <span class="block-form__span-error_second"></span>
               <button  className="block-form__button-sending" >Оплатить</button>
			  
			 <p className="block-form__p-result"></p>
			 <div className="link-div"></div> 
            </form>	
	
    );
}
export default FormPaymentTel;