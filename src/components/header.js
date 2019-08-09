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
				 
			
				  <ScrollAnimation animateIn="fadeInLeft">
				  <h1> <strong> Hello, I'm Anjali! </strong> </h1>
				   <br></br>
				  </ScrollAnimation>
					<div className="subtitle"> I’m an aspiring UX / product designer studying Human-Computer Interaction at Georgia Tech.
					I'm exploring the intersections of HCI, Psychology, and social responsibility to create thoughtful and inclusive experiences. 	</div>	

				  <span>

				<a href="https://drive.google.com/file/d/1xQwBC6j8b40Ig8jAGv8UyqTsbpgXUdv2/view?usp=sharing" target="_blank" className="button is-dark is-small">View My Resume</a>
				</span> 
								  <br></br>
								  				  <br></br>


				  <div className="subtitle"> Let's chat: anjali.devakumar@gmail.com</div>	
				  <a href="https://github.com/adevakumar/" target="_blank"> 
					<img style={{
      width: "5%",
    height: "auto"

    }}
    src={github} alt="github"/>
    			</a>
							<span> &nbsp; </span>

					<a href="https://www.linkedin.com/in/anjali-devakumar/" target="_blank"> 
				<img style={{
      width: "5%",
    height: "auto"

    }}
    src={linkedin} alt="linkedin"/>
				</a>
				<span> &nbsp; </span>
				
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
