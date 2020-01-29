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
	<section className="hero white is-fullheight">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<div className="columns is-centered">
				  <div className="columns is-centered">
				  <div className="column is-6">
				  <br></br>
				  <br></br>
				  <br></br>
				  <br></br>
				  <br></br>
				  <br></br>
				  <br></br>
				  <br></br>
				 
			
				  <ScrollAnimation animateIn="fadeInLeft">
				  <h1> <strong> Hello, I'm Anjali! </strong> </h1>
				   <br></br>
				  </ScrollAnimation>
					<div className="subtitle"> I’m a UX Designer + Researcher studying Human-Computer Interaction at Georgia Tech.
					I explore the intersections of HCI, Psychology, and social responsibility to create thoughtful and inclusive experiences. 	</div>	

				  <span>

				<a href="https://drive.google.com/file/d/1FOwnBQCwFSCc_xC3Opi9pISEH4srIosl/view?usp=sharing" target="_blank" className="button is-outlined is-link">View My Resume</a>
				</span> 
				
				  </div>
				  <div className="column is-5 is-horizontal-center">
				  	<br></br>
				  	<br></br>
				  	<br></br>

				    <img style={{
      width: "100%",
    height: "auto"

    }}
    src={anjaliLogo} alt="anjali-logo"/>
				  </div>
  				</div>	
			</div>
		</div>
		</div>
		<div className="container center">
		<ScrollAnimation animateIn="fadeInLeft">
		<figure class="image container image is-48x48">
	  						<img src={down_arrow} alt="down_arrow"/>
						</figure>
				
			</ScrollAnimation>
		</div>
		<br></br>
				  <br></br>
		<br></br>
				  <br></br>
	</section>
);

export default Header;
