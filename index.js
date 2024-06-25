const inputs = document.querySelectorAll('.input');
const register = document.getElementById('register');
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

register.addEventListener('click', function(){
    
});

register.addEventListener('click', function(){
    document.getElementById('main').style.transform = "rotateY(180deg)";
    position = !position;

    if(position){

        Yrotation("none", "inline", "hide details", "rotateY(180deg)");
    }else{

        Yrotation("inline", "none", "show details", "rotateY(0deg)");
    }
});

function Yrotation(hiddenView, showedView, legend, degree){
    setTimeout(function(){
        card.style.transform = degree;
        document.querySelector('.hidden-visa').style.display = hiddenView;
        document.querySelector('.showed-visa').style.display = showedView;
        showText.innerHTML = legend;
        button.setAttribute('name', legend.substring(0, 4));
    }, 500);
}