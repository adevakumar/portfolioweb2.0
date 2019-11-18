import React from 'react';

import './style.scss';

/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/

import walking from '../images/walking.png';

const ConvoyHead = () => (
<section className="hero is-light is-fullheight">
	
  <div className="hero-body">
    <div className="container">
    	<div className="columns is-centered">
				  <div className="columns is-centered">
				  	<div className="column">
					  	<figure id= "projectpic" className="image is-centered">
							<img src={walking} alt="walking"/>
						</figure>
					</div>				  
				  	<div className="column">
				  		<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						
				      <h1 className="title is-size-2">
				        Convoy
				      </h1>
				      <br></br>
				      <h2 className="subtitle">
				        <strong>Intern Project Goal</strong>: Marry the business needs of driving e-commerce innovation and the technical needs of TJX by supporting them in their transition to Microsoft Azure.
				      </h2>
    				</div>

 				</div>
  		</div>
  		</div>
  		</div>

</section>


);
export default ConvoyHead;