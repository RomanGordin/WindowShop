function timer(){
	let deadline = '2018-12-11, 23:59:59';

function getTimeRemaining(endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date()),
	    seconds = Math.floor(t / 1000 % 60).toString(),
	    minutes = Math.floor(t / 1000 / 60 % 60).toString(),
	    hours = Math.floor(t / (1000 * 60 * 60) % 24).toString(),
	    days = Math.floor(t / (1000 * 60 * 60 * 24)).toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}
	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}
	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}
	if (days.length < 2) {
		days = '0' + days;
	}

	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};

function setClock(endtime) {

	let timer = document.querySelector('.times_wrap'),
	    hours = timer.querySelector('.hours'),
	    minutes = timer.querySelector('.minutes'),
	    seconds = timer.querySelector('.seconds'),
	    days = timer.querySelector('.days');

	function updateClock() {
		let t = getTimeRemaining(endtime);
		hours.innerHTML = t.hours;
		minutes.innerHTML = t.minutes;
		seconds.innerHTML = t.seconds;
		days.innerHTML = t.days;

		if (t.total <= 0) {
			clearInterval(timeInterval);
			timer.textContent = "00 : 00 : 00 : 00";
		}
	}

	let timeInterval = setInterval(updateClock, 1000);
	updateClock();
}

setClock(deadline);
}

module.exports = timer;