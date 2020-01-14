import React, { Component } from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/
import convoy_hand from '../images/convoy_hand.png';
import convoy_plus from '../images/convoy_plus.png';
import eyewatch_sos from '../images/eyewatch_sos.jpg';
import noonlight from '../images/noonlight.png';
import nimb from '../images/nimb.png';
import comp_analysis from '../images/competitive_analysis_convoy.png';
import discovery_interview from '../images/discovery_interview.png';
import written_answer from '../images/written_answer.png';
import written_answer_2 from '../images/written_answer_2.png';
import convoy_affinity_map from '../images/convoy_affinity_map.png';
import survey_contact from '../images/survey_contact.png';
import survey_safety from '../images/survey_safety.png';
import task_analysis_convoy from '../images/task_analysis_convoy.png';
import design_implications_convoy from '../images/design_implications_convoy.png';
import sticky_brainstorming from '../images/sticky_brainstorming.png';
import creativity_feasibility_convoy from '../images/creativity_feasibility_convoy.png';
import rideshare_story from '../images/rideshare_story.png';





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
  <font color="#000080">
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
  <p id="secondary" className="title is-size-5"> <font color="#000080"> Secondary Research </font> </p>
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

  <p id="competitive_analysis" className="title is-size-5"> <font color="#000080"> Competitive Analysis </font> </p>
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
	 <br></br>
	<img src={comp_analysis} alt="competitive_analysis"/>
		 <br></br>
		 <br></br>
	  <p id="findings" className="title is-size-6"> <font color="#000080"> Findings </font> </p>
	 <br></br>

	  	<p className="subtitle is-6"> 
	  	Based on the commonly seen features in existing products, we noticed that users wanted the ability to a contact a  source like their family as quickly as possible. One of the biggest issues with current products is that the tolerance for errors is low - if a user accidentally presses a panic button on the device that signals for help, the device does not provide the ability to reverse their actions. This fear of making an error causes unneccsary stress to the users, resulting in them not wanting to use the device for protection in unsafe situations. 
	  </p>
	  	 <br></br>

	  	 	<p className="subtitle is-6"> 
	  	 Our team prioritized the following functionalities to include in our solution: </p>


	  	<ul>1. <font color="#000080"> A seamless and fast connection </font> to contact family and friends, a hotline, and/or police.</ul>

		<ul>2. <font color="#000080">A map of the surrounding neighborhood </font> to help with navigation and obtain safety information. </ul>

		<ul>3. <font color="#000080">Feedback to indicate actions are being performed </font> and that the device is responding. </ul>
		<br></br>
		<br></br>

	<p id="discovery" className="title is-size-5"> <font color="#000080"> Discovery Interviews </font> </p>
		<br></br>
		<img src={discovery_interview} alt="discovery_interview" className="center"/>
		<br></br>
		<br></br>
		<p className="subtitle is-6">
			At the start of this research phase, we hypothesized that a few stressors women have about walking alone at night include needing to avoiding strangers, not having weapons to defend themselves, difficulty calling the police , and making sure to have their phone in their hands to reach out to someone. 
		</p>
		<br></br>
		<p className="subtitle is-6"> <font color="#000080"> <u> Method Details </u></font></p>
		<p className="subtitle is-6">
		To better understand our users experiences and garner support for our hypothesis, we conducted semi-structured interviews with <font color="#000080"> 9 female participants between 18-35 years old living in or near a big city </font>.
		</p>
	
		<p className="subtitle is-6">
		During the interview, we asked <font color="#000080"> open-ended questions relating to their experiences being in unsafe situations, how they perceive safety, and what actions they take in response. </font> We also had participants write about conditions that make them feel safe or unsafe. </p>
		
		<br></br>
	<div className="columns">
		<div className="column">
			<img src={written_answer} alt="written_answer"/>
		</div>
		<div className="column">
			<img src={written_answer_2} alt="written_answer_2"/>
		</div>

	</div>
	<p className="subtitle is-6 has-text-centered"> <i> Sample Written Answers </i> </p>
	<br></br>

	<p id="discovery" className="title is-size-5"> <font color="#000080"> Affinity Mapping </font> </p>
	<br></br>
	<p className="subtitle is-6">
		To analyze our findings, the team built an affinity map to quickly sift through qualitative findings before jumping to solutions. We grouped related notes and created a hierarchy with 5 major themes - <font color="#000080"> News/Media, People's Feelings, Infrastructure, Staying Alert, and Familiarity with Surroundings.</font> </p>
	<br></br>
	<img src={convoy_affinity_map} alt="convoy_affinity_map"/>
	<br></br>
	<p className="subtitle is-6">
	Top Findings: </p>
	<ul>1. <font color="#000080"> Compared to more familiar areas, unfamiliar areas make users feel less safe. </font> </ul>
	<ul>2. <font color="#000080"> There is a desire not to be alone, so users contact others.</font> </ul>
	<ul>3. <font color="#000080">Users feel uncomfortable reaching out to police if they are in danger. </font> </ul>
	<ul>4. <font color="#000080">Busier areas make users feel safe.</font> </ul>
	<ul>5. <font color="#000080">Users feel safer walking with a buddy. </font> </ul>
	<ul>6. <font color="#000080">Media and external rumors shape the perception of how safe an area is. </font> </ul>
	<br></br>
		<p id="discovery" className="title is-size-5"> <font color="#000080"> Survey </font> </p>
	<p className="subtitle is-6">
	We administered a follow-up survey to obtain quantitative data and compare and contrast the survey answers with the information our participants shared verbally during the interview. 
	</p>
	<p className="subtitle is-6"> <strong><font color="#000080"> Details:  </font> </strong> </p>
	<li>36 responses total </li> 
	<li>Created using Google Forms</li>
	<li>Distributed through personal social media and in a slack channel for research participations/survey </li>
	<li>Adapted questions asked in interview (travel practices & safety perceptions) to have Likert-scale responses </li>
	<br></br>
		<p className="subtitle is-6"> <strong><font color="#000080"> Findings:  </font> </strong> </p>

	<p className="subtitle is-6">
		We used Google Forms automatically generated bar and pie charts to view the distribution of responses. The scale is 1 = Never, 5 = Always
	</p>
	<p className="subtitle is-6">
		Overall, from survey data, we saw that women aim to <font color="#000080"> stay alert, stick to a walking routine/familiar paths, and avoid areas that tend to be assosciated with lower safety </font>. 
	</p>
	<div className="columns">
		<div className="column">
			<p className="subtitle is-6"> <font color="#000080"> <strong> External Contact takeaways: </strong> </font> </p>

<p className="subtitle is-6"> A <font color="#000080"> majority </font> of our respondents revealed that they would <font color="#000080">prefer to not be walking alone </font>. </p>

<p className="subtitle is-6"> <font color="#000080">69.4% </font> of participants said they would <font color="#000080"> have company while walking </font>. </p>

<p className="subtitle is-6"> <font color="#000080">88.8% </font> of women preferred to <font color="#000080">reach out to someone while walking</font>. </p>

		</div>
		<div className="column">
			<img src={survey_contact} alt="survey_contact"/>
				<br></br>
			<p className="subtitle is-6"> <font color="#000080">69.4% </font>of our respondents stated that they would <font color="#000080">not reach out to the police if they needed help.</font> </p>
		</div>
	</div>
	<br></br>
		<div className="columns">
		<div className="column">
			<p className="subtitle is-6"> <font color="#000080"> <strong> Safety takeaways: </strong> </font> </p>

<p className="subtitle is-6"> When asked about staying safe, participants responded they tend to seek out areas that are: 
		<font color="#000080">
		<ul>1. well lit</ul>
		<ul>2. well-maintained</ul>
		<ul>3. streets are more crowded</ul>
		</font>
		</p>
		</div>
		<div className="column">
			<br></br>
			<img src={survey_contact} alt="survey_safety"/>
			<br></br>
			<p className="subtitle is-6"> <font color="#000080">69.5% </font> of our respondents stated that they <font color="#000080">felt unsafe holding a weapon (like pepper spray).</font></p>
		</div>
	</div>
			<br></br>

	<p id="discovery" className="title is-size-5"> <font color="#000080"> Task Analysis </font> </p>

	<p className="subtitle is-6">From the interview and survey data, I created task analysis diagrams to represent the various scenarios that involve women walking alone at night. The task analysis helped us identify all the smaller actions users engage in as they begin walking. As they walk in an urban environment, they experience many sounds and sights and need a solution that does not distract them from their surrounding awareness. We initially found it difficult to break down a vague task like this, but we soon were able to identify a pattern among the tasks that our users followed depending on the context. 
	</p>
		<br></br>
	<p className="subtitle is-6"> The three situations we explored are: 
		<font color="#000080">
		<ul>1. Traveling alone during the day to their destination</ul>
		<ul>2. Traveling alone during the night to their destination</ul>
		<ul>3. Escaping from an unsafe situation at night</ul>
		</font>
	</p>
	<br></br>
	<p className="subtitle is-6">Below is the task analysis chart for Escaping from an unsafe situation at night. </p>
		<img src={task_analysis_convoy} alt="task_analysis_convoy"/>
	<br></br>
	<p className="subtitle is-6">Tasks 1 to 3 are arranged in likelihood of increased agitation occurring. The user progressively feels unsafe and therefore engages in
more active behavior. The tasks have potential to occur simultaneously too (for example, a user might constantly be looking over their
shoulder as they are reaching for their phone). Overall, the level of variability increases in this scenario because the context fluctuates. </p>
	<br></br>

	<p id="design_implications" className="title is-size-5"> <font color="#000080"> Design Implications </font> </p>

	<p className="subtitle is-6">Through generative research, I explored the challenges, fears, and worries faced by young adult women when they are walking alone at
night. As a team, we took the main pain-points we identified from our research and developed criteria that our solutions should aim to include. 
They are presented below in this table.	</p>
		<img src={design_implications_convoy} alt="design_implications_convoy"/>
	<br></br>
	<br></br>	<br></br>
	<p id="refined_statement" className="title is-size-5"> <font color="#000080"> Refined Problem Statement </font> </p>
		<p className="subtitle is-6">
			From identifying our users primary pain points, we refined the scope of our design to address the following questions:
		</p> 
		    <p className="subtitle is-5 has-text-centered"> <i> How can we connect users to others seamlessly while still allowing them to be aware of their surroundings?</i> 
    </p>
    		<p className="subtitle is-5 has-text-centered"> <i> How can we display safety reports and authentic news stories in an understandable manner?
</i> 
    </p>
<br></br><br></br>
      <h3 id="overview" className= "title is-size-4"> <font color="#000080">Design </font></h3>
      <br></br>
      	<p id="discovery" className="title is-size-5"> <font color="#000080"> Informed Brainstorming </font> </p>
      			<img src={sticky_brainstorming} alt="sticky_brainstorming" className="center"/>
      			 <br></br>
      		<p className="subtitle is-6">Our refined problem statement and exploratory user research enabled our team to conduct an informed brainstroming session to generate solutions. As a team, we wrote potential ideas on sticky notes. We created a Creativity vs Feasbility chart which enabled us to categorize each idea on a uniform scale. 
      		</p>
      		<p className="subtitle is-6">
			At the end of this session, we narrowed down to ideas with high creativity and feasibility. Although we wanted our idea to be novel, we did not want to build an impractical solution that did not align with current technological capabilities. 
			</p>
			<img src={creativity_feasibility_convoy} alt="creativity_feasibility_convoy"/>

			<p id="divergent_solutions" className="title is-size-5"> <font color="#000080"> Divergent Solutions </font> </p>

			<p className="subtitle is-6">
			We noticed a central theme arising from our four design ideas; women wanted to be connected to some external resources or information that could help them feel safe. Using our Creativity vs. Feasbility chart, we drilled down on our ideas to create three divergent designs that still addressed our fundamental problem, and we also quickly brainstormed the pros and cons of each design idea. As a team, we sought user feedback to help refine these ideas and create low-fidelity wireframes to determine each solution’s functionality. I created the low-fidelity wireframes in Sketch for the Local Buddy divergent design idea. 
			</p>
			 <br></br>
			<p id="rideshare" className="title is-size-5 has-text-centered"> <font color="#000080"> <i> Idea 1: Rideshare </i> </font> </p>
			<img src={rideshare_story} alt="rideshare_story" class="center"/>
			<br></br>
			<div className="columns">
		<div className="column">
				<br></br>
			<p className="subtitle is-5"> This solution presents users with an application and key fob that can tap into existing transportation to remove themselves from dangerous situations. In the SOLO mode, users can find nearby bikes, rental cars, or scooters to unlock and drive away. In DUO mode, users can find and be directed to a projected meeting spot for pickup by a trusted rideshare service.</p>
		</div>
		<div className="column">
			<img src={survey_contact} alt="survey_contact"/>
				<br></br>
			<p className="subtitle is-6"> <font color="#000080">69.4% </font>of our respondents stated that they would <font color="#000080">not reach out to the police if they needed help.</font> </p>
		</div>
	</div>
	







    </div>
    </div>


</div>


  	

);
export default ConvoyBody;