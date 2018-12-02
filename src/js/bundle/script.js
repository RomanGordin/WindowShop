window.addEventListener('DOMContentLoaded', function () {

	let tabs = require('../parts/tabs.js');
	let modal = require('../parts/modal.js');
	let ajax = require('../parts/ajax.js');
	let img = require('../parts/img.js');
	let timer = require('../parts/timer.js');
	let calc = require('../parts/calc.js');

	ajax();
	tabs();
	modal();
	img();
	timer();
	calc();

});