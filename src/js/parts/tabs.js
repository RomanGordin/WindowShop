function tabs(){
	let glazingSlider = document.querySelector('.glazing_slider'),
		glazingBlock = document.querySelectorAll('.glazing_block'),
		glazingAll = document.querySelectorAll('.bab'),
		textGlazing = document.querySelectorAll('.bob'),
		activeAtribute = glazingSlider.querySelectorAll('img'),
		slickTrack = document.querySelectorAll('.slick-track')[1],
		tagSlick = slickTrack.querySelectorAll('a');
		item = document.querySelectorAll('.decoration_item'),
		noClick = document.querySelectorAll('.no_click'),
		decoration = document.querySelectorAll('.lock');

		function dontShow1(a){
			for(let i = a; i < decoration.length; i++){
				decoration[i].classList.add('hide');
				noClick[i].classList.remove('after_click');
			}
		}
		dontShow1(1);

		function show1(a){
			decoration[a].classList.remove('hide');
			decoration[a].style.display = 'block';
			noClick[a].classList.add('after_click');
		}
		slickTrack.addEventListener('click', function(e) {
			let target = e.target;
				for(let i = 0; i < noClick.length; i++){
					if(target == noClick[i] || target == tagSlick[i]){
						dontShow1(0);
						show1(i);
					}
				}
		});


		function dontShow(a){
			for(let i = a; i < glazingAll.length; i++){
				glazingAll[i].classList.add('hide');
				textGlazing[i].classList.remove('active');
			}
		}
		dontShow(1);

		function show(a){
				glazingAll[a].classList.remove('hide');
				glazingAll[a].style.display = 'block';
				textGlazing[a].classList.add('active');
		}

		glazingSlider.addEventListener('click', function(e) {
			let target = e.target;
				for(let i = 0; i < glazingBlock.length; i++){
					if(target == glazingBlock[i] || target == textGlazing[i] || target == activeAtribute[i]){
						dontShow(0);
						show(i);
					}
				}
		});
}

module.exports = tabs;