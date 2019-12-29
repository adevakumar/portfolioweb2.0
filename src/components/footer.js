import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';


import './style.scss';


const Footer = () => (
	<section id="navbarMenuHeroA"className="hero is-light is-centered" >
  <div className="hero-body has-text-centered">
  <div className="columns">
  <div className="column is-5"> &nbsp;</div>
  <div className="column is-1">
      <a href="https://github.com/adevakumar/" target="_blank"> 
					<img style={{
      width: "35%",
    height: "auto"

    }}
    src={github} alt="github"/>
    			</a>
			
   </div>
  <div className="column is-1">
      <a href="https://www.linkedin.com/in/anjali-devakumar/" target="_blank"> 
				<img style={{
      width: "35%",
    height: "auto" }}
    src={linkedin} alt="linkedin"/>
		</a>
    </div>
      <div className="column is-5"> &nbsp;</div>

    
</div>
     
				
   
    				<p className="subtitle is-size-6">Made with GatsbyJS and Bulma by Anjali Devakumar in 2019</p>

  </div>
</section>

	

				
);

export default Footer;
