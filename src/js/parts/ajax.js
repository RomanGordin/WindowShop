function ajax(){
    let form = document.querySelectorAll('.form'),
        input = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');
        console.log(form);

        let message = {
            loadind: 'Загрузка',
            success: 'Спасибо мы с вами свяжемся!',
            failure: 'Что то пошло не так'
        };
        statusMessage.classList.add('status');
        for(let i = 0; i < form.length; i++){
            postQuestion(form[i]);
        }

        function postQuestion(a){
            a.addEventListener('submit', function(event){
                event.preventDefault();
                a.appendChild(statusMessage);
    
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
                let formData = new FormData(a);
                request.send(formData);
    
                request.addEventListener('readystatechange', function() {
                    if(request.readyState < 4){
                        statusMessage.textContent = message.loadind;
                    } else if(request.readyState === 4 && request.status == 200){
                        statusMessage.textContent = message.success;
                    } else {
                        statusMessage.textContent = message.failure;
                    }
                });
    
            });
        }
};



module.exports = ajax;