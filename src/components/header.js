import React from 'react';
import { FaArrowAltCircleDown,
	FaLinkedin, FaGithubSquare

 } from 'react-icons/fa';

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
				  </ScrollAnimation>
				  <br></br>
					<div className="subtitle"> I’m an aspiring UX / product designer studying Human-Computer Interaction at Georgia Tech.
					I'm exploring the intersections of HCI, Psychology, and social responsibility to create thoughtful and inclusive experiences. 	</div>	
				  <div className="subtitle"> Let's chat: anjali.devakumar@gmail.com</div>	
				  <span className="icon is-medium">
					<a href="https://www.linkedin.com/in/anjali-devakumar/" target="_blank"> 
				<FaLinkedin size="fa-1x" className="has-text-link" />
				</a>
				</span> 
				<span className="icon is-small" target="_blank">
						<FaLinkedin size="fa-1x" className="has-text-white" />
				</span> 
				<span className="icon is-medium has-padding">
					
				<a href="https://github.com/adevakumar/" target="_blank"> 
				<FaGithubSquare size="fa-1x" className="has-text-dark" />
				</a>

				</span>
				<span className="icon is-small" target="_blank">
						<FaLinkedin size="fa-1x" className="has-text-white" />
				</span> 
				<span>

				<a href="https://drive.google.com/file/d/1xQwBC6j8b40Ig8jAGv8UyqTsbpgXUdv2/view?usp=sharing" target="_blank" className="button is-dark is-small">Resume</a>
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
				<span className="icon is-medium is-padded">
					<FaArrowAltCircleDown size="fa-1x" className="has-text-grey" />
				</span>
			
		
		</div>
		<br></br>
				  <br></br>
		<br></br>
				  <br></br>
	</section>
);

export default Header;
