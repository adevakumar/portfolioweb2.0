import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/

import schoolviz from '../images/schoolviz.png';



const Proj4Head = () => (
<section className="hero is-light is-fullheight">
	
  <div className="hero-body">
    <div className="container">
    	<div className="columns is-centered">
				  <div className="columns is-centered">
				  	<div className="column">
					  	<figure id= "projectpic" className="image is-centered">
							<img src={schoolviz} alt="schoolviz"/>
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
				        Visualizing US School Data
				      </h1>
				      <br></br>
				      <h2 className="subtitle">
				        Final Project for UMass Amherst's Data Visualization Course
				      </h2>
    				</div>

 				</div>
  		</div>
  		</div>
  		</div>

</section>


);
export default Proj4Head;