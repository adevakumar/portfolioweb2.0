import React from 'react';

import './style.scss';

/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/

import kiosk from '../images/kiosk.jpg';

const NCRKioskHead = () => (

<section className="hero is-light is-fullheight">
	
  <div className="hero-body">
    <div className="container">
    	<div className="columns is-centered">
				  <div className="columns is-centered">
				  	<div className="column">
					  	<figure id= "projectpic" className="image is-centered">
							<img src={kiosk} alt="kiosk"/>
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
				        NCR Accessibility Kiosk
				      </h1>
				      <br></br>
				      <h2 className="subtitle">
				        Imagining a more accessible kiosk experience for visually impaired users.
				      </h2>
    				</div>

 				</div>
  		</div>
  		</div>
  		</div>

</section>


);
export default NCRKioskHead;