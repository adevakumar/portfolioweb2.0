import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import Proj4Head from '../components/proj4_head';
import Proj4Body from '../components/proj4_body';


const Proj4Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Proj4Head />
		<Proj4Body />
		
		<Footer />
	</div>
);

export default Proj4Layout;
