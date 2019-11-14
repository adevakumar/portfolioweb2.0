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


const Proj2Body = () => (
    <div className="container is-fullwidth">
    <br></br>

  <br></br>
	<br></br>
  <div id="here" className="columns">
      <div className="column is-2">
        <div className="menu_sticky">       
          <p className="heading"><strong>Navigation</strong></p>
          <ul id="menu" className="menu-list">
            <li><a href="#overview">1. Overview</a></li>
            <li><a href="#research">2. Research</a></li>
            <li><a href="#design">3. Design</a></li>
            
          </ul>
        </div>
      </div>
<div className="column is-10">
  <h3 id="overview" className= "title is-size-4"> 
  <font color="#F9C77B">
  Overview 
  </font></h3>
  <br></br>
  <p className="title is-size-5"> <font color="#F9C77B"> Problem </font> </p>
  <br></br>
    <p className="subtitle"> Deceptive phishing refers to an attack by which hackers mimic a legitimate company and attempt to steal a customer's credentials. This attack commonly occurs over email and websites to create a false representation of legitimacy for unassuming users. The average person does not actively think about security as they check email, browse websites, and complete tasks online. By using convincing visuals and emotionally-charged language, the content of phishing emails hinder critical thinking to compel one to respond to the email’s request and divulge their personal information. The impact of deceptive phishing is tremendous, resulting in identity theft for individual users or data breaches for influentual companies. 
    </p>
  <br></br>

  <p className="title is-size-5"> <font color="#F9C77B"> Solution </font> </p>
  <br></br>
    <p className="subtitle"> I created a redesigned email interface that aids users in determining whether a redirected hyperlink in an email is malicious or legitimate. The interface focuses on providing simple error messages that do not overpower the email content, enabling users to complete their tasks efficientiy while also being informed of security.  
    </p>
  <br></br>


  <p className="title is-size-5"> <font color="#F9C77B"> Details </font> </p>

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
  <p className="title is-size-5"> <font color="#F9C77B"> Process </font> </p>
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
  <p className="title is-size-5"> <font color="#F9C77B"> Literature Review </font> </p>
      <br></br>
          <p className="subtitle"> 
         <font color="#F9C77B"> High-Level Goals </font>
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
         <font color="#F9C77B"> Problem Impact </font>
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
         <font color="#F9C77B"> Psychological Influence </font>
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
    <br></br>

  <p className="subtitle"> 
         <font color="#F9C77B"> A Few Existing Solutions </font>
      <br></br>
      Existing security warnings use reactive methods that notify the user after they click on a
link. 

    </p>
    <br></br>
    <p className="subtitle"> Gmail</p>
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
   <p className="subtitle"> Inky</p>

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

    <p className="title is-size-5"> <font color="#F9C77B"> Understanding User Abilities </font> </p>
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
  <br></br>
  <p className="subtitle"> Using the information obtained from the literature review, I identified the following goals for my proposed design: </p>
   











  </div>





  </div>
  </div>

  


  

  	

);
export default Proj2Body;