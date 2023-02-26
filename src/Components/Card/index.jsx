/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './card.css';
import { clapping, heartBlack, heartRed } from '../../assets/icons';
import propTypes from 'prop-types'; 
import IconButton from '../IconButton';

const Card = ({
	date,
	readingTime,
	title,
	description,
	claps,
	liked,
	image
}) => {
	const [isLiked, setIsLiked] = useState(liked);
	const [clapCount, setClapCount] = useState(claps);
	const cardImgSrc = require('../../assets/images/' + image); // eslint-disable-line
	const heartIcon = isLiked ? heartRed : heartBlack;
	return (
		<div className="card">
			<img className="card-img-top" src={cardImgSrc} alt={cardImgSrc} />
			<p className='card-meta-info'>
				<span>{date}</span>
				<span>{readingTime}</span>
			</p>
			<div className='card-body'>
				<h4 className='card-title'>{title}</h4>
				<p className='card-text'>{description}</p>
			</div>
			{/* <hr className='ruler'></hr> */}
			<div className='ruler'></div>
			<div className='card-footer'>
				<div className='claps'>
					<IconButton 
						imgSrc={clapping} 
						altText='clapping' 
						onClick={() => {
							setClapCount(clapCount + 1);
						}} 
					/>
					<span>{clapCount}</span>
				</div>
				<div className='like'>
					<IconButton 
						imgSrc={heartIcon} 
						altText='heart' 
						onClick={() => {
							setIsLiked(!isLiked);
						}} 
					/>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	date: propTypes.string,
	readingTime: propTypes.string,
	title: propTypes.string,
	description: propTypes.string,
	claps: propTypes.number,
	liked: propTypes.bool,
	image: propTypes.string
};

export default Card;