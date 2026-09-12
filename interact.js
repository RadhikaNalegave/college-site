
document.addEventListener("DOMContentLoaded" , () =>{
    const open = document.getElementById('open');
    const popbox = document.getElementById('pop-box');
    const close = document.getElementById('close');
    
    open.addEventListener('click' , () => {
        popbox.classList.add('show');
    
    });
    
    
    
    const form = document.getElementById('form');
    const mail = document.getElementById('mail');
    const error_msg = document.getElementById('error-msg');



    
    form.addEventListener( 'submit' , (e) => {
        let errors = []

        errors = InvalidMailError(mail);

        if(errors.length > 0){
            e.preventDefault()
            error_msg.innerText = errors.join(". ")
        }
        else{
            e.preventDefault()

            const login = mail.value;
            const usermail = { email: login }
    
            fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(usermail)

        })
        .then(response => response.json())
        .then(data => {
            console.log('received data from server', data)
        })

        }

    })

    form.addEventListener( 'reset', (e) =>{

        

    })
    
    function InvalidMailError(mail){
        let errors = []
        

        if(mail.value === '' || mail.value == null){
            errors.push('Email is required')
            mail.parentElement.classList.add('incorrect')
        }

        if(!mail.value.includes('@') || mail.value.toLowerCase() != mail.value){
            errors.push('Incorrect email ID')
            mail.parentElement.classList.add('incorrect')
        }

        return errors;
    }



    mail.addEventListener('input' , () =>{
        if(mail.parentElement.classList.contains('incorrect')){
            mail.parentElement.classList.remove('incorrect')
            error_msg.innerText = ' '
            console.log(error_msg.innerText)
        }
    })
    
    close.addEventListener('click' , () => {
        
        if(mail.parentElement.classList.contains('incorrect')){
            mail.parentElement.classList.remove('incorrect')
            error_msg.innerText = ' '
            console.log(error_msg.innerText)
        }
        mail.value = ' ';
        popbox.classList.remove('show');
    
    });

    const right_btn = document.getElementById('right-btn');
    const left_btn = document.getElementById('left-btn');
    const carousel = document.querySelectorAll('.carousel-item');

    let start = 0;
    const end= 2;

    right_btn.addEventListener( 'click' , () => {

        start = start - 100;
        if(start >= end*(-100)){

            carousel.forEach(element =>{
            element.style.transform = `translateX(${start}%)`;

             })

        }


    })

    left_btn.addEventListener( 'click' , () => {

        start = start + 100;
        if(start <= 0){
            carousel.forEach(element =>{
            element.style.transform = `translateX(${start}%)`;
            })
        }
    })

})