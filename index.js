window.addEventListener('scroll', function(){
    
    let container = document.getElementById('container');
    let head = document.getElementById('head');
    let bar2 = document.getElementById('bar2');
    let posContainer = container.getBoundingClientRect().top;
    console.log(posContainer);
    if (posContainer < -80){
        console.log('Aqui Estoy....');
        head.style.display = 'none';
        bar2.style.display = 'inline-block'
    }else{
        head.style.display = 'inline-block';
        bar2.style.display = 'none'
    }

})