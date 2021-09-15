function animatedForm(){

    const arrow = document.querySelectorAll(".fa-arrow-down");

    arrow.forEach(arrow =>{
        arrow.addEventListener("click",()=>{
            const input = arrow.previousElementSibling;
            const parent =arrow.parentElement;
            const nextForm =parent.nextElementSibling;
if(input.type ==="text" && validateUser(input)){

    nextSlide(parent,nextForm);


}else if(input.type ==="email" && validateEmail(input)){


    nextSlide(parent,nextForm);
} else if(input.type ==="password" && validateUser(input)){
    nextSlide(parent,nextForm); 
}else{
    parent.style.animation="animate 0.5s ease"
}

parent.addEventListener('animation',()=>{
parent.style.animation="";
})


        })
    })
}




function validateUser(user){
    if (user.value.length<6){
        error('rgb(189,87,87)')

    }
    else{
        error('rgb(11, 248, 110)')
        return true;
    }
}

function validateEmail(email){
    const validation =/^[^\$@]+@[^\$@].[^\$@]+$/;
    if(validation.test(email.value)){
        error('rgb(11, 248, 110)')
        return true;
    }else{
        error('rgb(189,87,87)')

    }
}
function nextSlide(parent,nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active')
}


function error(color){
    document.body.style.backgroundColor=color;
}



animatedForm();