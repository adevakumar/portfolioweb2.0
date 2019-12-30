import React from 'react';
import { Link } from 'gatsby';

import './style.scss';
/*import ScrollAnimation from 'react-animate-on-scroll';*/
import "animate.css/animate.min.css";
import thesis from '../images/thesis.png';

const Proj2Callback = () => (
<section className="hero is-dark is-bold">
	
  <div className="hero-body has-text-centered">
    <div className="container">
      <br></br>
      <h2 className="title is-4">
        All Projects: 
      </h2>
      <br></br>
      <h2 className="subtitle is-5">
        <Link to="/convoy/"> Convoy </Link> // <Link to="/ncrkiosk/"> NCR Kiosk Accessibility </Link> // <Link to="/proj2/"> <strong> Avoiding Deceptive Phishing </strong> </Link> // <Link to="/proj5/"> Mastree </Link> 
      </h2>
  		</div>
  		</div>
<br></br>
</section>
);
export default Proj2Callback;