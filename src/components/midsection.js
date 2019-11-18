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
	<section className="hero is-medium is-dark is-bold has-text-centered">
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
							<strong> <p className="title is-size-4">Leadership </p> </strong>
						</ScrollAnimation>
						<br></br>
					    	<p>By working on cross-functional teams and serving as a Computer Science Student Ambassador, I gained confidence in publicly speaking in front of large crowds and small groups, and expressing ideas to a variety of audiences. </p>
					  	
					  </div>
					  <div class="column">
					  	<figure class="image container is-128x128">
	  						<img src={design} alt="design"/>

						</figure>
						<ScrollAnimation animateIn="fadeInLeft">
							<br></br>
							<strong> <p className="title is-size-4">Design </p> </strong>
						</ScrollAnimation>
							<br></br>
					    	<p>I have a keen eye for branding, aesthetics, and consistent components that leverage insights from engineering and psychology to make functional, interactive, and pleasing things. </p>
					  	
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
							
					<div className="column is-1 has-text-white">
							<div>
								&nbsp;
							</div>
							</div>		
							<div className="column is-5">
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
								    <p>Helping women who walk alone at night feel safer through community data..</p>
						      </div>
						      </div>
						      </Box>
			     			</Link>
							</div>	

							<div className="column is-5">
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

							<div className="column is-1 has-text-white">
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
					<Link to="/proj3/">

						<Box className="box">
							<div className="tile is-ancestor">
							<div className="tile is-parent">
						        <article className="tile is-child box is-white">
						          <figure className="image is-centered">
					            	<img src={fridge} alt="fridge_helper"/>
						          </figure>
						         <br></br>
						          <p className="title is-size-4">Fridge Helper</p>
					          	  <p className="subtitle">Intro to HCI project, UMass</p>
						        </article>
						      </div>
						      </div>	
	     				</Box>	
	     				</Link>
				
					</div>
					
				
					
					
					
				

				</div>
				</ScrollAnimation>

			</div>
		</section>
	</div>
);



export default Midsection;
