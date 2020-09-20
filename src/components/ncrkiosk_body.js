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
import idea_3_1 from '../images/ncrkiosk/idea_3_1.png';
import idea_3_2 from '../images/ncrkiosk/idea_3_2.png';
import iteration1_kiosk from '../images/ncrkiosk/iteration1_kiosk.png';
import iteration1_phone from '../images/ncrkiosk/iteration1_phone.png';
import session1_inperson from '../images/ncrkiosk/session1_inperson.jpg';
import session1_expert from '../images/ncrkiosk/session1_expert.jpg';
import accessibility_1 from '../images/ncrkiosk/accessibility_1.png';
import accessibility_2 from '../images/ncrkiosk/accessibility_2.png';
import ar_scan from '../images/ncrkiosk/ar_scan.gif';
import ar from '../images/ncrkiosk/ar.png';
import pairing_phone from '../images/ncrkiosk/pairing_phone.png';
import pairing_kiosk from '../images/ncrkiosk/pairing_kiosk.png';
import store_select from '../images/ncrkiosk/store_select.png';
import map from '../images/ncrkiosk/map.png';
import kiosk_refresh_screens from '../images/ncrkiosk/kiosk_refresh_screens.png';


const NCRKioskBody = () => (
  <div className="container is-fluid has-background-eggshell">
    <br></br>

  <br></br>
	<br></br>
  <div id="here" className="columns">
      <div className="column is-1">
        
      </div>
       <div className="column is-1"> </div>
		<div className="column is-9">

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
 <div className="columns is-vcentered">
        <div className="column is-6">
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
    	<p className="subtitle is-6"> I served as the <strong> <font color="#47BO39">project leader for the end of our design phase</font></strong> in this time I defined the meeting agendas, prioritized tasks by identifying team strengths and supported team members, led discussions, and served as a point of contact for our NCR stakeholders.   
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
  <div className="columns is-gapless">

  <div className="column is-2"></div>
  <div className="column is-8">
                <img src={timeline} alt="timeline"/>
          </div>
  <div className="column is-2"></div>
  </div>
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
      <article className="message is-success">
        <div className="message-body">
            
          	<p id="process" className="title is-size-6"> <font color="#47BO39"> Findings </font> </p>
          	<p className="subtitle is-6">
          	We found 3 main accessibility issues with the kiosk:
          	  <br></br>
          	    <br></br>
          	1. <strong> <font color="red"> Lack of Customization. </font></strong> 
          	<li>There was no functionality to zoom in/zoom out on kiosk screen </li>
          	<li> Fixed screen brightness, text size, text alignment, line/letter spacing, border elements</li>
          	</p>
          	<p className="subtitle is-6">
          	2. <strong> <font color="red"> Lack of Feedback. </font></strong> 
          	<li>Kiosk only used different colors and buttons to indicate actions</li>
          	<li> Screen reader only reads page-level navigation commands</li>
          	</p>

          <p className="subtitle is-6">
          3. <strong> <font color="red"> Low Contrast. </font></strong> 
          <li>Difference between the text and the background image was not noticeable</li>
          <li>Inconsistent Bolding</li>
          </p>
      </div>
  </article>

  	</div>
  	<div className="column is-1">
	 

  	</div>
  	<div className="column is-4">
  		  	<img src={mr_merchant} alt="mr_merchant"/>

	  	<img src={standing_one} alt="standing_one"/>
      <p className="subtitle is-7"> Top: Sighted participant using the self-checkout kiosk in NCR's grocery store. <br></br>
      Bottom: Sighted participant doing a think aloud in front of a standing kiosk used to order food at NCR's restaurant.</p>
  	</div>
  </div>

  <p id="competitive_analysis" className="title is-size-5"> <font color="#47BO39"> Competitive Analysis </font> </p>

    	<p className="subtitle is-6">  We wanted to understand what accessibility feature were already available to users in self-service kiosks that were made by competitors (Diebold Nixford, Posiflex, Toshiba, Emboss). We looked at <strong> ADA Compliance, support for Assistive Technology products, customizability of the kiosk screen, and ease of use. </strong> </p>
	
<article className="message is-success">
        <div className="message-body">
  <p id="process" className="title is-size-6"> <font color="#47BO39"> Findings </font> </p>
    	<p className="subtitle is-6"> We found that a disparity existed among top kiosk companies when implementing accessibility features, and overall adding such features may not be a high priority. </p>
  		</div>
      </article>
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




<article className="message is-success">
        <div className="message-body">
		<p id="process" className="title is-size-6"> <font color="#47BO39"> Findings </font> </p>
	<p className="subtitle is-6">
	<li>Fully blind users relies on voice assistant to search and navigate to items on their phone. </li>
	<li>They are <strong> frustrated because apps are not consistent in their layout </strong> so information is read out in a different order. </li>
	<li>They avoid kiosks because <strong> errors are frustrating </strong> and the kiosk provides limited feedback. </li>
	</p>
  </div>
  </article>
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

<article className="message is-success">
        <div className="message-body">
<p id="process" className="title is-size-6"> <font color="#47BO39"> Findings </font> </p>
 
 <p className="subtitle is-6">
   <li><strong>Screen readers, screen magnification, and high contrast mode are the most common assistive technologies </strong> among respondents. </li>
   <li><strong> 64% of visually-impaired respondents get groceries on their own at least once a week </strong>. They do not necessarily rely on others for help while shopping</li>
   <li>Participants preferred scanning items at kiosks, and want a large screen size and adjustable text settings.</li>
</p>
  </div>
</article>
      
<br></br>

<p id="synthesis" className="title is-size-5"> <font color="#47BO39"> Synthesis: Affinity Mapping </font> </p>
<p className="subtitle is-6">Generating insights together was a very rewarding yet perplexing part of our research process. We sifted through the insights from our generative research as a team and organized them in an affinity map. This helped us identify the top pain points our users encountered and create design implications for our design.</p>
    
  <img src={affinity_map} alt="affinity_map"/>

  <div className="buttons is-centered" >
        <button className="button is-light is-medium">
        <a href="https://miro.com/app/board/o9J_kw-V2-I=/"> View Affinity Map</a>
        </button>
      </div>

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

<div className="columns">

  <div className="column is-2">
  </div>
  <div className="column is-8">
              <img src={creativity_chart} alt="creativity_chart"/>
          </div>
  <div className="column is-2"></div>
  </div>
<br></br>

   
  <br></br> 
 

    <p id="synthesis" className="title is-size-5"> <font color="#47BO39"> Design Ideation and Feedback</font> </p>
<p className="subtitle is-size-6"> 
  After considering the feasibility and creativity of each idea, we narrowed our ideas down to three different potential solutions that could solve our research problem.
As we designed the features, we made sure to refer back to our research questions and implications to make sure the design focused on user needs.
   </p>
 <br></br>
 <p className="subtitle is-size-6"> 
To evaluate our design directions, we created wireframes and I moderated a usability test with two legally blind users. We identified sample tasks for them to perform with each wireframe and asked them follow-up questions about their experience. 
  </p>

<br></br>
<div className="columns">

  <div className="column is-2"></div>
  <div className="column is-8">
              <img src={narrowdown_interview} alt="narrowdown_interview"/>
          </div>
  <div className="column is-2"></div>
  </div>
<br></br>

<br></br>

<p className="subtitle is-size-6"> Below are the three design ideas as well as some feedback we received from our users. </p>
<br></br>
<br></br>

<div className="columns is-vcentered">
          <div className="column is-5">
                <p className="title is-size-5"> 
                <br></br>
                  <font color="#47BO39">Idea 1:</font> Customizable Kiosk App - Accessibility Focus </p>
                  <br></br>
                <p className="subtitle is-size-6"> A user can tap to pair their phone with the kiosk. They can customize the kiosk according to their phone’s preferred accessibility settings, as well as keep track of items by viewing receipts of their past purchases.  
                </p>
                <br></br>
                <p className="subtitle is-size-6"> <i> Likes: </i>Users thought <strong> tapping their phone to the self-checkout kiosk was an easy interaction, and the ability to leverage and apply existing accessibility settings was natural </strong>. 
                </p>
                <p className="subtitle is-size-6"> 
                <i> Dislikes: </i>  They expressed <strong> confusion on navigating through the app</strong> and found the <strong>receipt feature difficult to understand </strong>. 
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
<br></br>
<div className="columns is-vcentered">
          <div className="column">
                <p className="title is-size-5"> 
                <br></br>
                   <font color="#47BO39">Idea 2:</font> AR Store Navigation - Navigate and Identify Items </p>
                  <br></br>
                <p className="subtitle is-size-6"> This design idea involved using augmented reality to help users identify store signage and items. It also allows users to scan aisles and sections within aisles in order to identify any needed products and them to their cart.  
                </p>
                <br></br>
                <p className="subtitle is-size-6"> <i> Likes: </i>Users loved the <strong> ability to hear product information using AR, and they found discovering adding items this way was an easy process </strong>. 
                </p>
                <p className="subtitle is-size-6"> 
                <i> Dislikes: </i> They <strong> expressed concern about the safety </strong> of this scenario if they were holding this application while walking around.   
                </p>
          </div>
          <div className="column is-7">
          <br></br>
              <img src={idea_2} alt="idea_2"/>

          </div>
     </div> 
    <br></br>
    <br></br>
<br></br>
<div className="columns is-vcentered">
          <div className="column">
                <p className="title is-size-5"> 
                <br></br>
                   <font color="#47BO39">Idea 3:</font> Smart Cart </p>
                  <br></br>
                <p className="subtitle is-size-6"> This design idea involved using a physical sensor attached to grocery cart that would identify items in your grocery cart. This idea also had an interface that users could use to add items in their cart or upload a digital shopping list that would send to the kiosk.
                </p>
                <br></br>
                <p className="subtitle is-size-6"> <i> Likes: </i> The ability of the smart grocery cart to <strong> read items aloud and instantly add them to the user's virtual shopping cart </strong> on the kiosk was <strong> helpful </strong> to them. 
                </p>
                <p className="subtitle is-size-6"> 
                <i> Dislikes: </i> Users thought this was a <strong> time-consuming process </strong>. They thought it was <strong> tedious to have to put items in their cart to hear the audio feedback needed to identify the item </strong>.   
                </p>

          </div>


          <div className="column is-4">
          <br></br>
                <br></br>
              <img src={idea_3_1} alt="idea_3_1"/>
          </div>
          <div className="column is-3">
          <br></br>
                <br></br>
              <img src={idea_3_2} alt="idea_3_2"/>
          </div>
     </div> 
    <br></br>
    <br></br>

    <p id="synthesis" className="title is-size-5"> <font color="#47BO39"> Final Solution</font> </p>
     <br></br>

<p className="subtitle is-size-6"> We considered the feedback we received from our testing session and decided on an idea that would integrate elements from each divergent design. </p>

<p className="subtitle is-size-6"> We primarily went with Design 1: Tap to Change Accessibility to allow users to customize and pair their accessibility settings to the NCR kiosk, as we felt it best addressed the underlying accessibility issues with the original kiosk. 
  </p>

<p className="subtitle is-size-6"> The other features include:</p>
<p className="subtitle is-size-6"> 
<li><strong>A 3D map </strong>to help users find items in a selected store and understand a store’s layout</li>

<li><strong>Creating shopping lists prior to shopping </strong> and viewing these items on the 3D Map of their chosen grocery store. </li>

<li>Tap their phone to <strong> pair the app to the kiosk and send their customized accessibility settings </strong> and shopping list </li>

  <li>If users chose to checkout at the kiosk, computer vision would be used to <strong> recognize items when they are held up in front of the kiosk in a new scanning interaction that eliminates barcodes.</strong> </li>
     <br></br>
          <br></br>
Our designers created multiple iterations, and tested our idea with our users and experts to refine our design. 
</p>

     <br></br>
          <br></br>


         <p id="synthesis" className="title is-size-5 has-text-centered"> <font color="#47BO39"> Low-Fidelity - Kiosk </font> </p>

    <br></br>
                  

            <div className="columns">
             <div className="column is-1"></div>
                  <div className="column is-10">
                  <img src={iteration1_kiosk} alt="iteration1_kiosk"/>
                  </div>
             <div className="column is-1"></div>
             </div> 
    <br></br>
          <p id="synthesis" className="title is-size-5 has-text-centered"> <font color="#47BO39"> Low Fidelity - Phone Screens </font> </p>


            <div className="columns">
              <div className="column is-1"></div>
                  <div className="column is-10">
                  <img src={iteration1_phone} alt="iteration1_phone"/>
                  </div>
              <div className="column is-1"></div>
            </div>


    <br></br>
         <p id="synthesis" className="title is-size-5 has-text-centered"> <font color="#47BO39"> User Testing - Low Fidelity </font> </p>
<br></br>
<br></br>
     <p className="subtitle is-size-6">For the low-fidelity iteration, I led user testing and feedback sessions to help us understand how to improve the usability of our solution concerning universal design. We had two feedback sessions: Experts and Moderated Usability Testing. </p>
  <br></br>
<button className="button is-light is-medium">
        <a href=''> View Script</a>
        </button>

  <br></br>
  <br></br>
    <br></br>
  <div className="columns is-centered">
    <div className="column is-6 is-vcentered">
       <p className="subtitle is-size-6"> <strong> A. Expert Evaluation - 2 UX Architects and 1 UX Designer </strong> </p>
       <img src={session1_expert} alt="session1_expert"/>
        <p className="subtitle is-size-6">We recruited UX experts of different backgrounds because we wanted a broad UX perspective for expert feedback for our prototype. Through a Cognitive Walkthrough, our experts could work through tasks from the perspective of a user, think out loud, and call out design considerations.  
        </p>
    </div>
    <div className="column is-6">
      <p className="subtitle is-size-6"> <strong> B. Moderated Usability Testing -  Sighted NCR employees </strong></p>
        <img src={session1_inperson} alt="session1_inperson"/>
       <p className="subtitle is-size-6">We asked sighted NCR employees to think aloud as they complete sample tasks with our prototype. Because our aim was for universal design, we included this audience to test with to determine if the flow and screens made sense to them. 
      </p>
      </div>
  </div>
  <br></br>


<article className="message is-success">
  <div className="message-body">
            <p id="process" className="title is-size-6"> <font color="#47BO39"> Findings </font> </p>

 <p className="subtitle is-size-6">
 <strong>Likes:</strong>
<li>Our participants thought the system seemed intuitive and clean.  </li>
<li>They loved the feature that lets users hold their items in front of the kiosk in order to scan, eliminating the need for barcodes. </li>
<li>The users also responded positively to the new interaction of pairing phones to the kiosk.</li>
</p>

<strong>Opportunities for Improvement:</strong>
<li>The concept of pairing the phone was initially confusing to users, and they wished they had more prompts from the kiosk and phone to guide them through the pairing process.</li>
<li>Adding items to their cart with the plus button was not intuitive, and clicking on the item image was preferred. </li>

  </div>
</article>

 <br></br>
          <br></br>
         <p id="synthesis" className="title is-size-5 has-text-centered"> <font color="#47BO39"> Final Iteration </font> </p>
          <br></br>
          <div className="columns is-vcentered">
          <div className="column">
                <p className="title is-size-5"> 
                <br></br>
                   Accessibility</p>
                  <br></br>
                <p className="subtitle is-size-6"> Since most blind/low-vision users have iPhones, we leveraged the iOS accessibility settings and allowed users to customize the kiosk screen with these familiar settings. Current kiosks do not have accessibility settings needed by most users with visual impaitments to use it properly. Additionally, users expressed difficulties viewing paper reciepts, so the app lets them save and organize their receipts. 
                </p>
                <br></br>
          </div>


          <div className="column is-4">
          <br></br>
                <br></br>
              <img src={accessibility_1} alt="accessibility_1"/>
          </div>
          <div className="column is-4">
          <br></br>
                <br></br>
              <img src={accessibility_2} alt="accessibility_2"/>
          </div>
     </div> 
    <br></br>
    <br></br>
          <div className="columns is-vcentered">
          <div className="column">
                <p className="title is-size-5"> 
                <br></br>
                   AR Scanning</p>
                  <br></br>
                <p className="subtitle is-size-6"> Since users have difficulty reading price tags and scanning barcodes, we simulated a high-contrast AR scanner that scans and give more information about items when the user's phone is pointed to it.  
                </p>
                <br></br>
          </div>
          <div className="column is-5">
          <br></br>
                <br></br>
              <img src={ar_scan} alt="ar_scan"/>
          </div>
          <div className="column is-3">
          <br></br>
                <br></br>
              <img src={ar} alt="ar"/>
          </div>
     </div> 
    <br></br>
    <br></br>
          <div className="columns is-vcentered">
          <div className="column">
                <p className="title is-size-5"> 
                <br></br>
                   Store Selection and 3D Map</p>
                  <br></br>
                <p className="subtitle is-size-6"> Users can zoom into the map to understand a store's layout. Additionally, a voice UI reads items scanned with AR scanner. Users expressed they learn about a store's layout before visiting, and totally blind users rely on a voice assistant to complete everyday tasks.
                </p>
                <br></br>
          </div>
          <div className="column is-5">
          <br></br>
                <br></br>
              <img src={store_select} alt="store_select"/>
          </div>
          <div className="column is-3">
          <br></br>
                <br></br>
              <img src={map} alt="map"/>
          </div>
     </div> 
    <br></br>
    <br></br>
          <div className="columns is-vcentered">
          <div className="column">
                <p className="title is-size-5"> 
                <br></br>
                   Pairing Screens - Kiosk & iPhone</p>
                  <br></br>
                <p className="subtitle is-size-6"> 
                  Users hold their phone near the self-checkout kiosk in order to send accessibility settings to the kiosk to customize the UI. The phone and kiosk screens will update in sync to give feedback to the user about the status of the pairing process.  
                </p>
                <br></br>
          </div>
          <div className="column is-3">
              <img src={pairing_phone} alt="pairing_phone"/>
          </div>
          <div className="column is-5">
              <img src={pairing_kiosk} alt="pairing_kiosk"/>
          </div>
          
     </div> 
    <br></br>
    <br></br>
          <div className="columns is-vcentered">
          <div className="column">
                <p className="title is-size-5"> 
                <br></br>
                   High-Contrast Kiosk Screens</p>
                  <br></br>
                <p className="subtitle is-size-6"> 
                  The kiosk interface was updated to align with accessibility design guideliens, such as high-contrast, bold fonts, text size, and more.   
                </p>
                <br></br>
          </div>
        
          <div className="column is-8">
              <img src={kiosk_refresh_screens} alt="kiosk_refresh_screen"/>
              <p className="subtitle is-size-6 has-text-centered"> 
                       <br></br>
                  The old welcome screen vs. the new welcome screen 
                </p>
          </div>
          
     </div> 
    <br></br>
    








    <br></br>




	</div>
</div>
</div>

);
export default NCRKioskBody;