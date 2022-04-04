var elements_animated = [...document.getElementsByClassName('box')];

$(window).scroll(function(){
    var start       = this.scrollY ,
        rangeEnd    = ( this.innerHeight / 1.20 ) + start;
    
    elements_animated.forEach(function(e){
        if( isInRange( e.offsetTop,rangeEnd ) && !e.classList.contains('view') ){
            e.classList.add('view');
            e.style.transitionDuration = Math.random()+1+'s';
        }
    });
});
elements_animated.forEach(function(e){
    if( isInRange( e.offsetTop,$(window).innerHeight() ) && !e.classList.contains('view') ){
        e.classList.add('view');
        e.style.transitionDuration = Math.random()+1+'s';
    }
});