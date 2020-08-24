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
					   <br></br>
					   		   <br></br>
					   		   		   <br></br>
				<div className="columns is-centered">
				  <div className="columns is-vcentered">
				  <div className="column is-6">
				  
				  <ScrollAnimation animateIn="fadeInLeft">
				  <h1> <strong> Hello, I'm Anjali! </strong> </h1>
				   <br></br>
				  </ScrollAnimation>
					<div className="subtitle"> I am a 2nd-year Georgia Tech MS student, Teaching Assistant & Research
Assistant specializing in Human-Computer Interaction. My passion for
Computing for Good and Psychology drives me to create seamless and
inclusive experiences.</div>	

	<div className="subtitle"> 
I'm currently looking for <strong>UX Research or UX Design Full Time positions</strong>!</div>

				  <span>

				<a href="https://drive.google.com/file/d/1HG4lqPSG15EkuDVKfd2gpoH_ZjapjYbu/view?usp=sharing" target="_blank" className="button is-outlined is-link">View My Resume</a>
				</span> 
								  	<br></br>
								  	<br></br>
				<div className="subtitle"> Thanks for stopping by!</div>  	
				
				  </div>
				  <div className="column is-1 is-horizontal-center"> </div>
				  <div className="column is-5 is-horizontal-center">

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
