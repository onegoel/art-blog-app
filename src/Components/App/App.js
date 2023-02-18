import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<Posts />
			<Footer />
		</div>
	);
}

export default App;
