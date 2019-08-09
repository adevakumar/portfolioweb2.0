import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import bee from '../images/bee.png';
import pot from '../images/pot.png';
import login from '../images/dailyui_login.png';
import reminder from '../images/dailyui_reminder.png';
import buscard from '../images/buscard.png';
import anjaliLogo from '../images/anjali_vector.png';
import flyer from '../images/flyer.png';



const DesignComp = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<section className="container white is-large">
			<div className="hero-body">
				<br></br>
				<br></br>
				<br></br>
				<ScrollAnimation animateIn="fadeInDown">
				<h1 className="title is-size-3 has-text-centered">Design</h1>
				</ScrollAnimation>
				<br></br>
				<p className="subtitle is-size-5 has-text-centered">This is my current collection of branding, visual design, UX design, and graphic design I've done for academic and personal projects, or simply for fun! I am always practicing these skills in my free time, so stay tuned for more updated work!</p>
				<br></br>
				<br></br>

				<h1 className = "title is-size-5"> Vector Artwork </h1>
				<br></br>
				<p> I have recently been trying my hand at vector art because I want to improve my visual design skills. I created all the graphics for this website in addition to what is shown below. Created using Sketch. </p>
				<br></br>

				<div className="columns is-multiline">
							<div className="column">
							<img 
    src={pot} alt="pot"/>
    						<p className="subtitle is-size-6">Succulent</p>
							</div>	
							<div className="column">
							<img 
    src={anjaliLogo} alt="anjali-logo"/>
    						<p className="subtitle is-size-6">Anjali at work</p>
							</div>	
							<div className="column">
							<img 
    src={bee} alt="bee"/>
    						<p className="subtitle is-size-6">My toy bee</p>
							</div>							
								
				</div>
				<br></br>
				<br></br>

				<h1 className = "title is-size-5"> Daily UI Challenge </h1>
				<br></br>
				<p> In an attempt to sharpen my UX design skills, I
attempted some of the DailyUI design challenge. Here are some designs I completed for the challenge below. Created using Adobe XD. </p>

				<br></br>

				<div className="columns is-multiline">
					<div className="column">
						<img src={login} alt="login"/>
						<p className="subtitle is-size-6">Login Form</p>
					</div>	
					<div className="column">
						<img src={reminder} alt="reminder"/>
						<p className="subtitle is-size-6">Alarm / Reminder</p>
					</div>	
				</div>
				<br></br>
				<br></br>
				<h1 className = "title is-size-5"> Miscellaneous Design </h1>
				<br></br>
				
				<br></br>
				
				<div className="columns is-multiline">
					<div className="column">
						<img src={buscard} alt="buscard"/>
						<p className="subtitle is-size-6">UMass themed business card</p>
					</div>	
					<div className="column">
						<img src={flyer} alt="flyer"/>
						<p className="subtitle is-size-6">Thesis recruitment poster</p>
					</div>	
				</div>
			
			</div>
		</section>
		<Footer />
	</div>
);

export default DesignComp;