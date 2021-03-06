import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import ConvoyHead from '../components/convoy_head';
import ConvoyBody from '../components/convoy_body';
import ConvoyCallback from '../components/convoy_callback.js';



const ConvoyLayout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<ConvoyHead />
		<ConvoyBody />
		<ConvoyCallback />

		<Footer />
	</div>
);

export default ConvoyLayout;
