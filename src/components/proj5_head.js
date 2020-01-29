import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/
import mastree from '../images/mastree.png';



const Proj5Head = () => (
<section className="hero is-light is-fullheight">
	
  <div className="hero-body">
    <div className="container">
    	<div className="columns is-centered">
				  <div className="columns is-centered is-vcentered">
				  	<div className="column">
					  	<figure id= "projectpic" className="image is-centered">
							<img src={mastree} alt="mastree"/>
						</figure>
					</div>				  
				  	<div className="column">
				  		
				      <h1 className="title is-size-2">
				        Mastree
				      </h1>
				      <br></br>
				      <h2 className="subtitle">
				        Semester Project for UMass Amherst's Software Entrepreneurship Course
				      </h2>
    				</div>

 				</div>
  		</div>
  		</div>
  		</div>

</section>


);
export default Proj5Head;