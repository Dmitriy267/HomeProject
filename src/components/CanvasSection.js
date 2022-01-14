 import React, {Component} from "react";
import "../styles/CanvasSection.css";
import mobilpng from "../images/mobile.png";
import mobilcanvas from "../images/mobileCanvas.png";
 class CanvasSection extends Component{
	 componentDidMount(){
		 this.updateCanvas();
	 }
	 updateCanvas(){
		const imageSource = document.getElementById('source');
			 imageSource.addEventListener('load', e => {
  ctx.drawImage(imageSource, 40,25,60,80);
});
		 
		 const canvas=document.getElementById('tutorial');
	 const ctx=canvas.getContext('2d');	
		 
		const draw1=setInterval(function (){
			 if(canvas.getContext){
						 ctx.beginPath();	 
		  let x = canvas.width/2.5 
let y = canvas.height / 3;                                        
let radius = 10;                                                  
let startAngle = 1.5 * Math.PI;                                   
let endAngle = 0.5 * Math.PI;                                     
let counterClockwise = false;  
				ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
				
							
			ctx.lineWidth = 4;                                           
                                                   
ctx.strokeStyle = "green";  
						  
					  ctx.stroke();	 		  
		 
		 }
		 

		 },2000);
		  const draw2=setInterval(function (){
		
			 if(canvas.getContext){
						 ctx.beginPath();	 
				  let x = canvas.width/2 ;	                                         
let y = canvas.height/3;                                        
let radius =15;                                                  
let startAngle = 1.5 * Math.PI;                                   
let endAngle = 0.5 * Math.PI;                                     
let counterClockwise = false;  
				ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
			ctx.lineWidth = 4;                                           
                                                   
ctx.strokeStyle = "green";  
						  
					  ctx.stroke();	 		  
		 
		 }

		 },3000);
		 
		 
		 const draw3=setInterval(function (){
		
			 if(canvas.getContext){
						 ctx.beginPath();	 
				  let x = canvas.width/1.5 ;	                                         
let y = canvas.height/3;                                        
let radius =15;                                                  
let startAngle = 1.5 * Math.PI;                                   
let endAngle = 0.5 * Math.PI;                                     
let counterClockwise = false;  
				ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
			ctx.lineWidth = 4;                                           
                                                   
ctx.strokeStyle = "green";  
						  
					  ctx.stroke();	 		  
		 
		 }

		 },4000);
		 
	const clearCanvasHide=setInterval(function(){
		ctx.clearRect(100, 20, 150, 150);
	},5000);
		 
	 }
	 render(){
	 
	 return(
	 <section>
		<canvas id="tutorial">
		<img src={mobilpng} alt="Изображение сотового телефона" className="section__images_statistic"/>
		</canvas>
		<div className="section__animation-image">
  <img  id="source" src={mobilcanvas} alt="Скрытое изображение телефона"/>
</div>
		</section>
	 )
	 }
 }
 
 export default CanvasSection