import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';*/
import "animate.css/animate.min.css";



const Proj4Body = () => (
    <div className="container">
    <br></br>

  <br></br>
  <br></br>

    <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Role</p>
      <p className="subtitle is-size-6">Web Development</p>
      <p className="subtitle is-size-6">User Feedback</p>
      <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Duration</p>
      <p className="subtitle is-size-6">Jan 2019 - May 2019</p>
            <p className="subtitle is-size-6 has-text-white">" " </p>
      <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Team</p>
      <p className="subtitle is-size-6">Neha Potturu</p>
      <p className="subtitle is-size-6">Shruti Jalan</p>
      <p className="subtitle is-size-6">Pracheta Amranath</p>


    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Tools</p>
      <p className="subtitle is-size-6">D3.js, Dc.js, HTML/CSS/JS</p>
            <p className="subtitle is-size-6 has-text-white">" " </p>
            <p className="subtitle is-size-6 has-text-white">" " </p>
    </div>
  </div>
  </nav>
  <br></br>
  <br></br>

  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Overview </h1>
  <br></br>
    <p className="subtitle">
For our semester project in my Data Visualization course, I worked on a 4-person team that took US School census data from 2015-2016 and developed a ranking of schools by state based on common school atrributes, such as diversity, course offerings, and safety. The primary aim of this project is to first build a visualization that categorizes the school information into geographic areas to allow users to narrow down options to a search area of their choice. By gathering such statistics, and analyzing this data in greater detail, we aim to answer this question by allowing parents/guardians who wish to enroll their children in a nearby school, assess its performance over the years of 2015-2016. Ideally, the parents/guardians should be able to express their factor of interest in determining the “right” school for the children and be able to make an informed choice. A dynamic visualization allows users to filter on criteria they choose to focus on, giving them more personal choice in viewing the school data.
 </p>
 </div>
<br></br>
  <br></br>

  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Ranking Method </h1>
  <br></br>
    <p className="subtitle">
    We used the following criteria to develop a ranking in our visualization: 
 </p>
 <p className="subtitle">
Racial diversity, gender diversity, AP classes offered, offenses (Arrests, Suspensions, Expulsions, Harrasment & Bullying). Each criteria was scored on a 5 point scale, and a particular school is assigned a score out of 20 points. A school with a 20 score is considered very good. This is a very basic ranking that we were able to achieve within our timeline, but in future iterations, we want to incorporate a more comprehensive method. We used various visualization techniques in our website, including pie charts, bar charts, stacked bar charts, and tables, because we had various forms of data we wanted to represent.  </p>
 </div>
<br></br>
  <br></br>
 <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Live Demo </h1>
  <br></br>
  <p className="subtitle">
Here is our live website which displays the dynamic visualization:
                &nbsp;

<a href = "https://jalshr21.github.io/DataViz/" className="button is-dark is-small is-padded">US School Visualization</a>
</p>

  <p className="subtitle">

I was involved in every step of the process, from determining the types of visualizations used, determining a ranking algorithm, and coding the graphs and website. In particular, I developed the ranking methodology and visualizations for school offenses. I also conducted user testing and designed our presentation. 
</p>
  </div>
  <br></br>
        <br></br>
  <div className="container is-fluid">
    <h1 className = "title is-size-5 has-text-centered"> Additional Information </h1>
    <br></br>
    <p className="subtitle">
For detailed information on this project, please check out our presentation deck, demo our website, and view our final project report. 

 </p>

 <article className="media center">

      
                <a className="button is-dark is-padded" href="https://drive.google.com/file/d/1m9rFErKQ2GF41g99jfl53lEaGfChMu7n/view?usp=sharing/" target="_blank" >View Final Report</a>



        &nbsp;
                &nbsp;
        <a className="button is-dark is-padded" href="https://drive.google.com/file/d/1s_g7sX5ZkjwskS0G48OigB9AlW1-RvQ7/view?usp=sharing/" target="_blank" >View Presentation</a>


        <br></br>
        <br></br>
    </article>

  </div>
<br></br>
        <br></br>
   
  </div>

  );
export default Proj4Body;