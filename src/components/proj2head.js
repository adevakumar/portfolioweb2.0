import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';*/
import "animate.css/animate.min.css";
import thesis from '../images/thesis.png';



const Proj2Head = () => (
<section className="hero is-light is-fullheight">
	
  <div className="hero-body">
    <div className="container">
    	<div className="columns is-centered">
				  <div className="columns is-centered">
				  	<div className="column">
					  	<figure id= "projectpic" className="image is-centered">
							<img src={thesis} alt="thesis"/>
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
				        Undergraduate Honors Thesis
				      </h1>
				      <br></br>
				      <h2 className="subtitle">
				        Enlisting Principles From Cognitive Psychology To Design Secure Emails
				      </h2>
    				</div>

 				</div>
  		</div>
  		</div>
  		</div>

</section>


);
export default Proj2Head;