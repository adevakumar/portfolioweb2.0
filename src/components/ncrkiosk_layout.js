import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import NCRKioskHead from '../components/ncrkiosk_head';
import NCRKioskBody from '../components/ncrkiosk_body';
import NCRCallback from '../components/ncr_callback';


const NCRKioskLayout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<NCRKioskHead />
		<NCRKioskBody />
		<NCRCallback />

		<Footer />
	</div>
);

export default NCRKioskLayout;
