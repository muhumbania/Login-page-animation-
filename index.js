const inputs = document.querySelectorAll('.input');


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

