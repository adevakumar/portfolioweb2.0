import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/

import phonescreen from '../images/ncrkiosk/phonescreen.png';
import kiosk_refresh from '../images/ncrkiosk/kiosk_refresh.png';
import timeline from '../images/ncrkiosk/timeline.png';
import mr_merchant from '../images/ncrkiosk/mr_merchant.png';
import standing_one from '../images/ncrkiosk/standing_one.jpeg';
import blind_interview from '../images/ncrkiosk/blind_participant.jpg';
import affinity_map from '../images/ncrkiosk/affinity_map.png';
import creativity_chart from '../images/ncrkiosk/creativity_chart.png';
import narrowdown_interview from '../images/ncrkiosk/narrowdown_interview.jpg';
import idea_1_1 from '../images/ncrkiosk/idea_1_1.jpg';
import idea_1_2 from '../images/ncrkiosk/idea_1_2.jpg';
import idea_2 from '../images/ncrkiosk/idea_2.png';


const NCRKioskBody = () => (
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
            <li><a href="#contribution"><font color="#F5F5F5">___</font>Contribution</a></li>
            <li><a href="#logistics"><font color="#F5F5F5">___</font>Logistics</a></li>
            <li><a href="#process"><font color="#F5F5F5">___</font>Process</a></li>


             <li><a href="#gen_research"><strong>2. Generative Research</strong></a></li>
            <li><a href="#secondary_research"><font color="#F5F5F5">___</font>Secondary Research</a></li>
            <li><a href="#comp_analysis"><font color="#F5F5F5">___</font>Competitive Analysis</a></li>
            <li><a href="#discovery_interviews"><font color="#F5F5F5">___</font>Discovery Interviews</a></li>
            <li><a href="#affinity_mapping"><font color="#F5F5F5">___</font>Affinity Mapping</a></li>
            <li><a href="#survey"><font color="#F5F5F5">___</font>Survey</a></li>
            <li><a href="#task_analysis"><font color="#F5F5F5">___</font>Task Analysis</a></li>
            <li><a href="#design_implications"><font color="#F5F5F5">___</font>Design Implications</a></li>
            <li><a href="#refined_statement"><font color="#F5F5F5">___</font>Refined Problem Statement</a></li>

            <li><a href="#design"><strong>3. Design</strong></a></li>
            <li><a href="#informed_brainstorming"><font color="#F5F5F5">___</font>Informed Brainstorming</a></li>
            <li><a href="#divergent_solutions"><font color="#F5F5F5">___</font>Divergent Solutions</a></li>
            <li><a href="#rideshare"><font color="#F5F5F5">___</font>Ridesharing</a></li>
            <li><a href="#buddies"><font color="#F5F5F5">___</font>Walking Buddies</a></li>
            <li><a href="#crime"><font color="#F5F5F5">___</font>Crime Data</a></li>

            <li><a href="#narrow_design"><font color="#F5F5F5">___</font>Narrowing Down the Designs</a></li>
            <li><a href="#low_fidelity"><font color="#F5F5F5">___</font>Low Fidelity Flow - Convoy</a></li>
            <li><a href="#iteration_1_convoy"><font color="#F5F5F5">___</font>Iteration 1 - Convoy</a></li>
            <li><a href="#iteration_1_convoyplus"><font color="#F5F5F5">___</font>Iteration 1 - Convoy+</a></li>
            <li><a href="#final_prototype_convoy"><font color="#F5F5F5">___</font>Final Prototype - Convoy</a></li>
            <li><a href="#final_design_convoyplus"><font color="#F5F5F5">___</font>Final Design - Convoy+</a></li>

            <li><a href="#evaluation"><strong>4. Evaluative Research</strong></a></li>
            <li><a href="#moderated_usertesting"><font color="#F5F5F5">___</font>Moderated User Testing</a></li>
            <li><a href="#moderated_usertesting_convoyplus"><font color="#F5F5F5">___</font>Moderated User Testing - Convoy+</a></li>
            <li><a href="#findings_design"><font color="#F5F5F5">___</font>Findings - Design Improvements Convoy</a></li>
            <li><a href="#findings_convoyplus"><font color="#F5F5F5">___</font>Findings - Design Improvements Convoy+</a></li>
            <li><a href="#future_work"><font color="#F5F5F5">___</font>Future Work</a></li>
          </ul>
          <br></br>
        </div>
      </div>
		<div className="column is-10">

		<h3 id="overview" className= "title is-size-4"> 
  <font color="#000080">
  Overview 
  </font></h3>
  <br></br>
  <p id="problem" className="title is-size-5"> <font color="#47BO39"> Problem Focus</font> </p>
  <br></br>
  <div className="columns">
  <div className="column is-3"> 
  </div>
        <div className="column is-6">
	 		<p className="subtitle is-5 has-text-centered"> <i> 
	 		In the year 2050, the amount of individuals with visual impairments is expected to double to more than 8 million. 
	  		</i></p>
 	 	</div>
  	<div className="column is-3"> 
  </div>
  </div>
 <br></br>
    <p className="subtitle is-6"> NCR is one of the largest kiosk providers, selling self-service kiosks, ATM machines, and more in 180+ countries. The current self-service NCR kiosks need an upgrade to the accessibility features for users that are visually impaired. While NCR’s kiosks contain several accessibility features for visually impaired users, there is still more progress to be made in this area.
 In a semester-long collaboration, my team <strong> created a self-checkout grocery store kiosk concept that addresses visually-impaired user pain points and aligns with NCR’s business goals</strong>.</p>
  <br></br>

<p id="problem" className="title is-size-5"> <font color="#47BO39"> Solution</font> </p>
 <br></br>
 <div className="columns">
        <div className="column is-6">
          <br></br>
    <p className="subtitle is-6"> 1. A <strong> mobile app that pairs with a self-checkout kiosk to help visually-impaired individuals efficiently scan, checkout, and pay for their items. </strong></p>
     <p className="subtitle is-6"> The app additionally helps such individuals locate grocery items in the store using an interactive store map, display product information using AR technology, and transfer their accessibility settings preferences to the kiosk screen. </p>
    <p className="subtitle is-6"> 2. A <strong> refreshed kiosk interface in line with current accessibility standards.</strong> </p>
  		</div>
  		<div className="column is-2">
  	<img src={phonescreen} alt="phonescreen"/>
  	</div>
  	  <div className="column is-4">

  	<img src={kiosk_refresh} alt="kiosk_refresh"/>
  		</div>
  	</div>


  <br></br>

  
  <br></br>

  <p id="contribution" className="title is-size-5"> <font color="#47BO39"> Contribution </font> </p>
  <br></br>
    	<p className="subtitle is-6"> As the <strong> <font color="#47BO39"> lead UX researcher</font></strong>, I designed and created our interview protocol and survey, planned our research timeline, recruited participants and conducted interviews, and led expert and usability testing. I additionally aided in the creation of concept sketches and  wireframes for our divergent design phase, and I designed any voice assistant technology in the prototype.
</p>
  <br></br>
    	<p className="subtitle is-6"> I served as the <strong> <font color="#47BO39">project master for the end of our design phase</font></strong> in this time I defined the meeting agendas, prioritized tasks by identifying team strengths and supported team members, led discussions, and served as a point of contact for our NCR stakeholders.   
</p>
  <br></br>

  <p id="logistics" className="title is-size-5"> <font color="#47BO39"> The Team </font> </p>

  <nav className="level">
  <div className="level-item">
    <div>
      <p className="heading">My Role</p>
      <p className="subtitle is-size-6">UX Research</p>
      <p className="subtitle is-size-6 has-text-white">" " </p>
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
      <p className="subtitle is-size-6">Figma, Sketch, Paper Prototyping (High-Fidelity Protoypes)</p>
            <p className="subtitle is-size-6">Miro</p>
      <p className="subtitle is-size-6 has-text-white">" " </p>
    </div>
  </div>
  </nav>

  <p id="process" className="title is-size-5"> <font color="#47BO39"> Research Process </font> </p>
  	<img src={timeline} alt="timeline"/>
  <br></br>
    <br></br>

   <br></br>
     <br></br>
    <br></br>

  <h3 id="gen_research" className= "title is-size-4"> 
  <font color="#47BO39">
  Generative Research </font></h3>

<p id="secondary_research" className="title is-size-5"> <font color="#47BO39"> Guiding Questions </font> </p>
  <p className="subtitle is-6">To understand visually impaired users better we conducted multiple research activities. A few questions that we wanted to answer with our activities: </p>


  <p className="subtitle is-6">1. How does NCR's current kiosk system work? </p>

<p className="subtitle is-6">2. How do our target audience utilize assistive technologies? Is there a common preference for a feature? </p>

<p className="subtitle is-6">3. How do our users use current self-checkout kiosks? What are their challenges and what goes well?</p>

  <br></br>
  <br></br>
   <div className="columns">

  	  <div className="column is-7">

     <br></br>
    <br></br>
      <br></br>
<br></br>
      <br></br>
  	    <p id="secondary_research" className="title is-size-5"> <font color="#47BO39"> Accessibility Evaluation/Observations </font> </p>

  	  
  	  <p className="subtitle is-6"> After familiarizing ourselves with web and kiosk accessibility guidelines, our team started by observing NCR's kiosks in use to identify the existing accessibility features, pain points, and opportunities for improvement. 
  	  </p>
	<p id="process" className="title is-size-6"> <font color="#47BO39"> Findings </font> </p>
	<p className="subtitle is-6">
	We found 3 main accessibility issues with the kiosk:
	  <br></br>
	    <br></br>
	1. <strong> Lack of Customization. </strong> 
	<li>There was no functionality to zoom in/zoom out on kiosk screen </li>
	<li> Fixed screen brightness, text size, text alignment, line/letter spacing, border elements</li>
	</p>
	<p className="subtitle is-6">
	2. <strong> Lack of Feedback. </strong> 
	<li>Kiosk only used different colors and buttons to indicate actions</li>
	<li> Screen reader only reads page-level navigation commands</li>
	</p>

<p className="subtitle is-6">
3. <strong> Low Contrast </strong> 
<li>Difference between the text and the background image was not noticeable</li>
<li>Inconsistent Bolding</li>
</p>


  	</div>
  	<div className="column is-1">
	 

  	</div>
  	<div className="column is-4">
  		  	<img src={mr_merchant} alt="mr_merchant"/>

	  	<img src={standing_one} alt="standing_one"/>
      <p className="subtitle is-7"> Top: Sighted participant using the self-checkout kiosk in NCR's grocery store. Bottom: Sighted participant doing a think aloud in front of a standing kiosk used to order food at NCR's restaurant.
</p>
  	</div>
  </div>

  <p id="competitive_analysis" className="title is-size-5"> <font color="#47BO39"> Competitive Analysis </font> </p>

    	<p className="subtitle is-6">  We wanted to understand what accessibility feature were already available to users in self-service kiosks that were made by competitors (Diebold Nixford, Posiflex, Toshiba, Emboss). We looked at <strong> ADA Compliance, support for Assistive Technology products, customizability of the kiosk screen, and ease of use. </strong> </p>
	<p id="process" className="title is-size-6"> <font color="#47BO39"> Findings </font> </p>
    	<p className="subtitle is-6"> We found that a disparity existed among top kiosk companies when implementing accessibility features, and overall adding such features may not be a high priority. </p>
  		<br></br>
		
		<br></br>
		 	<p id="competitive_analysis" className="title is-size-5"> <font color="#47BO39"> Semi-structured Interview (n = 3) </font> </p>

		<br></br>
		<br></br>

 <div className="columns">
  <div className="column is-3"> 
  </div>
          <div className="column is-6">
 	<p className="subtitle is-5 has-text-centered"> <i><strong>
		"The kiosks aren't really something I use. I get frustrated, because sometimes the voice works and sometimes it doesn't. I'd love to be able to use it one day though."</strong>
  </i>
  </p>
  	<p className="subtitle is-6 has-text-centered"> <i>
		  User 1 - Fully Blind 
  </i>
  </p>
  </div>
  <div className="column is-3"> 
  </div>
  </div>

	<br></br>
	<br></br>

<div className="columns">
	<div className="column is-6">
	<p className="subtitle is-6"> Since we are still in the early stages of our research, interviewing visually-impaired users would help us get insights into how they used assistive and regular technology, shopped for groceries, and if or how they receive assistance for technology. We <strong> interviewed 3 legally blind participants and observed one of them using their assistive technology </strong> .</p>

		<p id="process" className="title is-size-6"> <font color="#47BO39"> Findings </font> </p>
	<p className="subtitle is-6">
	<li>Fully blind users relies on voice assistant to search and navigate to items on their phone. </li>
	<li>They are <strong> frustrated because apps are not consistent in their layout </strong> so information is read out in a different order. </li>
	<li>They avoid kiosks because <strong> errors are frustrating </strong> and the kiosk provides limited feedback. </li>
	</p>
			<br></br>
	</div>
	<div className="column is-1">
	</div>
	<div className="column is-5">
		<img src={blind_interview} alt="blind_interview"/>
    <p className="subtitle is-7"> Our team conducting an interview with a blind user. I served as the interview moderator and my teammates took notes/artifacts.
</p>
	</div>
	</div>
<br></br>

<p id="survey" className="title is-size-5"> <font color="#47BO39"> Survey: Visually-Impaired People and Support Network (n = 37) </font> </p>

<p className="subtitle is-6"> I designed and deployed a survey using Qualtrics because of its high accessibility to visually impaired users and their support network. The survey helped us reach a wider audience and supplement the qualitative data we obtained from interviews, competitor analysis, and observations.
</p>
<p className="subtitle is-6"> We wanted to find out users' likes and dislikes in regards to self-service kiosks in grocery stores, their preferences in regards to assistive technologies, and we also wanted to understand how people who work with blind individuals or family members of people with visual impairments may help them.</p>

<p id="process" className="title is-size-6"> <font color="#47BO39"> Findings </font> </p>
 
 <p className="subtitle is-6">
   <li><strong>Screen readers, screen magnification, and high contrast mode are the most common assistive technologies </strong> among respondents. </li>
   <li><strong> 64% of visually-impaired respondents get groceries on their own at least once a week </strong>. They do not necessarily rely on others for help while shopping</li>
   <li>Participants preferred scanning items at kiosks, and want a large screen size and adjustable text settings.</li>

</p>
<br></br>

<p id="synthesis" className="title is-size-5"> <font color="#47BO39"> Synthesis: Affinity Mapping </font> </p>
<p className="subtitle is-6">Generating insights together was a very rewarding yet perplexing part of our research process. We sifted through the insights from our generative research as a team and organized them in an affinity map. This helped us identify the top pain points our users encountered and create design implications for our design.</p>
    <img src={affinity_map} alt="affinity_map"/>


<p className="subtitle is-7 has-text-centered"> Link to board: https://miro.com/app/board/o9J_kw-V2-I=/ 
</p>

<br></br>

<p id="survey" className="title is-size-5"> <font color="#47BO39"> Top Pain Points </font> </p>
 
<p className="subtitle is-6">From the research conducted, we prioritzed several challenges our target audience had using a self-service kiosk.
Below are the major pain points experienced by the users that were prioritized for the first iterations. Priority was chosen based on common themes expressed through generative research and feedback from users.</p>
  <br></br>
    <div className="columns">
          <div className="column">
              <div id="ncr_box" className="box">
                <p id="gen_research" className="subtitle is-size-6"> <font color="white"> 1. Screen reader audio is not enough to help in navigating the kiosk
                </font> </p>
              </div>
          </div>
          <div className="column">
              <div id="ncr_box" className="box">
                <p id="gen_research" className="subtitle is-size-6"> <font color="white"> 2. Limited feedback does not guide users on actions to perform
                </font> </p>
              </div>
          </div>
          <div className="column">
              <div id="ncr_box" className="box">
                <p id="gen_research" className="subtitle is-size-6"> <font color="white"> 3. Frustrating error-recovery process, often requires external assistance
                </font> </p>

              </div>
          </div>
          </div>
          <div className="columns">
          <div className="column">
              <div id="ncr_box" className="box">
                <p id="gen_research" className="subtitle is-size-6"> <font color="white"> 4. Text size and color contrast not optimized for visually impaired functioning
                </font> </p>
              </div>
          </div>
          <div className="column">
              <div id="ncr_box" className="box">
                <p id="gen_research" className="subtitle is-size-6"> <font color="white"> 5. Kiosk accessibility features not consistent or familiar with existing accessibility conventions
                </font> </p>
              </div>
          </div>
          </div>
  <br></br>
    <br></br>

<p id="synthesis" className="title is-size-5"> <font color="#47BO39"> Design Implications </font> </p>
<p className="subtitle is-6">From the pain points, as a team we brainstormed several top needs our design would address to focus our efforts and ensure our design would address these pain points. 
</p>

  <br></br>
    <div className="columns">
          <div className="column">
              <div id="ncr_box" className="box">
                <p className="subtitle is-size-6"> <font color="white"> Customize the visual elements of the kiosk interface

                </font> </p>
              </div>
          </div>
          <div className="column">
              <div id="ncr_box" className="box">
                <p id="gen_research" className="subtitle is-size-6"> <font color="white"> Leverage existing technologies visually impaired individuals utilize

                </font> </p>
              </div>
          </div>
          <div className="column">
              <div id="ncr_box" className="box">
                <p id="gen_research" className="subtitle is-size-6"> <font color="white"> Incorporate Universal Design Principles
                </font> </p>

              </div>
          </div>
          </div>
          <div className="columns">
          <div className="column">
              <div id="ncr_box" className="box">
                <p id="gen_research" className="subtitle is-size-6"> <font color="white"> Ensure users remain in control of actions
                </font> </p>
              </div>
          </div>
          <div className="column">
              <div id="ncr_box" className="box">
                <p id="gen_research" className="subtitle is-size-6"> <font color="white"> Provide various feedback modalities - auditory, visual, etc.
                </font> </p>
              </div>
          </div>
          </div>
  <br></br>
    <br></br>
        <br></br>

    <h3 id="gen_research" className= "title is-size-4"> 
  <font color="#47BO39">
  Design </font></h3>
    <br></br>
    <br></br>

  <p id="synthesis" className="title is-size-5"> <font color="#47BO39"> Brainstorming </font> </p>
    <p className="subtitle is-size-6"> After our initial research activities, we conducted an informed brainstorming session as a team using the pain points and design implications we identified. We timed ourselves and generated ideas freely on sticky notes, and organized the ideas in a Creativity vs. Feasibility matrix to prioritze ideas that were both creative yet realistic in our timeline. </p>

    <br></br>
    <img src={creativity_chart} alt="creativity_chart"/>
    <br></br>

  <br></br> 
 

    <p id="synthesis" className="title is-size-5"> <font color="#47BO39"> Design Ideation and Feedback</font> </p>
<p className="subtitle is-size-6"> 
  After considering the feasibility and creativity of each idea, we narrowed our ideas down to three different potential solutions that could solve our problem.
As we designed the features, we made sure to refer back to our research questions and implications to make sure the design focused on user needs.
   </p>
 <br></br>
 <p className="subtitle is-size-6"> 
To evaluate our design directions, we created wireframes and I moderated a usability test with two legally blind users. We identified sample tasks for them to perform with each wireframe and asked them follow-up questions about their experience. 
  </p>

<br></br>

<p className="subtitle is-size-6"> Below are the three design ideas as well as some feedback we received from our users. </p>
<br></br>
<br></br>

<div className="columns">
          <div className="column is-5">
                <p className="title is-size-5"> 
                <br></br>
                  Idea 1: Customizable Kiosk App - Accessibility Focus </p>
                  <br></br>
                <p className="subtitle is-size-6"> A user can tap to pair their phone with the kiosk. They can customize the kiosk according to their phone’s preferred accessibility settings, as well as keep track of items by viewing receipts of their past purchases.  
                </p>
          </div>
          <div className="column is-1">

          </div> 
          <div className="column is-3">
              <img src={idea_1_2} alt="idea_1_2"/>

          </div> 
          <div className="column is-3">
              <img src={idea_1_1} alt="idea_1_1"/>

          </div> 
     </div> 
<br></br>
<br></br>
<div className="columns">
          <div className="column">
                <p className="title is-size-5"> 
                <br></br>
                  Idea 2: AR Store Navigation - Navigate and Identify Items </p>
                  <br></br>
                <p className="subtitle is-size-6"> This design idea involved using augmented reality to help users identify store signage and items. It also allows users to scan aisles and sections within aisles in order to identify any needed products and them to their cart.  
                </p>
          </div>
          <div className="column is-7">
              <img src={idea_2} alt="idea_2"/>

          </div>
     </div> 
    <br></br>
    <br></br>

<div className="columns">
          <div className="column">
                <p className="title is-size-5"> 
                <br></br>
                  Idea 2: Smart Cart </p>
                  <br></br>
                <p className="subtitle is-size-6"> This design idea involved using augmented reality to help users identify store signage and items. It also allows users to scan aisles and sections within aisles in order to identify any needed products and them to their cart.  
                </p>
          </div>
          <div className="column is-7">
              <img src={idea_2} alt="idea_2"/>

          </div>
     </div> 
    <br></br>
    <br></br>




  

















	</div>
</div>
</div>

);
export default NCRKioskBody;