import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/

import team from '../images/team.jpeg';
import present from '../images/present.jpeg';

const ProjBody1 = () => (
    <div className="container">
    <br></br>

	<br></br>
  <br></br>

    <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Role</p>
      <p className="subtitle is-size-6">Web Development and Design</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Duration</p>
      <p className="subtitle is-size-6">June - Aug 2018</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Dev Team</p>
      <p className="subtitle is-size-6">Caitlyn Gardiner (backend)</p>

    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Tools</p>
      <p className="subtitle is-size-6">HTML, CSS, Python</p>
    </div>
  </div>
  </nav>
  <br></br>
	<br></br>
  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Background </h1>
  <br></br>

    <p className="subtitle">My intern team was comprised of 8 members, 3 Software Engineering interns and 5 Business Analyts, and we were tasked with the challenge of showcasing how emerging technologies such as AI, chatbots, or machine learning can augment the fashion and shopping experience. After meeting with senior marketing staff and designers, my team understood that TJX wanted to help customers find items that catered to their style but also fit within the constraints of TJX’s fashion model. 
		      For example, TJX focuses more on the style attributes of a piece of clothing; customers are not allowed to search by brands on tjmaxx.com to protect the company's designer relationships. With our project, we aimed to address this need by helping customers use their fashion taste to explore what TJMaxx had to offer them. 
</p>
  </div>
  <br></br>
  <br></br>

  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Solution </h1>
  <br></br>

    <p className="subtitle">
    My team presented an artificially intelligent outfit recommendation system that caters to a customer’s style while utilizing TJMaxx’s ever-changing inventory. Our final system consists of a Python backend powered by Microsoft Azure’s Image Recognition API that trains a machine learning model to recognize patterns, colors, and other attributes of clothing. A user can choose a sample outfit, and our system will provide them apparel with similar qualities from tjmaxx.com. Due to development time constraints, we only included tops and bottoms. The front-end website sits on top of the backend and provides a possible integration of the prediction service within tjmaxx.com. 
</p>
  </div>
    <br></br>

  <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Prototype Design </h1>
  <br></br>
    <p className="subtitle">
    My primary role was developing the Front-End website prototype and managing the API connections. I studied TJMaxx's color scheme and branding to ensure that our prototype matched the Tjmaxx website design. After our presentation, this project received consideration for future implementation on tjmaxx.com.

 </p>
  <br></br>

  </div>


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
        src={`https://www.youtube.com/embed/NH9-7hQiO0s`}
        frameBorder="0"
      />
    </div>
      <div className="container is-fluid">

    <div className="columns">
  <div className="column">
    <img src={team} alt="team"/>
         <p className="subtitle is-size-6"></p>
     <p className="subtitle is-size-6"> Intern team's (development and business) visit to Microsoft in Burlington, MA to learn about Microsoft Azure.</p>


  </div>
  <div class="column">
    <img style={{
      width: "70%",
    height: "auto"
    }}
      src={present} alt="present"/>
      <p className="subtitle is-size-6"></p>
     <p className="subtitle is-size-6"> Presenting the front end demonstration in our intern presentation.</p>
  </div>
  </div>
  </div>

  <br></br>
  <br></br>


  	</div>
  	

);
export default ProjBody1;