function modal(){
let modalEnginer = document.querySelectorAll('.popup_engineer, .popup'),
	close = document.querySelectorAll('.popup_close'),
	closeteg = close[1].querySelector('strong'),
	closetegmodal = close[0].querySelector('strong'),
    headerBtnPopupEnginer = document.querySelector('.popup_engineer_btn'),
	phoneLink = document.querySelectorAll('.phone_link');

function closeModal(pop) {
	pop.style.display = 'none';
}

function openModal(pop) {
    pop.style.display = 'block';
}

for(let i = 0; i < modalEnginer.length; i++){
    modalEnginer[i].addEventListener('click', function(e){
        let target = e.target;
        if(target == modalEnginer[i] || target == close[i] || target == closetegmodal || target == closeteg){
            closeModal(modalEnginer[i]);
        }
    });
}

headerBtnPopupEnginer.addEventListener('click', function(event){
    event.preventDefault();
    openModal(modalEnginer[0]);
});

for(let i = 0; i < phoneLink.length; i++){
    phoneLink[i].addEventListener('click', function(event){
        event.preventDefault();
        openModal(modalEnginer[1]);
    });
}

setTimeout(function () {
	openModal(modalEnginer[1]);
}, 40000);
}
module.exports = modal;