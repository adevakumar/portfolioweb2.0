import React, { Component } from 'react';
import Modal from './Modal';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/
import convoy_hand from '../images/convoy_hand.png';
import convoy_plus from '../images/convoy_plus.png';
import eyewatch_sos from '../images/eyewatch_sos.jpg';
import noonlight from '../images/noonlight.png';
import nimb from '../images/nimb.png';




const ConvoyBody = () => (
        <div className="container is-fullwidth">
    <br></br>

  <br></br>
	<br></br>
  <div id="here" className="columns">
      <div className="column is-2">
        <div className="menu_sticky">  
          <h3 className="heading"><strong><font color="#F5F5F5"> __</font></strong></h3>
          <h3 className="heading"><strong><font color="#F5F5F5"> __</font>Navigation</strong></h3>
          <ul id="menu" className="menu-list">
             <li><a href="#overview"><strong>1. Overview</strong></a></li>
            <li><a href="#problem"><font color="#F5F5F5">___</font>Problem</a></li>
            <li><a href="#solution"><font color="#F5F5F5">___</font>Solution</a></li>
            <li><a href="#details"><font color="#F5F5F5">___</font>Details</a></li>
            <li><a href="#process"><font color="#F5F5F5">___</font>Process</a></li>


             <li><a href="#research"><strong>2. Research</strong></a></li>
            <li><a href="#lit_review"><font color="#F5F5F5">___</font>Literature Review</a></li>
            <li><a href="#understanding_users"><font color="#F5F5F5">___</font>Understanding User Abilities</a></li>

            <li><a href="#design"><strong>3. Design</strong></a></li>
        <li><a href="#design_goals"><font color="#F5F5F5">___</font>Design Goals</a></li>
            <li><a href="#design_flowchart"><font color="#F5F5F5">___</font>Design Flowchart</a></li>
            <li><a href="#low_fi"><font color="#F5F5F5">___</font>Low Fidelity Prototype</a></li>
            <li><a href="#high_fi"><font color="#F5F5F5">___</font>High Fidelity Design</a></li>
            
            <li><a href="#evaluation"><strong>4. Evaluation</strong></a></li>
            <li><a href="#usability_exp"><font color="#F5F5F5">___</font>Usability Experiment</a></li>
            <li><a href="#measure_suc"><font color="#F5F5F5">___</font>Measuring Success</a></li>
            <li><a href="#exp_results"><font color="#F5F5F5">___</font>Experiment Results</a></li>
            <li><a href="#post_survey"><font color="#F5F5F5">___</font>Post Experiment Survey</a></li>
            <li><a href="#feedback"><font color="#F5F5F5">___</font>Design Feedback and Suggestions </a></li>
            <li><a href="#reflections"><font color="#F5F5F5">___</font>Reflections</a></li>
          </ul>
          <br></br>
        </div>
      </div>
<div className="column is-10">
  <h3 id="overview" className= "title is-size-4"> 
  <font color="#F9C77B">
  Overview 
  </font></h3>
  <br></br>
  <p id="problem" className="title is-size-5"> <font color="#000080"> Problem </font> </p>
  <br></br>
    <p className="subtitle is-5 has-text-centered"> <i> In the United States, <font color="#000080"> 45% </font> of women report they do not feel safe walking alone at night, as compared to <font color="#000080"> 27% </font> of men </i>. 
    </p>
    <p className="subtitle is-6">Women take precautionary measures such as rearrange or limit their plans to only be out in daylight, walk different routes, and inform loved ones of their locations.  With such statistics that demonstrate the problem’s impact, existing products on the market use everything from wearable bracelets and panic buttons to location sharing and police networks to address this issue. However, no one solution in the space of women’s safety are robust in adequately assisting or protecting women while also helping them stay aware of their surroundsings.</p>
  <br></br>

  <p id="solution" className="title is-size-5"> <font color="#000080"> Solution </font> </p>
  <br></br>
    <p className="subtitle is-6"> Our team wanted to explore creating <font color="#000080"> a system that could empower women with information that helped them feel safer at night. </font> We came up with Convoy, a mobile application and wearable suite to address the feelings of insecurity that women who walk alone at night feel. </p>
  <br></br>
  <div className="columns is-flex is-vcentered">
  <div className="column is-1 is-centered">
  </div>
  	<div className="column is-4 is-centered">
  	<img src={convoy_hand} alt="convoy_hand"/>
  	  <br></br>
  	</div>
  	<div className="column is-3 is-centered">
  </div>
  	<div className="column is-3 is-centered">
  	<img src={convoy_plus} alt="convoy_plus"/>
  		 	  <br></br>
  	</div>
  	<div className="column is-1 is-vcentered">
  </div>
  </div>
    <div className="columns is-flex">
  <div className="column is-5">
  	    	<p className="subtitle is-6 has-text-centered"> Convoy is an app that connects users with credible data taken from crime reports, prioritizing what aspects in a surrounding area make them feel safer, and aiding them in picking safer walking routes.</p>

  </div>
  <div className="column is-2 is-centered">

  </div>
  	<div className="column is-5">
  		  		  <p className="subtitle is-6 has-text-centered"> This app can be paired with Convoy+, a wearable ring that uses haptic feedback and lights to convey route information from the app to users. This information can help women feel more secure about their surroundings and more safe when they travel.</p>
  </div>
  </div>


  <br></br>

   <p id="details" className="title is-size-5"> <font color="#000080"> Contribution </font> </p>
  <br></br>
    	<p className="subtitle is-6"> As the <strong> <font color="#000080"> lead UX researcher</font></strong>, I designed and created our interview protocol and survey, recruited participants and conducted interviews, identified relevant evaluation metrics for Convoy and Convoy+, and led Convoy’s usability testing. I additionally aided in the creation of concept sketches, wireframes and the information architecture.  
</p>
  <br></br>
    	<p className="subtitle is-6"> I served as the <strong> <font color="#000080">project master for the end of our design phase</font></strong> in this time I defined the meeting agendas, prioritized tasks by identifying team strengths and supported team members, led discussions, and served as a point of contact for users and external resources.   
</p>
  <br></br>


  <p id="details" className="title is-size-5"> <font color="#000080"> Logistics </font> </p>

  <nav className="level">
  <div className="level-item">
    <div>
      <p className="heading">My Role</p>
      <p className="subtitle is-size-6">UX Research</p>
      <p className="subtitle is-size-6">UX Design</p>
      <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  <div className="level-item">
    <div>
      <p className="heading">Duration</p>
      <p className="subtitle is-size-6">Aug 2019 - Dec 2019</p>
            <p className="subtitle is-size-6 has-text-white">" " </p>
      <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  <div className="level-item">
    <div>
      <p className="heading">Teammates</p>
      <p className="subtitle is-size-6">Morgan Chin</p>
      <p className="subtitle is-size-6">Nektar Ege Altinoprak</p>
      <p className="subtitle is-size-6">Yujin Xue</p>


    </div>
  </div>
  <div className="level-item">
    <div>
      <p className="heading">Tools</p>
      <p className="subtitle is-size-6">Figma (High-Fidelity Protoypes)</p>
            <p className="subtitle is-size-6">Sketch</p>
            <p className="subtitle is-size-6">Paper, Pencil</p>
    </div>
  </div>
  </nav>

  <br></br>
  <p id="process" className="title is-size-5"> <font color="#000080"> Process </font> </p>
    <div className="columns">
          <div className="column">
              <div id="convoy_process" className="box">
                <p className="title is-size-5"> <font color="white"> 1. Generative Research </font> </p>
                <p>
                 <font color="white">Secondary Research</font>
                   <br></br>
                 <font color="white">Competitive Analysis</font>
                 <br></br>
                 <font color="white">Semi-structured Interviews</font>
                 <br></br>
                 <font color="white">Survey</font>
                 <br></br>
                 <font color="white">Task Analysis</font>
                 <br></br>
                 <font color="white">Design Implications</font>

                </p>
              </div>
          </div>
          <div className="column">
              <div id="convoy_process"  className="box">
                <p className="title is-size-5"> <font color="white"> 2. Iterative Design </font> </p>
                <p>
                 <font color="white"> Informed Brainstorming </font>
                   <br></br>
                 <font color="white"> Divergent Designs </font>
                 <br></br>
                 <font color="white"> Wireframes </font>
                 <br></br>
                 <font color="white"> High-Fidelity Prototype </font>
                 <br></br>
                 <br></br>
                 <br></br>

                </p>
              </div>
          </div>
          <div className="column">
              <div id="convoy_process" className="box">
                <p className="title is-size-5"> <font color="white"> 3. Evaluative Research </font> </p>
                <p>
                 <font color="white"> Moderated Usability Testing </font>
                   <br></br>
                 <font color="white"> Design Implications </font>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                </p>
              </div>
          </div>
          </div>
  <br></br>
    <br></br>
  <h3 id="research" className= "title is-size-4"> 
  <font color="#000080">
  Generative Research </font></h3>
    <br></br>
  <p id="solution" className="title is-size-5"> <font color="#000080"> Secondary Research </font> </p>
  <br></br>
    <p className="subtitle is-6"> Goals:</p>
    <li className="subtitle is-6">Identify which demographic group experiences feelings of insecurity and unsafety while walking alone</li>
<li className="subtitle is-6">Identify what triggers in the environment contribute to feelings of unsafety</li>
<li className="subtitle is-6">Understand how notions of safety form about an area </li>
<li className="subtitle is-6">Understand common reactive and proactive measures taken to increase safety </li>
  <br></br>
  <p className="subtitle is-6"> By looking at existing news articles, safety and crime statistics, and other desktop research sources, we were able to better understand the population most affected by safety concerns while walking at night. At the end of this phase of our research, we determined that <strong> <font color="#000080"> young working women in cities are our primary users, with an emphasis on women not very familiar with the area. </font> </strong> Through further generative research, we hoped to understand our user’s actions and feelings and evaluate the current state of women’s safety products. 
  </p>

  <br></br>

  <p id="solution" className="title is-size-5"> <font color="#000080"> Competitive Analysis </font> </p>
  <br></br>

    <p className="subtitle is-6"> After understanding our problem space, our team studied safety applications and wearable technology aimed at keeping women safe. We wanted to understand what products on the market were offering and areas they could be improved. 
    </p>
      <br></br>
	<div className="columns">
	<div className="column is-1">
          </div>
          <div className="column is-vcentered">
            <img src={eyewatch_sos} alt="eyewatch_sos" height="300" width="230"/>
          </div>
        
          <div className="column is-vcentered">
          <img src={nimb} alt="nimb"/>
          </div>
         <div className="column is-1">
          </div>
          <div className="column is-vcentered">
              <img src={noonlight} alt="noonlight"/>
          </div>
    </div>
      <br></br>
	<p className="subtitle is-6"> 
    	We created a chart to compare the features offered by each product. By comparing the products, we saw that each product catered to a specific safety need. Therefore, users would have to have multiple products in order to get all the features that they may need.
	</p>
	<div id="main">
	</div>

      </div>

    </div>


</div>


  	

);
export default ConvoyBody;