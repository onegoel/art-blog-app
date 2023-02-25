import React from 'react';
import './iconButton.css';
import PropTypes from 'prop-types';

const IconButton = ({
	imgSrc,
	altText,
	onClick
}) => {
	return(
		<img 
			className='icon-button'
			src={imgSrc}
			alt={altText}
			onClick={onClick}
		/>
	);
};

IconButton.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default IconButton;