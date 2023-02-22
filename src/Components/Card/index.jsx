/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Card.css';
import clapping from '../../assets/icons/clapping.svg'; 
import heartBlack from '../../assets/icons/heart-black.svg'; 
import heartRed from '../../assets/icons/heart-red.svg'; 
import reason from '../../assets/images/reason.png'; 
import propTypes from 'prop-types'; 
import IconButton from '../IconButton';
import loadIcons from '../../assets/icons';

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
	const cardImgSrc = ('../../Assets/images/' + image);
	const heartIcon = isLiked ? heartRed : heartBlack;
	return (
		<div className="card">
			<img src={cardImgSrc} alt={cardImgSrc} />
			<p className='card-meta-info'>
				<span>{date}</span>
				<span>{readingTime}</span>
			</p>
			<div className='card-body'>
				<h4 className='card-title'>{title}</h4>
				<p className='card-text'>{description}</p>
			</div>
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