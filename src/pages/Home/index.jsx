import './Home.css';
import React from 'react';
import { Header, Posts, Footer } from '../../components';

function Home() {
	return (
		<div className="home">
			<Header />
			<Posts />
			<Footer />
		</div>
	);
}

export default Home;