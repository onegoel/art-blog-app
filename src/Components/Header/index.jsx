import React from 'react';
import './header.css';

const Header = () => {
	return (
		<div className="header">
			<div className="blog-name">
				<h1>The Artifact</h1>
				<p>Culture & Art Blog</p>
			</div>

			<div className="nav-menu">
				<button>Blog</button>
				<button>About</button>
				<button>Contact</button>
			</div>
		</div>
	);
};

export default Header;