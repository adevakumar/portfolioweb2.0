import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/
import low_fidelity from '../images/low_fidelity.jpeg';
import fake_spotify from '../images/spotify_hover_hoax.jpg';
import fake_link from '../images/spotify_review_link.jpg';
import fake_recomm from '../images/spotify_recomm.jpg';


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
          <p className="subtitle"> Deceptive phishing refers to an attack by which hackers mimic a legitimate company and attempt to steal a customer's credentials. This attack commonly occurs over email and websites to create a false representation of legitimacy for unassuming users. The average person does not actively think about security as they check email, browse websites, and complete tasks online. By using convincing visuals and emotionally-charged language, the content of phishing emails hinder critical thinking to compel one to respond to the email’s request and divulge their personal information. The impact of deceptive phishing is tremendous, resulting in identity theft for individual users or data breaches for influentual companies. 
    </p>
  <br></br>



  </div>

  <br></br>
  <br></br>


  </div>
  </div>

  


  

  	

);
export default Proj2Body;