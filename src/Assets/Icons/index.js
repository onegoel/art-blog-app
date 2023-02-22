const icons = {
	'heartBlack': import ('./heart-black.svg'),
	'heartRed': import ('./heart-red.svg'),
	'clapping': import ('./clapping.svg'),
};

const loadIcons = async () => {
	const loadedIcons = {};
	for(const key in icons) {
		loadedIcons[key] = await icons[key];
	}
	return loadedIcons;
};
            

export default loadIcons;
