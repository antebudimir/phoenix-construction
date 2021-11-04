// Project-slider initialization
const containerId = 'slider-1';

const options = {
	transitionTime: 500,
	transitionZoom: 'in',
	bullets: true,
	bulletColor: 'rgb(1, 147, 207)',
	arrows: true,
	arrowsHide: true,
	auto: true,
	autoTime: 4000,
};

const slider = createSlider(containerId, options);
