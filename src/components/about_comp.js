import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import AboutBody from '../components/about_body';

const AboutComp = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<AboutBody />
		<Footer />
	</div>
);

export default AboutComp;