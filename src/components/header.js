import React from 'react';


 import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import down_arrow from '../images/down_arrow.png';


import './style.scss';

import anjaliLogo from '../images/anjali_vector.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import Navbar from './navbar';


const Header = ({ siteTitle }) => (
	<section id="header" className="hero success is-fullheight">
		<Navbar />
		<div className="hero-body has-text-centered">
		<div className="container center">
	   
	   	<br></br>
	   	<img style={{
      width: "27%",
    height: "auto"

    }}
    src={anjaliLogo} alt="anjali-logo"/>
    <ScrollAnimation animateIn="fadeInLeft">
	 <br></br> 
	  <br></br> 			  
	  <h1> <strong> 
	   Anjali Devakumar</strong> </h1>
	   <br></br>
	      <br></br>
</ScrollAnimation>
	  <div className="columns is-mobile is-centered">
  <div className="column is-three-quarters">
    <div className="subtitle is-6"> 
		I'm a recent graduate of Georgia Tech's Human-Computer Interaction Master's program. With my background in Computer Science & Psychology, I employ mixed-methods research to inform inclusive and effective designs that help people.
		  <br></br> 
		    <br></br> 
		Currently a UX Researcher at <a href="https://www.chewy.com/"> Chewy 🐾 </a>

		</div>	
  </div>
</div>
	  
		<span>
		<a href="https://drive.google.com/file/d/1tPdUPFHFWSCxDoCDXOAGD7-AL971yVQR/view?usp=sharing" target="_blank" className="button is-outlined is-danger">View My Resume</a>
		</span> 
		<br></br>
		<br></br>
								  				
		</div>
				  				 
		
		<br></br>
				  <br></br>
		<br></br>
				  <br></br>

	</div>

	
		

	</section>
);

export default Header;
