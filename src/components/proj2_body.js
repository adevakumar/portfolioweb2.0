import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/
import low_fidelity from '../images/low_fidelity.jpeg';
import fake_spotify from '../images/spotify_hover_hoax.jpg';
import fake_link from '../images/spotify_review_link.jpg';
import fake_recomm from '../images/spotify_recomm.jpg';


const Proj2Body = () => (
    <div className="container">
    <br></br>

	<br></br>
  <br></br>

    <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Role</p>
      <p className="subtitle is-size-6">Development</p>
      <p className="subtitle is-size-6">UX Design & Advertising</p>
      <p className="subtitle is-size-6">Research and Experiment creation</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Duration</p>
      <p className="subtitle is-size-6">Sep 2018 - May 2019</p>
            <p className="subtitle is-size-6 has-text-white">" " </p>
      <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Advisors</p>
      <p className="subtitle is-size-6">Prof. Kyle Cave (Cognitive Psych)</p>
      <p className="subtitle is-size-6">Prof. Narges Mahyar (HCI)</p>
      <p className="subtitle is-size-6">Prof. Tim Richards (CS)</p>


    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Tools</p>
      <p className="subtitle is-size-6">UX Design: Sketch</p>
      <p className="subtitle is-size-6">Development: MATLAB</p>
            <p className="subtitle is-size-6 has-text-white">" " </p>


    </div>
  </div>
  </nav>
    <br></br>

<div className="container is-fluid has-text-centered">
  <p className is-size-6="subtitle">Awarded Honors Research Grant (Dec 18)</p>
  <p className is-size-6="subtitle is-italics">Presented at the Massachusetts Undergraduate Research Conference (Apr 19)</p>
</div>

  <br></br>
	<br></br>
  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Motivation </h1>
  <br></br>

    <p className="subtitle"> Deceptive phishing refers to an attack by which hackers mimic a legitimate company and attempt to steal a customer's credentials. This attack commonly occurs over email and websites to create a false representation of legitimacy for the average user. Hackers aim to manipulate a user's mental models and visual perception lapses. The more closely a deceptive phishing email resembles the company's official email, the higher the success rate of the phishing attack. The specific language in a phishing email body uses emotionally-charged speech to hinder critical thinking by raising levels of fear, sadness, or anger to compel one to take immediate action. Phishing's tactics are not only successful, but they also pose disastrous consequences to individual users, by causing identity theft, and to Fortune 100 Companies, in the form of data breaches. 
</p>
  </div>
  <br></br>
  <br></br>

  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Thesis Objective </h1>
  <br></br>

    <p className="subtitle">
      I redesign a standard email web interface to present pertinent information that can aid a user in classifying whether a redirected link is legitimate or not. As security is not the primary concern, people accidentally click on malicious URLs because they do not take the time to look at the URL carefully. 
</p>

<p className="subtitle">
      I want my implemented features to improve the design and presentation of URLs within the email - this can be in regards to size, color, and many more aspects. Previous studies focus more on security messaging in the browser, but I aim to shift the focus to emails. Users typically end up on spoofed websites by clicking on hyperlinks within the malicious email. I reviewed cognitive psychology literature to identify design principles that can help create new, effective security messaging. Cognitive psychology provides insight into how users make decisions, prioritize information, or learn skills. When using a web or mobile interface, humans rely on their vision to form judgments, process information and allocate attention to objects. Therefore, by incorporating cognitive psychology, I gain insight on how humans interact and perceive information on an interface, and having this solid background allows my redesign to be in line with a user’s typical behavior.  
</p>

<p className="subtitle">
      My design aims to prevent the user from even clicking on a hyperlink if there is any doubt of its legitimacy. I also intend to give the end user the final say in the legitimacy of a link as well as provide discrete choices to help them make an informed decision about the URL.  Despite current browser indicators, at this stage, people are still going to be the best at validating whether a URL is secure. By presenting the URL in line with typical browsing behavior, the user has a more proactive indicator of the redirected website's legitimacy. 
 
</p>




  </div>
    <br></br>
    <br></br>

  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Literature Review </h1>
  <br></br>
    <p className="subtitle">
    Throughout my literature review, I had a few areas I focused on exploring. I wanted to find out which demographic groups may be more at risk for falling for phishing attacks, the physiological and psychological impact of phishing, and existing solutions within research, employee training, and general user awareness. Another focus of the literature review was identifying and evaluating design suggestions for security, as well as any proposed algorithms or proposed solutions for email security specifically.


 </p>
 </div>
 <br></br>
 <br></br>
 <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Design Goals </h1>
  <br></br>
    <li className = "subtitle">Strike a balance between the email system and a human user’s ability to identify a malicious email </li>
<li className = "subtitle">Increased focus on providing relevant information and understandable language (no technical jargon)</li>
<li className = "subtitle">Design will guide users with distinct choices to complete their task, but user is in control</li>
<li className = "subtitle">Potential consequences and recommendations should be conveyed</li>

 </div>
<br></br>
 <br></br>
 <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Design Flowchart </h1>
  <br></br>


    <div className="column is-full">

      <img container style={{
      width: "97%",
    height: "auto"

    }}
    src={low_fidelity} alt="low-fidel"/>
  </div>

  <p className="subtitle">
   
   The chart depicted in this figure shows the suggested flow of the design. A link is recognizable if it belongs to a significant organization or if the user has previously trusted it. Once a user trusts a link, they will never receive a warning message for an email with that specific link. The warning message will not pop up excessively and cause the user to ignore it. If the link is not recognized, the email presents a generic warning message above the email body. Upon reviewing the links, a user can distrust the link by blocking it or proceed to the website by trusting it. Since the focus is on deceptive phishing links, there is a particular recommended case that checks to see if the fake link matches a legitimate domain (90% or higher match). If the email system can identify a valid alternative, it displays it and redirects the user to the correct website. Although not included in user-testing, the design assumes a personal black and whitelist concept that contains links the user has personally blocked and trusted. The design employs these personal lists in the case a user accidentally blocks or trusts a website and needs to make changes.  

 <br></br>

 </p>
 </div>
 <br></br>
 <br></br>

 <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Email Designs and Usability Experiment </h1>
  <br></br>
    <p className="subtitle">
    I created an experiment to evaluate my hypothesis that a redesigned email interface will reduce the susceptibility of phishing. As security is not the primary objective of users when interacting with an interface, I disguise the experiment as a usability study in which the participants roleplay as a character checking their email. The main goal of user testing is to record the number of times a participant interacted with a phishing email. This data allowed for the quantitative comparison of the two email trials with phishing susceptibility. I design a single-blind experiment, dividing participants into two groups randomly. Group one is called No Design Interventions and see emails with none of my design changes, while group two is called Design Interventions and interact with emails containing design changes. Both groups receive the same random order of legitimate and malicious emails.  
 </p>
   <br></br>
   <p className="subtitle">
   For the study, I designed seven different emails, each of which resembles an email from a major company. Some of the emails are constructed from real examples of phishing emails, while others feature phishing email signs (incorrect sender, fake links, etc.). Here is the order I presented the emails in my experiment:
</p>

<p className="subtitle"> Trial 1: Fake Bank of America email </p>
<p className="subtitle">Trial 2: Fake Amazon email  </p>
<p className="subtitle">Trial 3: Real LinkedIn email  </p>
<p className="subtitle">Trial 4: Fake Netflix email  </p>
<p className="subtitle">Trial 5: Real Dropbox email  </p>
<p className="subtitle">Trial 6: Fake Google Drive email  </p>
<p className="subtitle">Trial 7: Fake Spotify email  </p>

 </div>
<br></br>
    <br></br>

    <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Email Designs and Usability Experiment </h1>
  <br></br>
  
  <div className="column is-full">

      <img container style={{
      width: "96%",
    height: "auto"

    }}
    src={fake_spotify} alt="fake-spotify"/>
  </div>
  <br></br>
  <p className="subtitle">
  This is a sample email design (Spotify) shown for the No Design Interventions group. Users in this group see the email interface without any security warnings. The primary action buttons are displayed, and if one hovers over the ‘Verify Your Account’ button, the redirected URL appears in the bottom left corner, the same position where Gmail places the URL when a user hovers over a link. The user must rely on the email branding and sender and link information to decide how to respond. 

</p>
<br></br>
<div className="columns">

    <div className="column is-three-quarters">

        <img container style={{
        width: "100%",
      height: "auto"

      }}
      src={fake_link} alt="fake-link"/>
    </div>

    <div className="column has-text-centered">
    <br></br>

      <p>
        This is a sample email shown for the Design Interventions group. Users see the email interface with security interventions. The paler yellow color primes them to be cautioned while reading the email content, rather than instilling fear/panic with a brighter color like red that could cause them to act irrationally. The vague message describes why the email system placed a warning without any technical jargon and gives a specific action to take. 
      </p>
        
    </div>

  </div>
    <br></br>
    
  <div className="columns">

    <div className="column has-text-centered">
    <br></br>

      <p>
      In the second screen, the notice gets more specific about the discrepancy the system encountered. The area of suspicion is underlined in red to stand out against the yellow background to urge the user to look closely at it. On the same line, the warning offers two discrete choices but does not highlight a single option because it is the user’s ultimate decision to trust the email link. The combination of particular choices and clear messages help a person review all the critical identifying information within the email and make an informed choice.
      </p>
        
    </div>
    <div className="column is-three-quarters">
    <br></br>
    <br></br>

        <img container style={{
        width: "100%",
      height: "auto"

      }}
      src={fake_recomm} alt="fake-recomm"/>
    </div>

  </div>


        
  </div>
<br></br>
    <br></br>


  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Reflection </h1>
  <br></br>
    <p className="subtitle">
    Overall, my redesigns strike a good balance of not only giving the user control on determining the legitimacy of a link but also priming them with unambiguous email system interventions. The usability experiment sheds insight on how people browse emails, and the biggest takeaway is that people do not spend time reading the email content in detail. This study provides additional new evidence that many people do not actively check for an email’s legitimacy unless prompted to because it is not the primary objective when checking the email. How to discriminate malicious emails from legitimate ones is still not common knowledge, and many participants described the experiment as an eye-opening experience concerning their email browsing habits. Even when I informed participants of some of the signs of a phishing email, a small number had difficulty spotting why the email was malicious. More people in both groups blindly trusted the emails than expected due to how believable the branding and messaging appeared. As phishing attacks have become increasingly more sophisticated, the reliance on using branding should decrease, and a proactive security indicator can curb that dependence. Such signs intervene to provide users with a more secure email experience without detracting from their primary task. 
 </p>
 <p className="subtitle">
Google and internet security companies like Inky implement proactive indicators; however, their messages are vague and not as useful for spoofed links commonly found in deceptive phishing. What differentiates my redesigned warnings from existing design solutions are the transition between generic messages to case-dependent security warnings, discrete and specific choices that help the user finish their primary task safely, and visual indicators that make the discrepancy in the suspicious link or sender more apparent. This study supported my hypothesis that the security indicator warnings would reduce the prevalence of phishing attacks. The results show that regardless of technical comfort and gender, participants are unlikely to attend to security cues. In general, there needs to be a shift from general technology comfort towards security comfort to predict susceptibility. However, the effectiveness of the yellow signs could be improved to capture more attention, as some participants in Group 2 completely ignored them, or chose to take different actions compared to what the warnings recommended. Overall, the redesign demonstrated that some mediation on the email system’s behalf alerts users about suspicious security activity and decreases the number of phishing attacks.  

 </p>
 </div>

  <br></br>
    <br></br>

  <div className="container is-fluid">
    <h1 className = "title is-size-5 has-text-centered"> Additional Information </h1>
    <br></br>


    <p className="subtitle">
I had a wonderful opportunity to get interviewed by UMass College of Computer Science about my senior thesis research:

 </p>
 <br></br>
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%"/* "56.25%" 16:9 */,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: "0%",
          left: "4%",
          right: "10%",
          width: "90%",
          height: "83%"

        }}
        src={`https://www.youtube.com/embed/kEBhuMCEsIY`}
        title="thesis_vid"
        frameBorder="0"
      />
    </div>









    <p className="subtitle">
    For detailed information on this project, please feel free to view my final poster presentation and read a copy of my final thesis report. 

 </p>

 <article className="media center">

      
                <a className="button is-dark is-padded" href="https://drive.google.com/file/d/12xI5NlndmFYcAhyK0ujN1SxueFO38Vyv/view?usp=sharing/" target="_blank" >View Research Poster</a>
        &nbsp;
        &nbsp;
        <a className="button is-dark is-padded" href="https://drive.google.com/file/d/1e_0p5sNhIkjGlXAn-prv9hj-O_qA1d3P/view?usp=sharing/" target="_blank" >View Complete Thesis</a>


        <br></br>
        <br></br>
    </article>

  </div>
<br></br>
        <br></br>


  


  	</div>
  	

);
export default Proj2Body;