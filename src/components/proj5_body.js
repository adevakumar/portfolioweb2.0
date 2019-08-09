import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/
import branding from '../images/branding.png';
import logo from '../images/mastree_logo.png';


const Proj5Body = () => (
    <div className="container">
    <br></br>

  <br></br>
  <br></br>

    <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Role</p>
      <p className="subtitle is-size-6">Branding, UX Design</p>
      <p className="subtitle is-size-6">Development</p>
      <p className="subtitle is-size-6">User Research</p>
      <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Duration</p>
      <p className="subtitle is-size-6">Jan 2019 - May 2019</p>
            <p className="subtitle is-size-6 has-text-white">" " </p>
      <p className="subtitle is-size-6 has-text-white">" " </p>
            <p className="subtitle is-size-6 has-text-white">" " </p>


    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Team</p>
      <p className="subtitle is-size-6">Edwood Brice</p>
      <p className="subtitle is-size-6">Nila Sadeeshkumar</p>
      <p className="subtitle is-size-6">Ryan Mahan</p>
      <p className="subtitle is-size-6">Jeff Reardon</p>



    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Tools</p>
      <p className="subtitle is-size-6">HTML/CSS/JS</p>
      <p className="subtitle is-size-6">Sketch, Canva</p>
      <p className="subtitle is-size-6 has-text-white">" " </p>
            <p className="subtitle is-size-6 has-text-white">" " </p>
    </div>
  </div>
  </nav>
  <br></br>

  <br></br>
          <br></br>

  <div className="container is-fluid">
    <p>I primarily served as the design lead on the project, creating our brochure, logo, branding materials, and designing our website. However, I contributed in every step of the startup process, such as devising our revenue model and business plans and presenting in our pitch to investors. </p>
<br></br>
  <h1 className = "title is-size-5 has-text-centered"> Overview </h1>
  <br></br>
    <p className="subtitle">
    Mastree is an online education platform with a the mission to help people learn foundational life skills and basic technical knowledge that are needed in today's increasingly technology-based world. With our simplistic UI, organized and targeted content, and goal-based learning system, we aim to even out the playing field with technology access and make it less frustrating to keep up with learning skills. 

 </p>
 </div>
<br></br>
  <br></br>

  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Target Audience </h1>
  <br></br>
    <p className="subtitle">
Although this platform can be accessed by anyone who wants to improve their skills, we aim to target older individuals (35-65 yrs) who have not grown up with technology or face barriers with learning technology. Our platform caters to adults who need to learn a new technology for their current job, wish to improve upon their current technological abilities, or cannot afford/are dissatisfied with competing online or local learning resources. Additionally, we cater to students who do not have adequate access to education in technology at their school. 
 </p>
 </div>
  <br></br>

 <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Highlighted Features </h1>
  <br></br>
    <p className="subtitle">
The team focused on three goals for our website: 
 </p>
  <br></br>
 <p className="subtitle">
1. Creating a simplistic UI - Our website has large buttons, easily understood messages and action choices, and the learning content is front and center. 
 </p>

 <p className="subtitle">
2. Organized Content - In a user survey, we asked individuals within our target audience age range about topics they wanted to learn about and we identified the following domains:
   <br></br>
  <br></br>

 <li>Finance</li>
<li>Jobs/Branding</li>
<li>Technology</li>
<li>Health and Wellness</li>
<li>Political </li>
  <br></br>

We aimed to not dilute our content so users can easily find relevant content. We incorporated breadcrumb navigation to ensure people know where they are within the site and can easily search for topics. 
  <br></br>
  </p>
 <p className="subtitle">
3. Mastery-based learning: Rather than assigning letter grades or just checking for completion, we chose to incorporate quizzes and checkpoints that would check for understanding throughout the course. This allows for users to complete the course at a pace appropriate for them and ensure they retain the material better. 
 </p>

 </div>


<br></br>
  <br></br>
 <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Branding </h1>
  <br></br>
  <p className="subtitle">
  The color scheme I chose for the learning platform was meant to convey feelings of peacefulness, simplicity, and natural growth. As our platform intends to be a place where users can grow their skills, we chose a calming green to represent this idea. The other colors were chosen because they compliment the green nicely.

</p>
<br></br>

  <div class="column is-three-fifths is-offset-one-fifth">
    <img src={branding} alt="branding"/>
  </div>
  <br></br>
          <br></br>

  <div className="columns">
  <div className="column is-1">
      &nbsp;
    </div>
    <div className="column is-5">
      <img src={logo} alt="logo"/>
    </div>
    <div class="column is-5">
              <br></br>
          
      <p className="subtitle">
        I chose a tree to represent the idea of growth and nurturing skills. Our tagline, Branch Out and Grow, emphasizes the fact that this education platform enables users to learn at their own pace gradually. A tree grows slowly and gradually from a small seed but eventually transforms into something magnificent and large. We used our logo to visually represent that idea and drive the purpose of our platform. The tree's colors also incorporate the same color scheme.
      </p>
    </div>
    <div className="column is-1">
      &nbsp;
    </div>
  </div>
  </div>
<br></br>
  <br></br>
  <br></br>
<div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Prototype Demo </h1>
    <br></br>
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
          left: "10%",
          right: "10%",
          width: "80%",
          height: "83%"

        }}
        src={`https://www.youtube.com/embed/DNhBfIOn-Ig`}
        title="mastree"
        frameBorder="0"
      />
    </div>
</div>

  <div className="container is-fluid">
    <h1 className = "title is-size-5 has-text-centered"> Additional Information </h1>
    <br></br>
    <p className="subtitle">
We had the wonderful opportunity of pitching our startup idea to Entrepreneurs in Residence at UMass Amherst. To learn more about Mastree's progress, please check out our marketing brochure and final pitch deck used for our startup pitch. 
 </p>

 <article className="media center">

      
                <a className="button is-dark is-padded" href="https://drive.google.com/file/d/1FPWuO2rQxJPgDADI_LVNb7hMSZbGd5Ux/view?usp=sharing/" target="_blank" >View Pitch Deck</a>



        &nbsp;
                &nbsp;
        <a className="button is-dark is-padded" href="https://drive.google.com/file/d/1rdYv-jUX_uoc4vk-NwA71bcG-yphLEvL/view?usp=sharing/" target="_blank" >View Brochure</a>


        <br></br>
        <br></br>
    </article>

  </div>
<br></br>
        <br></br>
   


  </div>

  );
export default Proj5Body;