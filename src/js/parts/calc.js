function calc(){
	var calc = document.querySelectorAll('.glazing_price_btn'),
    popupCalc = document.querySelector('.popup_calc'),
    popupCalcProfile = document.querySelector('.popup_calc_profile'),
    popupCalcEnd = document.querySelector('.popup_calc_end'),
    closeCalc = document.querySelector('.popup_calc_close'),
    popupClose = document.querySelector('.popup_calc_profile_close'),
    popupCloseEnd = document.querySelector('.popup_calc_end_close'),
    balconIcons = document.querySelectorAll('.balcon_icons'),
    bigImg = document.querySelectorAll('.lol'),
    type1img = document.querySelectorAll('.type_img'),
    type = document.querySelector('.big_img'),
    vat = document.querySelector('.popup_calc_button'),
    vat1 = document.querySelector('.popup_calc_profile_button'),
    heightModal = document.getElementById('height'),
    widthModal = document.getElementById('width');

var calcEndPopupInput = popupCalcEnd.getElementsByTagName('input'),
    checkbox = document.getElementsByName('checkbox-test'),
	calcAll = {
	name: name,
	number: '',
	width: width,
	height: height,
	profile: ''
};

var _loop2 = function _loop2(i) {
	calcEndPopupInput[i].addEventListener('change', function () {
		if (i == 0) {
			calcAll.name = calcEndPopupInput[i].value;
		} else if (i == 1) {
			calcAll.number = calcEndPopupInput[i].value;
		}
	});
};

for (var i = 0; i < calcEndPopupInput.length; i++) {
	_loop2(i);
}

for (var i = 0; i < checkbox.length; i++) {
	if (checkbox[i].type === 'radio' && checkbox[i].checked) {
		calcAll.profile = checkbox[i].value;
	}
}

heightModal.addEventListener('change', function () {
	calcAll.height = heightModal.value;
});

widthModal.addEventListener('change', function () {
	calcAll.width = widthModal.value;
});

type1img[0].style.width = '150px';

function hideTabs(a, b) {
	for (var _i = a; _i < b.length; _i++) {
		bigImg[_i].style.display = 'none';
		type1img[_i].style.width = '60px';
	}
}

hideTabs(1, bigImg);
hideTabs(1, type1img);

var _loop3 = function _loop3(_i2) {
	type1img[_i2].onclick = function (event) {
		event.preventDefault();
		var target = event.target;
		if (target == type1img[_i2]) {
			hideTabs(0, bigImg);
			hideTabs(0, type1img);
			type1img[_i2].style.width = '150px';
			bigImg[_i2].style.display = 'block';
		}
	};
};

for (var _i2 = 0; _i2 < type1img.length; _i2++) {
	_loop3(_i2);
}

function closeModal(pop) {
	pop.style.display = 'none';
}

function openModal(pop) {
	pop.style.display = 'block';
}


vat.addEventListener('click', function () {
	closeModal(popupCalc);
	openModal(popupCalcProfile);
});
vat1.addEventListener('click', function () {
	closeModal(popupCalcProfile);
	openModal(popupCalcEnd);
});

popupCloseEnd.addEventListener('click', function () {
	closeModal(popupCalcEnd);
	console.log(calcAll);
});

popupClose.addEventListener('click', function () {
	closeModal(popupCalcProfile);
	openModal(popupCalcEnd);
});

closeCalc.addEventListener('click', function () {
	closeModal(popupCalc);
	openModal(popupCalcProfile);
});

var _loop4 = function _loop4(_i3) {
	calc[_i3].onclick = function (event) {
		var target = event.target;
		if (target == calc[_i3]) {
			openModal(popupCalc);
		}
	};
};

for (var _i3 = 0; _i3 < calc.length; _i3++) {
	_loop4(_i3);
}
}

module.exports = calc;