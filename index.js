let leng=document.querySelectorAll('.drum').length;
function play(y){
    switch (y){
        case 'w':
                var a=new Audio('sounds/tom-1.mp3');
                a.play();
            break;
        case 'a':
                var a=new Audio('sounds/tom-2.mp3');
                a.play();
            break;
        case 's':
                var a=new Audio('sounds/tom-3.mp3');
                a.play();
            break;
        case 'd':
                var a=new Audio('sounds/tom-4.mp3');
                a.play();
            break;
        case 'j':
                var a=new Audio('sounds/crash.mp3');
                a.play();
            break;
        case 'k':
                var a=new Audio('sounds/kick-bass.mp3');
                a.play();
            break;
        case 'l':
                var a=new Audio('sounds/snare.mp3');
                a.play();
            break;
        default:
                console.log('Default swich is active');
            break;
    }
}
for(var i=0;i<leng;i++){
document.querySelectorAll('.drum')[i].addEventListener('click',function clicked(){
    var x = this.innerHTML;
    play(x);
});}
document.addEventListener('keypress',function key(event){
    let k=event.key;
    play(k);
});