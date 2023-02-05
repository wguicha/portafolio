window.addEventListener('scroll', function(){
    
    let animateMenu1 = document.getElementById('menu1');
    let posMenu1 = animateMenu1.getBoundingClientRect().top;
    console.log(posMenu1);
    console.log(posMenu1 < 5);
    if (posMenu1 < 5){
        console.log('Aqui Estoy....');
        animateMenu1.style.left = '50em';
    }

})