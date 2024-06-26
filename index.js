const inputs = document.querySelectorAll('.input');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const mainDiv = document.getElementById('main');
const position = false;

inputs.forEach(function(input){
    input.addEventListener('focus', function(){
        let id = input.getAttribute('id');
        const labelElement = document.querySelector(`label[for="${id}"]`);
        labelElement.classList.remove('hidden');
        input.classList.remove('placeholder:text-slate-400');
        input.classList.add('placeholder:text-white');
    });

    input.addEventListener('blur', function(){
        let id = input.getAttribute('id');
        const labelElement = document.querySelector(`label[for="${id}"]`);
        labelElement.classList.add('hidden');
        input.classList.add('placeholder:text-slate-400');
        input.classList.remove('placeholder:text-white');
    });
    
});

registerBtn.addEventListener('click', function(){
    
    mainDiv.style.transform = "rotateY(180deg)";
    registerForm.style.transform = "rotateY(180deg)";
    setTimeout(function(){
        loginForm.classList.add("hidden");
    }, 500);
});

loginBtn.addEventListener('click', function(){
    
    mainDiv.style.transform = "rotateY(0deg)";
    registerForm.style.transform = "rotateY(0deg)";
    setTimeout(function(){
        loginForm.classList.remove("hidden");
    }, 500);
});
