let a = 5;
console.log(a);

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
        popbox.classList.remove('show');
    
    });

})

    