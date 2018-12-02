function img(){
	let newDiv = document.createElement('div'),
		bodyDiv = document.querySelector('body'),
		allImg = document.querySelectorAll('.images'),
		imgCreate = document.createElement('img');

		bodyDiv.appendChild(newDiv);
		newDiv.appendChild(imgCreate);
		newDiv.classList.add('overlay');

		bodyDiv.addEventListener('click', function(e) {
			let target = e.target;
			for(let i = 0; i < allImg.length; i++){
				if(target == allImg[i]) {
					event.preventDefault();
					newDiv.style.display = 'block';
					newDiv.innerHTML = `<img class="newImg" src='img/our_works/big_img/${i + 1}.png'>`;
				}
				if(target == newDiv){
					newDiv.style.display = 'none'
				}
			}
		});
}

module.exports = img;