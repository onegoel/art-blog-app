import React from 'react';
import './posts.css';
import Card from '../Card';
import mockData from '../../constants/__mockData__/mockData.json';

const Posts = () => {
	return (
		<div className="cards-wrapper">
			{mockData.map((post, index) => {
				return (
					<Card
						key={index}
						{
							...post
						}
					/>
				);
			})}
		</div>
	);
};

export default Posts;