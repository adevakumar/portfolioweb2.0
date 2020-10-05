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
import chewy from '../images/chewy.jpg';


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
					    	<p>My experience as a Graduate Teaching Assistant and Peer Mentor gave me a strong foundation in public speaking and mentorship, and working in these roles helps me communicate with fellow peers and stakeholders and be a good listener. </p>
					  	
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
							<strong> <p className="title is-size-4"> Interdisciplinary Skills </p> </strong>
						</ScrollAnimation>
							<br></br>
					    	<p> My interdisciplinary background of Computer Science and Psychology allows me to relate to Engineers and Designers and consider their needs when making decisions. </p>
					  	
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
			<div id="projects" className="container">
			<ScrollAnimation animateIn="fadeInDown">
				<h1 className="title is-size-3 has-text-centered">Projects</h1>
			</ScrollAnimation>
				<br></br>
				<br></br>


			<div class="container">
				<div class="columns is-multiline">
				   <div class="column is-2"></div>
				   <div class="column is-4">
				    	<Link to="/ncrkiosk/">
				      	<div class="card">
				        	<div class="card-image">

							    <figure class="image is-centered">
							    	<img src={kiosk} alt="kiosk"/>
							    </figure>
						  	</div>
						  	<div class="content">

						  		<div class="hvr-underline-from-left">

				    			<h2>Accessible Self-Checkout NCR Kiosk</h2>

				    			</div>
								<br></br>
								<br></br>
				
						    		<p>Imagining a more accessible kiosk experience for visually impaired users. Sponsored by NCR.</p>
						    		<p className="heading is-size-6"><strong> <font color="#eb3f3b"> UX Research, Accessibility, UX Design </font></strong></p>

				     		 </div>

				      
					 </div>
		 
			     	</Link>
			     
   			
   					 </div>
    			<div class="column is-4">
    			<Link to="/">
				      <div class="card">
				      	
				        	<div class="card-image">
							    <figure class="image is-centerd">
							    	<img src={chewy} alt="chewy"/>
							    </figure>
						 	</div>
						  	<div class="content">
						  		<div class="hvr-underline-from-left">

				    			<h2>Chewy UX Research Internship</h2>


						    	</div>
						    	<br></br>
								<br></br>
						    	<p>Developing a process to conduct accessible research studies remotely. Coming Soon!</p>
						    	<p className="heading is-size-6"><strong> <font color="#eb3f3b"> UX Research, Accessibility </font> </strong></p>

				      		</div>
				      	</div>
			     </Link>
   				 </div>
				<div class="column is-2"></div>
				<div class="column is-2"></div>
				<div class="column is-4">
    			<Link to="/convoy/">
				      <div class="card">
				        	<div class="card-image">
							    <figure class="image is-centered">
							    	<img src={walking} alt="walking"/>
							    </figure>
						 	</div>
						  	<div class="content">
						  	<div class="hvr-underline-from-left">
				    			<h2>Convoy - Mobile App and Wearable</h2>
				    			</div>
				    			<br></br>
								<br></br>
						    	<p>Using community data to help women walking alone at night feel safer.</p>
						    	<p className="heading is-size-6"><strong> <font color="#eb3f3b"> UX Research, UX Design </font></strong></p>

				      		</div>
				</div>
			     </Link>
   				 </div>
   				 <div class="column is-4">
    			<Link to="/proj2/">
				      <div class="card">
				        	<div class="card-image">
							    <figure class="image is-centered">
							    	<img src={thesis} alt="thesis"/>
							    </figure>
						 	</div>
						  	<div class="content">
						  		<div class="hvr-underline-from-left">

				    			<h2>Avoiding Deceptive Phishing</h2>
				    			</div> 
				    			<br></br>
								<br></br>
						    	 <p>Assisting people in avoiding and learning how to spot email phishing.</p>
						    	 <p className="heading is-size-6"><strong> <font color="#eb3f3b"> UX Research, UX Design </font> </strong></p>

				      		</div>
				      	</div>
			     </Link>
   				 </div>

  			</div>


</div>








		
            
			</div>
		</section>

		
					
					

							
					
					
					
					
				

	</div>
);



export default Midsection;
