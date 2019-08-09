import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';*/
import "animate.css/animate.min.css";
import fridge from '../images/fridge_helper.png';



const Proj3Head = () => (
<section className="hero is-light is-fullheight">
	
  <div className="hero-body">
    <div className="container">
    	<div className="columns is-centered">
				  <div className="columns is-centered">
				  	<div className="column">
					  	<figure id= "projectpic" className="image is-centered">
							<img src={fridge} alt="fridge"/>
						</figure>
					</div>				  
				  	<div className="column">
				  		<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						
				      <h1 className="title is-size-2">
				        Fridge Helper
				      </h1>
				      <br></br>
				      <h2 className="subtitle">
				        Final Project for UMass Amherst's Intro to Human-Computer Interaction course
				      </h2>
    				</div>

 				</div>
  		</div>
  		</div>
  		</div>

</section>


);
export default Proj3Head;