import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import ProjHead1 from '../components/proj_head';
import ProjBody1 from '../components/proj_body';


const ProjLayout1 = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<ProjHead1 />
		<ProjBody1 />

		<Footer />
	</div>
);

export default ProjLayout1;
