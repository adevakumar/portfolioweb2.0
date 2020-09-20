import React from 'react';

import './style.scss';
import Emoji from './emoji';
import tjx from '../images/tjx.png';
import thesis from '../images/thesis.png';
import fridge from '../images/fridge_helper.png';
import schoolviz from '../images/schoolviz.png';
import mastree from '../images/mastree.png';
import leader from '../images/leader.png';
import dev from '../images/dev.png';
import design from '../images/design.png';
import walking from '../images/walking.png';
import kiosk from '../images/kiosk.png';


import Box from './hover';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Link } from 'gatsby';

const TileItem = props => (
  <Link className="image is-centered" to={props.page}>
  </Link>
)

const Midsection = () => (
	<div>
	<section className="hero is-medium is-bold has-text-centered has-text-dark">
			<div id="skills" className="hero-body">
				<ScrollAnimation animateIn="fadeIn">
				<ScrollAnimation animateIn="fadeInDown">
				<h1 className="title is-size-3">Skills</h1>
				</ScrollAnimation>
				<br></br>
				<br></br>
				<br></br>
					<div class="columns">
					  <div class="column">
					  	<figure class="image container is-128x128">
					  		<img src={leader} alt="leader"/>
 						</figure>
						<ScrollAnimation animateIn="fadeInLeft">
							<br></br>
							<strong> <p className="title is-size-4">Communication </p> </strong>
						</ScrollAnimation>
						<br></br>
					    	<p>My experience as a Peer Mentor, Computer Science Ambassador, and TA gave me a strong foundation in public speaking and mentorship. Additionally, my interdisciplinary background allows me to relate to Engineers and Designers and consider their needs when making decisions. </p>
					  	
					  </div>
					  <div class="column">
					  	<figure class="image container is-128x128">
	  						<img src={design} alt="design"/>

						</figure>
						<ScrollAnimation animateIn="fadeInLeft">
							<br></br>
							<strong> <p className="title is-size-4"> Storytelling with Data </p> </strong>
						</ScrollAnimation>
							<br></br>
					    	<p>I am skilled at understanding and uncovering insights about user behavior from research
data. More importantly, I know how to communicate these insights and turn them into action
items that benefit the overall product.</p>
					  	
					  </div>
					  <div class="column">
					  	<figure class="image container is-128x128">
	  						<img src={dev} alt="dev"/>
						</figure>
						<ScrollAnimation animateIn="fadeInLeft">
							<br></br>
							<strong> <p className="title is-size-4">Front-End Development  </p> </strong>
						</ScrollAnimation>
							<br></br>
					    	<p> Using my Computer Science background, I can control and translate pixel-perfect visual designs into responsive and scalable websites and web apps.</p>
					  	
					  </div>
					</div>
				<br></br>
				<br></br>
				</ScrollAnimation>
				<Link to="/about/">
					<a class="button is-light">Learn More</a>
				</Link>

				</div>
	</section>

		<section className="section">
			<br></br>
			<div id="projects" className="container is-fluid">
				<ScrollAnimation animateIn="fadeInDown">
				<h1 className="title is-size-3 has-text-centered">Projects</h1>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp">
						<br></br>
						<br></br>
						<div className="columns is-multiline">
							<div className="column is-2 has-text-white">
							<div>
								&nbsp;
							</div>
							</div>		
							

							<div className="column is-4">
								<Link to="/ncrkiosk/">
								<Box className="box">


									<div class="card">
										<div class="card-image">
									    <figure class="image is-centered">
									    	<img src={kiosk} alt="kiosk"/>
									    </figure>
									</div>
									<div class="content">
							    		<h2>NCR Kiosk Accessibility</h2>
									    <p className="heading is-size-7"><strong>UX Research, UX Design</strong></p>
									    <p>Imagining a more accessible kiosk experience for visually impaired users.</p>
							      	</div>
						      	</div>
						      	 
						      </Box>
						       </Link>

							
							</div>	

							<div className="column is-4">
							<Link to="/convoy/">
								<Box className="box">
								<div class="card">
									<div class="card-image">
								    <figure class="image is-centered">
								    	<img src={walking} alt="walking"/>
								    </figure>
								  	</div>
								<div class="content" id="help">
						    		<h2>Convoy</h2>
								    <p className="heading is-size-7"><strong>UX Research, UX Design</strong></p>
								    <p>Using community data to help women walking alone at night feel safer.</p>
						      </div>
						      </div>
						      </Box>
			     			</Link>
							
							</div>

							<div className="column is-2 has-text-white">
							<div>
								&nbsp;
							</div>
							</div>
							<div className="column is-1 has-text-white">
							<div>
								&nbsp;
							</div>
							</div>	
								
							<div className="column is-5">
							<Link to="/proj2/">
								<Box className="box">
								<div class="card">
									<div class="card-image">
								    <figure class="image is-centered">
								    	<img src={thesis} alt="thesis"/>
								    </figure>
								  	</div>
								<div class="content" id="help">
						    		<h2>Avoiding Deceptive Phishing</h2>
								    <p className="heading is-size-7"><strong>UX Research, UX Design</strong></p>
								    <p>Assisting people in avoiding and learning how to spot email phishing scams.</p>
						      </div>
						      </div>
						      </Box>
			     			</Link>
							</div>	

							<div className="column is-5">
							<Link to="/proj5/">
								<Box className="box">
									<div class="card">
										<div class="card-image">
									    <figure class="image is-centered">
									    	<img src={mastree} alt="mastree"/>
									    </figure>
									</div>
									<div class="content">
							    		<h2>Mastree</h2>
									    <p className="heading is-size-7"><strong>Graphic Design, UX Design</strong></p>
									    <p>Helping people accomplish foundational skills and gain basic technical knowledge on a simple platform.</p>
							      	</div>
						      	</div>
						      </Box>
			     			</Link>
					
							</div>

							<div className="column is-1 has-text-white">
							<div>
								&nbsp;
							</div>
							</div>
							
					
					

							
					
					
					
					
				

				</div>
				</ScrollAnimation>

			</div>
		</section>
	</div>
);



export default Midsection;
