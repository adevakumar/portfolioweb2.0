import React from 'react';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";*/
import easy from '../images/easy_task.png';
import medium from '../images/medium_task.png';
import hard from '../images/hard_task.png';
import foodkeeper from '../images/foodkeeper.png';
import yummly from '../images/yummly.png';



const Proj3Body = () => (
    <div className="container">
    <br></br>

	<br></br>
  <br></br>

    <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Role</p>
      <p className="subtitle is-size-6">Web Development</p>
      <p className="subtitle is-size-6">UX Design & Research</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Duration</p>
      <p className="subtitle is-size-6">Jan 2018 - May 2018</p>
            <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Team</p>
      <p className="subtitle is-size-6">Sophia Berger</p>
      <p className="subtitle is-size-6">Michelle Rabkin</p>


    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Tools</p>
      <p className="subtitle is-size-6">HTML, CSS, Javascript</p>
            <p className="subtitle is-size-6 has-text-white">" " </p>

    </div>
  </div>
  </nav>
    <br></br>
    <div className="container is-fluid">
  <h1 className = "title is-size-5 has-text-centered"> Overview </h1>
  <br></br>

    <p className="subtitle"> 
    Fridge Helper is a web application prototype that enables users to organize their fridge by prioritizing foods through expiration dates. Each user has a food list that contains all the items in their fridge; users have the option of scanning a grocery receipt and letting our app add the food and its expiration date, or they can manually add items and expiration dates for meals that may not have concrete data (ex: takeout). The app allows users to meal-prep by providing relevant recipes per their dietary restrictions.
  <br></br>
  <br></br>

    The goal of the app is to minimize food waste and save money, as well as simplify the process of meal prepping. 
  <br></br>
    <br></br>

  I was involved in every step of the process, from interviews, building the low-fidelity prototype, and primarily coding the HTML of the high-fidelity prototype. 

</p>
  </div>
  <br></br>
  <br></br>

  <div className="container is-fluid">
    <h1 className = "title is-size-5 has-text-centered"> Target Audience </h1>
    <br></br>

    <p className="subtitle"> 
      Our target audience is primarily busy parents and students living off campus, but the app can aid anyone who prepares food. We conducted user research by interviewing local parents and students living off campus, and the feedback we received from our target audience drove every iteration cycle. 
    </p>
  </div>
  <br></br>
  <br></br>

  <div className="container is-fluid">
    <h1 className = "title is-size-5 has-text-centered"> User Research </h1>
    <br></br>

<p className="heading is-size-6"> Competitive Analysis </p>
    <br></br>

    <p className="subtitle"> 
    We started by analyzing the strengths and weaknesses of similar food storage and recipe apps on the market. A leading competitor for expiration apps is FoodKeeper, a USDA funded app that informs users when their food will expire and contains information regarding storage issues. With FoodKeeper, users need to manually enter information which can cause user frustration if they make typing errors. As for recipe planning, one popular app used is Yummly. Yummly provides many categories for users to filter and search for recipes.The only downside to Yummly is that it still does not entirely fix the issue of needing to find and use multiple food items from your fridge in an easy manner. What differentiates our app from such competitors is the ability to select specific ingredients from your food list and find recipes with those ingredients.    </p>
  </div>
    <br></br>

  <div className="columns is-centered">
      <div className="column is-3">
               &nbsp;

      </div>
     <div class="column is-4">
      <img style={{
        width: "37%",
      height: "auto"

      }} src={foodkeeper} alt="foodkeeper"/>
    </div>
    <div className="column is-4">
        <br></br>
    <br></br>

            <img style={{
        width: "50%",
      height: "auto"

      }} src={yummly} alt="yummly"/>

    </div>
    <div className="column is-1">
               &nbsp;

    </div>
    <br></br>

  </div>

  <div className="container is-fluid">
    
<p className="heading is-size-6"> Knowledge Elicitation </p>
    <br></br>

    <p className="subtitle"> 
Before making prototypes, we conducted interviews with users in our target audience to determine what aspects of FridgeHelper would benefit them and get suggestions for additional features. For initial meetings, we used an unstructured interview to encourage brainstorming, but once we knew which topics would be good for conversation, we used structured interviews to get direct answers and ensure we received all the information we wanted.  </p>
    <br></br>
    <p className="heading is-size-6"> Scenario Development </p>
        <br></br>
        <p className="subtitle"> 
        Sample Persona: Gayle, Age 40.
        <br></br>

        <li>Housewife and mother of 7</li>
        <li>Does most of the cooking and food shopping</li>
        <li>Frequently uses her iPhone</li>
        <li>Lives in Amherst, MA (suburb)</li>
        <br></br>
        Scenario:
        <br></br>

        Setting: Gayle picks up 3 of her kids from soccer practice and heads to the grocery store to buy food. During the trip, her hungry children nag her to purchase items that were not on her list. She exceeds her budget of $150. 
        <br></br>
        <br></br>

        Actors: Gayle and three of her children (Chad, Conor, Kayleigh)
        <br></br>
        <br></br>
        Goals:
        <br></br>
        <li>Plan recipes with ingredients in her fridge</li>
        <li>Help her track extra food her children buy</li>
        <li>Stick to her budget </li>
          <br></br>
        Actions: 
        <li>Gayle logs in to the app, scans her receipt, and manually adds miscellaneous items  </li>
        <li>She selects ingredients to generate a recipe for dinner</li>
        <br></br>
        Events: Fridge Helper saves receipt data, assigns each item an expiration date and suggests recipes based on the entered data.  
                <br></br>

    </p>
    <br></br>
  </div>
  <div className="container is-fluid">
    <h1 className = "title is-size-5 has-text-centered"> User Testing and Representative Tasks</h1>
    <br></br>

    <p className="subtitle"> 
      We made sample tasks and had users in our target audience perform them to find areas of improvement in our prototype and prioritize implementation changes. 
      <br></br>
      <br></br>


      <br></br>
      We created a low-fidelity paper prototype and had users complete three tasks while we observed their behavior and asked them questions about their experience after completing the tasks. 
      <br></br>
        <br></br>
  <div className="columns">
    <div className="column is-8">
      <img container style={{
        width: "400%",
      height: "auto"

      }}
      src={easy} alt="easy_task"/>
    </div>
    <div class="column">
    <br></br>
      <br></br>
      <br></br>
      1. <strong>Easy Task</strong>: Scanning the receipt and making manual changes if any food inputs are incorrect. 
    </div>
  </div>


      <br></br>
  <div className="columns">
    <div className="column is-8">
      <img container style={{
        width: "200%",
      height: "auto"

      }}
      src={medium} alt="medium_task"/>
    </div>
    <div class="column">
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
    2. <strong>Medium Task </strong>: Searching for a recipe based on fridge ingredients
    </div>
  </div>

        <br></br>
  <div className="columns">
    <div className="column is-8">
      <img container style={{
        width: "200%",
      height: "auto"

      }}
      src={hard} alt="hard_task"/>
    </div>
    <div class="column">
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    

      3. <strong>Difficult Task </strong>: Manually adding food items that have a vague expiration date or name (ex: restaurant leftovers/takeout)
          </div>
  </div>
      <br></br>

      

      Insights from User-Testing:
      <br></br>
            <br></br>

      Based on our observations from user-testing, we compiled the main pain points our users were experiencing and prioritized their importance. 
      <br></br>
      <br></br>

      <li>Being able to add the same food twice (3 - high priority)</li>
<li>My Foods shows crossed out items (2)</li>
<li>Not enough spacing between buttons (1) </li>
<li>Add food ‘+’ is hard to read/too small (1) </li>

    </p>

  </div>
  <br></br>
  <br></br>
  <div className="container is-fluid">
    <h1 className = "title is-size-5 has-text-centered"> High Fidelity Prototype </h1>
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
          width: "82%",
          height: "83%"

        }}
        src={`https://www.youtube.com/embed/10QQx3TpfRI`}
        title="fridge_helper"
        frameBorder="0"
      />
    </div>
    <p className="subtitle"> 
    Our high fidelity prototype website is built using HTML, CSS, and Javascript. We wanted to originally create a mobile app use Xcode/Swift but not everyone in the group had a Macbook. We then moved to Ionic, but the setup was incredibly buggy. Given the timeframe of this project and the focus of the UI, we hardcoded some underlying functionality, like the recipe generator and receipt scanning. 
    In a future iteration, I aim to translate this project into a mobile app prototype. 
    </p>
  </div>
  <br></br>
  <br></br>

<nav className="level">
  <p className="level-item has-text-centered">
    <a className="button is-medium is-centered is-dark is-padded" href="https://drive.google.com/file/d/1aIWGaxbl7RxFI2hbvHLr5JxeOQHafToi/view?usp=sharing/" target="_blank" >View Presentation</a>

  </p>
  </nav>
<br></br>
<br></br>

  </div>



);
export default Proj3Body;