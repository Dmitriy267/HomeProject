import React from "react";
import "../styles/MainPagePayment.css";
//import TitleTelecomOperator from './TitleTelecomOperator';
import FormPayment from './FormPayment';
//import FormPaymentTel from './FormPaymentTel';
function MainPagePayment (props){
	return(
	   <main>
	    <h1>Оплатить за телефон {props.name}</h1>
	 <FormPayment />
        </main>
		
		)
}

export default MainPagePayment;