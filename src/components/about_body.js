import React from 'react';

import './style.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import headshot from '../images/headshot.jpg';




const AboutBody = () => (

<div>
<section className="hero is-fullheight is-light is-bold">
   <div className="hero-body">
    <div className="container">
    <div className="columns">
		  <div className="column is-6">
		  <br></br>
		  <br></br>

		    <img src={headshot} alt="headshot"/>
		  </div>
		  <div className="column is-1">
		  	 &nbsp;
		  </div>
		   <ScrollAnimation animateIn="fadeInRight">
		  <div className="column">


		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>

			 <h1 className="title">
	        A bit about Anjali 
	      	</h1>
	      <br></br>
	      	<h2 className="subtitle">
	       	I am recent graduate of Georgia Tech's MS Human-Computer Interaction program, and now I'm a UX Researcher at Chewy. Scroll down to learn more about my journey and interests!
	      </h2>
		  </div>
		  </ScrollAnimation>
	</div>
    </div>
  </div>
</section>

<br></br>
	<br></br>
	<br></br>

  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Journey to HCI
 </h1>
  <br></br>
    <p className="subtitle"> 
    Growing up with a much younger sister sparked my desire to be a positive role model and volunteer to help others out in any capacity. I spent my summers helping my sister out with homework, and seeing my sister’s affinity for digital and interactive educational resources over books sparked my interest in exploring how technology can support learning.
    <br></br>
    <br></br>

    I moved to Massachusetts to attend UMass Amherst for computer science, intending to increase my independence and explore my interests in diversity and thoughtful applications of technology. Throughout my college career, I pursued courses like Psychology, Communication Disorders, and Linguistics and became captivated with their examination of human behavior and I involved myself in projects that allowed me to create solutions that addressed real-life issues. However, taking an Intro to Human-Computer Interaction course my junior year solidified my academic interests. HCI, a field that synthesizes the strong analytical skills of computer science with the human insights of psychology, not only encapsulated everything I hope to study, but it opened my eyes to design’s pervasiveness and impact in everyday objects. This experience motivated me to complete independent interdisciplinary research that would later inspire me to apply to graduate school. 
    <br></br>
    <br></br>

    I graduated from UMass with a BS in Computer Science and pivoted to HCI at Georgia Tech. In my MS-HCI program, I am immersing myself in exciting projects and research opportunities that equip me with the tools I need to design inclusive and seamless user-experiences.  I am excited by the prospect of designing for a variety of mediums - Web, Mobile, AR/VR and exploring the constraints and opportunities each of them present, and I find the process of leveraging insights from research and data and translating them into beautiful experiences truly fulfilling. 
    <br></br>
    <br></br>
</p>
  </div>
<br></br>
    <br></br>
  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Other Interests
 </h1>
  <br></br>
    <p className="heading is-size-5"> Mentorship & Outreach 
    
</p>
  <br></br>

<p className="subtitle"> My mom, a former schoolteacher, would sit patiently with me and help me with my homework when I was in elementary school. As my mother had helped me, I strove to help my younger sister out too. These experiences imparted an appreciation of good teaching on me and taught me the value of a mentor. In college, I furthered this appreciation by becoming involved in recruitment and outreach efforts for Computer Science. Through my job, I served not only as a general face for UMass Computer Science but for most visitors I paint the first impression of college life. I advised potential and current students about the major’s opportunities, aid students in coding workshops, and promote representation by speaking at orientations. My challenges of struggling with impostor syndrome in Computer Science classes, coupled with my tutoring experience, motivated me to become a peer mentor for minorities in STEM fields. I have found helping others through their setbacks humbling and fulfilling, and interacting with a range of students has taught me empathy and how to be a good listener. 

    
</p>

<br></br>
    <p className="heading is-size-5"> Music 
    
</p>
  <br></br>

<p className="subtitle">  
I have learned classical piano since was in middle school, but since I could not bring my piano to college, I started playing the ukelele (badly). I have previously worked at a music festival and I frequently attend concerts as I love the surreal and creative energy of being in a space of people who also appreciate and love live music, and I am extremely excited to explore Atlanta’s music scene! I love learning about and exploring diverse music genres and reorganizing my Spotify playlists in my free time.  	 
</p>

<p className="subtitle">  
What I listen to and love is constantly changing, so here's my On Repeat playlist to show you what's currently on rotation for me!</p>
<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1Eph0VUmkYYgSK" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe><br></br>
  <br></br>
    <p className="heading is-size-5"> Traveling 
    
</p>
  <br></br>


<p className="subtitle">  
I grew up in the Bay Area for 18 years before taking the plunge to move to Massachusetts for college. Since then, my family has moved to a suburb of Dallas, TX. Being exposed to different regional demographics, attitudes, and customs attunes me to a spectrum of lifestyles and thinking, and I am more eager to share ideas and learn about different backgrounds in graduate school. </p>


  </div>
<br></br>
<br></br>
<br></br>

</div>


);

export default AboutBody;