import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/
import low_fidelity from '../images/low_fidelity.jpeg';
import fake_spotify from '../images/spotify_hover_hoax.jpg';
import fake_link from '../images/spotify_review_link.jpg';
import fake_recomm from '../images/spotify_recomm.jpg';
import google_warning from '../images/google_warning.png';
import google_red from '../images/google_red.png';
import inky from '../images/inky.png';
import balance from '../images/balance.png';
import turn from '../images/turn.png';
import idea from '../images/idea.png';
import recommended from '../images/recommended.png';
import flowchart from '../images/flowchart_phishing.png';
import proceed from '../images/proceed.png';
import distrust from '../images/distrust.png';
import alternative from '../images/alternative.png';
import spotify_review_link from '../images/spotify_review_link.jpg';
import spotify_recomm from '../images/spotify_recomm.jpg';
import bofa_review_link from '../images/bofa_email.jpg';
import bofa_recomm from '../images/bofa_warning_recomm.jpg';
import phishing_sus from '../images/phishing_sus_results.png';
import no_phishing_sus from '../images/no_phishing_results.png';
import design_response from '../images/design_intervention_response.png';
import no_design_response from '../images/no_design_response.png';




const Proj2Body = () => (
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
            <li><a href="#problem"><font color="white">___</font>Problem</a></li>
            <li><a href="#solution"><font color="white">___</font>Solution</a></li>
            <li><a href="#details"><font color="white">___</font>Details</a></li>
            <li><a href="#process"><font color="white">___</font>Process</a></li>


             <li><a href="#research"><strong>2. Research</strong></a></li>
            <li><a href="#lit_review"><font color="white">___</font>Literature Review</a></li>
            <li><a href="#understanding_users"><font color="white">___</font>Understanding User Abilities</a></li>

            <li><a href="#design"><strong>3. Design</strong></a></li>
        <li><a href="#design_goals"><font color="white">___</font>Design Goals</a></li>
            <li><a href="#design_flowchart"><font color="white">___</font>Design Flowchart</a></li>
            <li><a href="#low_fi"><font color="white">___</font>Low Fidelity Prototype</a></li>
            <li><a href="#high_fi"><font color="white">___</font>High Fidelity Design</a></li>
            
            <li><a href="#evaluation"><strong>4. Evaluation</strong></a></li>
            <li><a href="#evaluation"><font color="white">___</font>Usability Experiment</a></li>
            <li><a href="#evaluation"><font color="white">___</font>Measuring Success</a></li>
          </ul>
          <br></br>
          <br></br>
        </div>
      </div>
<div className="column is-10">
  <h3 id="overview" className= "title is-size-4"> 
  <font color="#F9C77B">
  Overview 
  </font></h3>
  <br></br>
  <p id="problem" className="title is-size-5"> <font color="#F9C77B"> Problem </font> </p>
  <br></br>
    <p className="subtitle is-6"> Deceptive phishing refers to an attack by which hackers mimic a legitimate company and attempt to steal a customer's credentials. This attack commonly occurs over email and websites to create a false representation of legitimacy for unassuming users. The average person does not actively think about security as they check email, browse websites, and complete tasks online. By using convincing visuals and emotionally-charged language, the content of phishing emails hinder critical thinking to compel one to respond to the email’s request and divulge their personal information. The impact of deceptive phishing is tremendous, resulting in identity theft for individual users or data breaches for influentual companies. 
    </p>
  <br></br>

  <p id="solution" className="title is-size-5"> <font color="#F9C77B"> Solution </font> </p>
  <br></br>
    <p className="subtitle"> I created a redesigned email interface that aids users in determining whether a redirected hyperlink in an email is malicious or legitimate. The interface focuses on providing simple error messages that do not overpower the email content, enabling users to complete their tasks efficientiy while also being informed of security.  
    </p>
  <br></br>


  <p id="details" className="title is-size-5"> <font color="#F9C77B"> Details </font> </p>

  <nav className="level">
  <div className="level-item">
    <div>
      <p className="heading">My Role</p>
      <p className="subtitle is-size-6">UX Design</p>
      <p className="subtitle is-size-6">UX Research</p>
      <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  <div className="level-item">
    <div>
      <p className="heading">Duration</p>
      <p className="subtitle is-size-6">Sep 2018 - May 2019</p>
            <p className="subtitle is-size-6 has-text-white">" " </p>
      <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  <div className="level-item">
    <div>
      <p className="heading">Faculty Advisors</p>
      <p className="subtitle is-size-6">Prof. Kyle Cave (Cognitive Psych)</p>
      <p className="subtitle is-size-6">Prof. Narges Mahyar (HCI)</p>
      <p className="subtitle is-size-6">Prof. Tim Richards (CS)</p>


    </div>
  </div>
  <div className="level-item">
    <div>
      <p className="heading">Tools</p>
      <p className="subtitle is-size-6">Sketch, MATLAB (hi-fi prototype)</p>
            <p className="subtitle is-size-6">Google Slides (lo-fi prototype)" </p>
            <p className="subtitle is-size-6">D3.js </p>
    </div>
  </div>
  </nav>

  <br></br>
  <p id="process" className="title is-size-5"> <font color="#F9C77B"> Process </font> </p>
    <div className="columns">
          <div className="column">
              <div className="box">
                <p className="title is-size-5"> <font color="#F9C77B"> 1. Research </font> </p>
                <p>
                 Literature Review
                   <br></br>
                 Design Implications and Goals
                 <br></br>
                 <font color="white">""</font>
                </p>
              </div>
          </div>
          <div className="column">
              <div className="box">
                <p className="title is-size-5"> <font color="#F9C77B"> 2. Design </font> </p>
                <p>
                 Informed Brainstorming
                   <br></br>
                 Wireframes
                 <br></br>
                 High-Fidelity Prototype

                </p>
              </div>
          </div>
          <div className="column">
              <div className="box">
                <p className="title is-size-5"> <font color="#F9C77B"> 3. Evaluation </font> </p>
                <p>
                 Usability Experiment
                   <br></br>
                 Poster Session
                 <br></br>
                 Thesis Defense
                </p>
              </div>
          </div>
          </div>
  <br></br>
  <h3 id="research" className= "title is-size-4"> 
  <font color="#F9C77B">
  Research 
  </font></h3>
  <br></br>
  <br></br>
  <p id="lit_review" className="title is-size-5"> <font color="#F9C77B"> Literature Review </font> </p>
      <br></br>
          <p className="subtitle"> 
          <strong>
         <font color="#F9C77B">  High-Level Goals  </font>
         </strong>
      <br></br>
      <br></br>

-Identify which demographic groups may be more at risk for falling for phishing attacks &nbsp;
      <br></br>
-Uncover physiological and psychological impact of phishing 
      <br></br>
-Map out existing solutions within research, employee training, and general user awareness &nbsp;
      <br></br>

-Evaluate design suggestions for security, as well as any proposed algorithms or proposed solutions for email security specifically &nbsp;
    </p>
  <br></br>
   <p className="subtitle"> 
              <strong>
         <font color="#F9C77B"> Problem Impact </font>
         </strong>
      <br></br>
      <br></br>
      Phishing, a pervasive security scam, is an umbrella term that describes fraudulent
practices by which an attacker attempts to steal personal or sensitive data by posing as a
trustworthy source. Because it can compromise private data, phishing scams pose
significant threats to individuals and companies. 
      <br></br>
      <br></br>

By the numbers,
      <br></br>

<li>76% of organizations say they experienced phishing attacks in 2017</li>
<li>People only report 17% of phishing instances</li>
<li>76% of IT security staff have been victims of malware threats, most of which take the form of phishing attacks</li>
      <br></br>
Further research into the problem space demonstrates that people may lack a fundamental understanding of how a phishing email looks and how to respond if they receive one. Improved security awareness for all demographic groups is needed to reduce the effectiveness of phishing attacks.
  </p>
  <br></br>
   <p className="subtitle"> 
        <strong>

         <font color="#F9C77B"> Psychological Influence </font>
             </strong>

      <br></br>
      <br></br>
      While I conducted my literature review, I read papers and books related to theoretical cognitive psychology, as phishing is primarily an attack that takes advantage of human behavior to manipulate their actions accordingly. 
      <br></br>
      <br></br>

There are three dimensions of a successful phishing attack:

      <br></br>

<ol>1. <u>Insufficient knowledge</u> - Users lack awareness of computer systems or security indicators</ol>
<ol>2. <u>Visual tricks</u> - Visually distorted text, images used to hide actual text, deceitfully crafted
websites</ol>
<ol>3. <u>Inadequate attention</u> - The absence of attention to security indicators and lack of awareness
towards missing security indicators
</ol>
      <br></br>
Cognitive psychology, the study of mental processes such as attention, perception, and problem-solving provides insight into how users make decisions, prioritize information, or learn skills. As humans primarily engage with visual information on a screen to make decisions quickly, having this solid background can allow me to create a redesigned interface more in line with a user’s typical behavior.
  </p>
 
    <br></br>

  <p className="subtitle"> 
      <strong>

         <font color="#F9C77B"> A Few Existing Solutions </font>
             </strong>
    <br></br>
      <br></br>
      Existing security warnings use reactive methods that notify the user after they click on a
link. 

    </p>
    <br></br>
    <p className="subtitle"> <strong> Gmail </strong></p>
    <div className="columns">
          <div className="column">
            <img src={google_warning} alt="google_warning"/>
          </div>
          <div className="column">
            <img src={google_red} alt="google_red"/>
          </div>
    </div>
    <p className="subtitle"> Gmail places an unknown sender warning above the email body if a user receives an
email from an unfamiliar sender. When suspected phishing or spam is detected, Gmail also allows users to report emails
for phishing and flashes a generic warning that alerts users that an email is dangerous. The
bold red color, while attracting attention, can intimidate users and detract from the email
content if the email is genuinely legitimate.</p>
          <br></br>
   <p className="subtitle"> <strong> Inky </strong> </p>

    <div className="column">
            <img src={inky} alt="inky"/>
    </div>
    <p className="subtitle"> 
    Inky is a security technology company that features add-ons to Gmail and Microsoft
email platforms. Like Gmail, it can warn users in the event of a malicious email, but the warning
messages are often vaguer and smaller.</p>
    <br></br>
       <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>  </th>
        <th><font color="#FFBA5b"> Pros </font> </th>
        <th><font color="#FFBA5b">Cons </font></th>
                
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Blacklists & Whitelists</strong></td>
        <td>Clear way of categorizing links </td>
        <td>-Sometimes constrained by needing exact matches 
        <br></br> 
-Not useful against zero-day attacks
</td>
        
      </tr>
      <tr>
        <td><strong>Heuristic Solutions (Set of rules)</strong></td>
        <td>-More robust in not requiring exact URL matches 
        <br></br> 
-Produces less false positives
</td>
        <td>Ineffective against zero-day attacks</td>


              </tr>
      <tr>
        <td><strong>Training/Awareness</strong> </td>
        <td>Thorough and can provide responses for different scenarios </td>
        <td>People may not remember the training under the conditions of an actual attack </td>
             </tr>
    </tbody>
  </table>
  <br></br>

   <p className="subtitle"> As shown by the existing solution space, reactive indicators that warn the user before clicking on a link do exist in practice. Users can benefit from  a solution that informs them of the conseqences before they click. My solution shifts to being a proactive indication that addresses this pain point. 
  </p>
  <br></br>

    <p id="understanding_users" className="title is-size-5"> <font color="#F9C77B"> Understanding User Abilities </font> </p>
  <br></br>

    <p className="subtitle">When using a web or mobile interface, humans rely on their vision to form judgments, process information and allocate attention to objects. Therefore, I read Cognitive Psychology literature to identify any principles that are relevant to explaining how users interact with a web interface and how to redesign the email interface to draw attention towards phishing warning messages. 
    </p>
      <br></br>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th><font color="#FFBA5b"> Cognitive Psych Principle </font> </th>
        <th><font color="#FFBA5b">Design Implication </font></th>
                
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Goal-oriented navigation: People tend only to notice options that match or lead them
towards their primary goal</strong></td>
        <td>-Provide multiple yet distinct choices rather than leaving users to complete their end goal open-endedly. 
        <br></br> 
-The warnings should convey potential consequences of risk to the user along with possible recommendations so they can complete their tasks. 
</td>
        
      </tr>
      <tr>
        <td> <strong>Screen center bias: People tend to look at the center of
a screen before moving on to other parts.</strong>
</td>
        <td>The location of the alert is critical, and warning designers should place alerts where the
user is focusing.</td>


              </tr>
      <tr>
        <td><strong>Color, motion, orientation, size are the most useful guiding attributes for visual search</strong> </td>
        <td>The design should present text and graphical based warnings and information that are a high contrast from the email system.  </td>
             </tr>
      <tr>
        <td><strong>People tend to scan for pertinent information on a web page to find
information of interest quickly</strong> </td>
        <td>-Warnings should balance initial details about the risk because users will not read wordy
details, but too-condensed information can be vague and confusing. 
        <br></br> 
-Messages must minimize jargon and technical words in the warning messages to avoid
intimidating users. 
</td>
             </tr>
    </tbody>
  </table>

<br></br>
  <h3 id="design" className= "title is-size-4"> 
  <font color="#F9C77B">
  Design 
  </font></h3>
  <br></br>
  <p id="design_goals" className="title is-size-5"> <font color="#F9C77B"> Design Goals </font> </p>

  <br></br>
  <p className="subtitle"> Using the information obtained from the literature review, I identified the following goals for my proposed design: </p>
   <br></br>
    <div className="columns is-mobile is-multiline is-vcentered is-centered">
    <div className="column is-1">
    <p className="bd-notification is-primary">
       
    </p>
  </div>
  <div className="column is-2">
    <p className="bd-notification is-primary">
      <img src={balance} alt="balance"/>
    </p>
  </div>
  <div className="column is-1">
    <p className="bd-notification is-primary">
       
    </p>
  </div>
  <div className="column is-7">
    <p className="subtitle">
      <strong>Strike a balance between the email system and a human user’s ability to identify a malicious email </strong> 
    </p>
  </div>
</div>
<br></br>
    <div className="columns is-mobile is-multiline is-vcentered is-centered">
    <div className="column is-1">
    <p className="bd-notification is-primary">
       
    </p>
  </div>
  <div className="column is-2">
    <p className="bd-notification is-primary">
      <img src={turn} alt="turn"/>
    </p>
  </div>
  <div className="column is-1">
    <p className="bd-notification is-primary">
       
    </p>
  </div>
  <div className="column is-7">
    <p className="subtitle">
      <strong>Design will guide users with distinct choices to complete their task, but user is in control </strong> 
    </p>
  </div>
</div>
<br></br>
    <div className="columns is-mobile is-multiline is-vcentered is-centered">
    <div className="column is-1">
    <p className="bd-notification is-primary">
       
    </p>
  </div>
  <div className="column is-2">
    <p className="bd-notification is-primary">
      <img src={idea} alt="idea"/>
    </p>
  </div>
  <div className="column is-1">
    <p className="bd-notification is-primary">
       
    </p>
  </div>
  <div className="column is-7">
    <p className="subtitle">
      <strong>Increased focus on providing relevant information and understandable language (no technical jargon)
 </strong> 
    </p>
  </div>
</div>
<br></br>
    <div className="columns is-mobile is-multiline is-vcentered is-centered">
    <div className="column is-1">
    <p className="bd-notification is-primary">
       
    </p>
  </div>
  <div className="column is-2">
    <p className="bd-notification is-primary">
      <img src={recommended} alt="recommended"/>
    </p>
  </div>
  <div className="column is-1">
    <p className="bd-notification is-primary">
       
    </p>
  </div>
  <div className="column is-7">
    <p className="subtitle">
      <strong>Potential consequences and recommendations should be conveyed </strong> 
    </p>
  </div>
</div>
<br></br>
<br></br>
      <p id="design_flowchart" className="title is-size-5"> <font color="#F9C77B"> Design Flowchart </font> </p>

      <br></br>
      
       <img src={flowchart} alt="flowchart"/>
      <br></br>
      <br></br>

       <p className="subtitle">
        A link is recognizable if it belongs to a significant organization or if the user has previously trusted it. Once a user trusts a link, they will never receive a warning message for an email with that specific link. The warning message will not pop up excessively and cause the user to ignore it. If the link is not recognized, the email presents a generic warning message above the email body. Upon reviewing the links, a user can distrust the link by blocking it or proceed to the website by trusting it. Since the focus is on deceptive phishing links, there is a particular recommended case that checks to see if the fake link matches a legitimate domain (90% or higher match). If the email system can identify a valid alternative, it displays it and redirects the user to the correct website. Although not included in this concept, the design assumes a personal black and whitelist concept that contains links the user has personally blocked and trusted. The design employs these personal lists in the case a user accidentally blocks or trusts a website and needs to make changes.  
      </p>
      <br></br>
      <br></br>

      <p id="low_fi" className="title is-size-5"> <font color="#F9C77B"> Low Fidelity Prototype </font> </p>
      <br></br>

       <p className="subtitle">
  Based on my design flowchart and suggestions from the literature review, I created rough prototypes using Powerpoint. I focused on making the design choices as simple as possible. 
      </p>
      <br></br>
      <br></br>
      <div className="columns is-mobile is-multiline is-vcentered is-centered">
    <div className="column is-7">
    <p>Proceed Case</p>
            <br></br>
       <img src={proceed} alt="proceed"/>
  </div>
  <div className="column">
      <p>Distrust Case</p>
              <br></br>
      <img src={distrust} alt="distrust"/>
  </div>
  
  </div>
  <div className="columns is-mobile is-multiline is-vcentered is-centered">
    <div className="column">
            <br></br>
            <p>Alternative Case</p>
       <img src={alternative} alt="alternative"/>
  </div>
  </div>
<br></br>

       <p className="subtitle">
  After presenting these concepts to a few people, I received feedback indicating that my error messages were not informative enough. A few people were unsure what actions would occur after they clicked on a certain button, because the button wording did not fully convey that. Additionally, a few people thought red was not the best color choice. However, people liked the discrete and distinct options and additionally liked that the messages did not fully detract from the email body content. In my next iteration, I focused on crafting more informative error messages and providing recommendations for what users should click. 
  </p>
  <br></br>
    <br></br>

      <p id="high_fi"className="title is-size-5"> <font color="#F9C77B"> High-Fidelity Design </font> </p>
  <br></br>
  <p className="subtitle">
  For the high-fidelity design, I identified seven major companies and designed phishing emails by referencing their style guide. The organizations are: Bank of America, Spotify, Dropbox, LinkedIn, Google Drive, Netflix, and Amazon. Below is the Spotify email I created.  
  </p>
  <br></br>
         <img src={spotify_review_link} alt="spotify_review_link"/>

  <br></br>
  <br></br>
  <p className="subtitle">
  Screen 1: Review
    <br></br>
  <br></br>

● Paler yellow color primes users for caution, rather than instilling fear or panic with a brighter/threatening color
such as red that could cause them to act irrationally &nbsp;
  <br></br>
● Generic message describes the reason why the
email system placed a warning without any technical jargon to allow them to pay attention to the warning
</p>
  <br></br>

<img src={spotify_recomm} alt="spotify_recomm"/>
<br></br>
  <br></br>
  <p className="subtitle">
  Screen 1: Review
    <br></br>
  <br></br>

● Suspicious area of URL is underlined in red to stand out against the yellow
background to encourage the user to inspect the link closely. &nbsp;
  <br></br>
●  The warning offers two discrete choices but does not highlight one option because the system leaves the decision
to trust the email link up to the user.  
</p>
  <br></br>
  <h3 id="evaluation" className= "title is-size-4"> 
  <font color="#F9C77B">
  Evaluation  
  </font></h3>
  <br></br>
  <br></br>
  <p className="title is-size-5"> <font color="#F9C77B"> Usability Experiment </font> </p>
      <br></br>
        <p className="subtitle"> Through an unmoderated usability test, I evaluated how effective my email interface design
was in communicating relevant information about the email. I created 7 different emails for the experiment using Sketch- 5 emails contained a deceptive phishing link and 2 contained no deceptive links. I framed the usability test as a role-playing activity where participants would assume the role of a character, Sam Minuteman, who works at a fictional consulting company and is evaluating a new email interface based on usability principles.  </p>
      <br></br>
      <p className="subtitle"> I had a total of 30 participants engage in my study. I randomly divided participants into two groups: Design Interventions (redesigned emails) and No Design Interventions (standard emails). I was not in the same room as them while they engaged with the experiment because I wanted to emulate a scenario in which someone was checking their emails alone, and I also did not want my presence to bias their decision in any way.</p>
<div className="columns is-mobile is-multiline is-vcentered is-centered">
    <div className="column">
    <p>Bank of America email: No Design Interventions</p>
            <br></br>
       <img src={bofa_review_link} alt="bofa_review_link"/>
  </div>
  <div className="column">
      <p>Bank of America email: Design Interventions</p>
              <br></br>
      <img src={bofa_recomm} alt="bofa_recomm"/>
  </div>
  </div>

  <br></br>

  <p className="title is-size-5"> <font color="#F9C77B"> Measuring Success </font> </p>
      <br></br>
  <p className="subtitle"> During the usability experiment, I tasked participants with reading the email content and choosing how they would respond to the email. They could use the 5 buttons at the foot of the email, click on buttons/links they found in the email - I was intentionally vague in telling them where they could click because I did not want influence their actions. These are the following metrics I used to evaluate how effective participants were in not getting phished:
</p>
    <br></br>
    <p className="subtitle"><strong> Quantitative - Performance</strong></p>
    <br></br>
    <p className="subtitle"><strong>Task Completion </strong>: I capped each trial at a minute to ensure participants were browsing emails at a pace that mirrored real email browsing behavior. If participants spend more than a minute looking at an email, the trial immediately ends and moves onto the next one, and the trial outcome is “timeout”.</p>
    <br></br>
    <p className="subtitle"><strong>Phishing Amount</strong>:In a trial that contains a malicious email, I defined clicking on any of the hyperlinks, ‘Reply,’ or ‘Forward’ as being “susceptible to a phishing email. Regardless of where someone clicks in a legitimate trial, they will be safe, so I say they pass that trial. For each trial, I determine if a
participant passes or gets phished</p>
    <br></br><p className="subtitle">I assigned the following values to each of the various trial outcomes:</p>
        <li>Phished  = 0</li>
        <li>Timeout = 0.5</li>
        <li>Pass = 1</li>
    <br></br>
    <p className="subtitle">I added up the results for each participant and compute their average performance. Getting a score of 0 means that the user got phished for every email and a score of 1 means they passed every email.</p>
    <br></br>
  <p className="subtitle"><strong> Quantitative - Self-Report</strong></p>
    <br></br>
      <p className="subtitle">I also conducted a post-experiment survey to ask participants to rate aspects of the email design interface and how comfortable they felt using the tool. I created 9 Likert Scale questions that gave me a quantitative measure of usability: </p>
    <br></br>
      1. Relevant information is easy to find
          <br></br>
2. Email content is clearly presented
    <br></br>
3. Action buttons provide clear choices
    <br></br>
4. Colors and fonts are aesthetically pleasing
    <br></br>
5. I am able to identify any messages and choices easily
    <br></br>
6. I find the messages and choices presented easy to follow
    <br></br>
7. The interface is easy to learn and use
    <br></br>
8. I felt confident using the interface
    <br></br>
9. I would recommend this interface to a friend
    <br></br>
        <br></br>
      <p className="subtitle"><strong> Qualitative - Self-Report</strong></p>
    <br></br>
      <p className="subtitle"> 
      When I debriefed participants about the usability test’s true intentions, I held an unstructured interview with them where I showed them their results (how many times they were phished). This method gave me qualitative data regarding participants overall thoughts and impressons of the design, and additionally they provided me verbal feedback and talked about their experience with phishing. 
      </p>
          <br></br>
        <p className="title is-size-5"> <font color="#F9C77B"> Experiment Results </font> </p>
    <br></br>
           <img src={phishing_sus} alt="phishing_sus"/>
    <br></br>
    <p className="subtitle"> 
    This bar chart shows phishing susceptibility on each malicious email trial. The height of the bar indicates
the percentage of participants who did not fall for phishing on that specific email. Email phishing susceptibility
increases from left to right, with Bank of America being the easiest to spot and Spotify being the hardest to spot. </p>
    <p className="subtitle"> <i><strong>
Interpretation : 93% of users in the 'No Design Interventions' group did not fall for the Bank of America email </strong></i></p>
    <br></br>
      <p className="subtitle"> <u> <strong>Overall Averages (15 participants in each group):</strong></u>
          <br></br>
          <br></br>
      <strong>No Design Interventions</strong> : Users passed <strong> <u>57.6%</u></strong> of the emails*
          <br></br>
      *One participant timed out and did not respond (so calculated using 14 participants)
          <br></br>
          <br></br>
      <strong>Design Interventions</strong>: Users passed <strong> <u>80.6%</u></strong> of the emails
          <br></br>
    </p>
    <br></br>
    <div className="columns">
      <div className="column is-6">
        <img src={no_phishing_sus} alt="no_phishing_sus"/>
      </div>
      <div className="column">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
         <p className="subtitle"> The second bar chart describes phishing
susceptibility on each legitimate email trial. The height of the bar indicates the percentage of participants who did not fall for phishing on that specific email. In legitimate email trials, regardless of whatever option chosen, participants will
not get phished.</p>
      </div>
    </div>
    <br></br>
     <p className="title is-size-5"> <font color="#F9C77B"> Post Experiment Survey Results </font> </p>
     <br></br>
     <p className="subtitle"> Design Intervention Group - Response Breakdown </p> 
      <img src={design_response} alt="design_intervention_response"/>
     <br></br>
     <p className="subtitle">This stacked bar chart shows the Design Intervention group’s breakdown of responses for the 9 Usability/design
critique questions I asked after the usability experiment. Each bar represents a design statement and the bars are in order of more positive agreement to each of
these statements.</p>
      <br></br>
      <p className="subtitle"> No Design Intervention Group - Response Breakdown </p> 
      <img src={no_design_response} alt="no_design_response"/>
       <br></br>
        <p className="subtitle">
       This stacked bar chart shows the No Design Intervention group’s breakdown of responses for the design
critiques. Each bar represents a design statement and the bars are in order of more positive agreement to each of
these statements.</p>
       <br></br>
     <p className="title is-size-5"> <font color="#F9C77B"> Design Feedback and Suggested Improvements </font> </p>
       <br></br>
       <p className="subtitle"> Overall, subjects in the Design Interventions group gave much higher ratings for all the
presented statements, as the lowest rating any participant gave was ‘Neutral.’ However, a few design issues became apparent after this evaluation session. </p>
       <br></br>
       <p className="subtitle"><u>Issue 1: <strong>Yellow color chosen for the warning might not be captivating enough</strong> </u> </p>
      <p className="subtitle">The next iteration of the warning design can have a brighter version of yellow or orange to catch the user’s attention.
The security indicator could feature an icon in red, and the yellow box can include some 3D shade or border to increase the contrast of the warning and make it noticeable alongside the email content.</p>
       <br></br>
      <p className="subtitle"><u>Issue 2: <strong>Some users wanted to ignore the email within the experiment/Some did not want to click ‘Review Links”</strong> </u> </p>
      <p className="subtitle">The next iteration can provide users with the ability to not take any action at all. However, one goal of the design was to educate users about how deceptive phishing looks, so more thought should be placed in teaching users these signs while also minimizing the effort they need to spend interacting with the email.</p>
         <br></br>
      <p className="subtitle"><u>Issue 3: <strong>Some users expressed confusion about the legitimacy of the system’s messages.</strong> </u> </p>
      <p className="subtitle">To legitimize the warnings, the next version could include a statement saying that the messages are
coming from the email system, so participants do not think it is part of the malicious email.</p>
       <br></br>
    <p className="title is-size-5"> <font color="#F9C77B"> Reflections and Future Work </font> </p>
       <br></br>
      <p className="subtitle">Overall, the participants believed that the redesigns strike a good balance of not only giving the user control on determining the legitimacy of a link but also
priming them with unambiguous email system interventions. The usability experiment sheds insight on how people browse emails, and the biggest takeaway is that people do not spend time reading the email content in detail. Overall, the redesign demonstrated that some mediation on the email system’s
behalf alerts users about suspicious security activity and decreases the number of phishing attacks.</p>
      
<p className="subtitle"> The next steps of this research would be to incorporate the participant feedback and
create a second version of the redesign for further user-testing. I want to <strong>extend my participant
pool to non-UMass students</strong> to see how demographics such as age and work experience can
affect phishing prevalence. Since people routinely check email on their mobile devices, I would
like to explore <strong>how to design security indicators for different types of interfaces </strong> like email
applications and emails viewable on a mobile browser. Exploring these various mediums can
demonstrate what design elements and psychological phenomena are universally applicable,
and what varies based on the interface. </p>
<br></br>
<br></br>
  </div>
  </div>

</div>



);
export default Proj2Body;