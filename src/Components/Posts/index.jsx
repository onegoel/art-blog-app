import React, { useEffect } from 'react';
import './posts.css';
import Card from '../Card';
import mockData from '../../constants/__mockData__/mockData.json';
import makeRequest from '../../utils/makeRequest';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';

const Posts = () => {
	useEffect(() => {
		makeRequest(GET_BLOG_DATA)
			.then((response) => {
				console.log('response', response);
			});
	}, []);
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