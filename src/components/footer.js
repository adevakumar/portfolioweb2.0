import React from 'react';
import { FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import './style.scss';


const Footer = () => (
	<section id="navbarMenuHeroA"className="hero is-centered" >
  <div className="hero-body has-text-centered">
    <article className="media center">
      
				<span className="icon is-medium has-padding">
					<a href="https://www.linkedin.com/in/anjali-devakumar/" target="_blank"> 
				<FaLinkedin size="fa-1x" className="has-text-link" />
				</a>
				</span>

				<span className="icon is-medium has-padding">
					<a href="https://github.com/adevakumar">
					<FaGithubSquare size="fa-1x" id="specialIcon" />
					</a>
				</span>

				<span className="icon is-medium has-padding">
					<a href="https://github.com/adevakumar/" target="_blank"> 
				<FaGithubSquare size="fa-1x" className="has-text-dark" />
				</a>
				</span>
				<br></br>
				<br></br>
    </article>
    				<p className="subtitle is-size-6">Made with GatsbyJS and Bulma by Anjali Devakumar in 2019</p>

  </div>
</section>

	

				
);

export default Footer;
