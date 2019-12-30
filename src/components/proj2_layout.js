import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import Proj2Head from '../components/proj2head';
import Proj2Body from '../components/proj2_body';
import Proj2Callback from '../components/proj2_callback';


const Proj2Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Proj2Head />
		<Proj2Body/>
		<Proj2Callback/>

		<Footer />
	</div>
);

export default Proj2Layout;
