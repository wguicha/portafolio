window.addEventListener('scroll', function(){
    console.log('Aqui Estoy....');
    let animateMenu1 = document.getElementById('prueba');
    console.log(animateMenu1 === 'object');
    console.log(animateMenu1 !== null);
    console.log('getBoundingClientRect' in animateMenu1)
    let pos = animateMenu1.getBoundingClientRect().top;
    console.log(pos);

})