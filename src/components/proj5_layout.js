import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import Proj5Head from '../components/proj5_head';
import Proj5Body from '../components/proj5_body';


const Proj5_layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Proj5Head />
		<Proj5Body />

		<Footer />
	</div>
);

export default Proj5_layout;
