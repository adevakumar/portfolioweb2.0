import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import Proj3Head from '../components/proj3_head';
import Proj3Body from '../components/proj3_body';


const Proj3Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Proj3Head />
		<Proj3Body />

		<Footer />
	</div>
);

export default Proj3Layout;
