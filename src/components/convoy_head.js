import React from 'react';

import './style.scss';

/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/

import walking from '../images/walking.png';

const ConvoyHead = () => (
<section className="hero is-fullheight">
	
  <div id="convoy_head" className="hero-body">
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
						
				      <h1 className="title is-size-2 has-text-white">
				        Convoy
				      </h1>
				      <br></br>
				      <h2 className="subtitle has-text-white">
				        An app and wearable ring that helps women who walk alone at night feel safer about their surroundings through community data.
				      </h2>
    				</div>

 				</div>
  		</div>
  		</div>
  		</div>

</section>


);
export default ConvoyHead;