import React from 'react';
import './Posts.css';
import Card from '../Card/Card';
import mockData from '../../Constants/__mockData__/mockData.json';

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