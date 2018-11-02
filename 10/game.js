var wrapWidth = 300;
var bugWidth = 30;
var bug = document.querySelector('#bug');
var Score=document.querySelector('.sNum');
var Level=document.querySelector('.Lnum');
var Miss=document.querySelector('.mNum1');
var box=document.querySelector(".box");
var bugSpeed=1500;
var timer=3000;
var point=0;
var life=10;
function addScore(){
    point+=1;
    Score.innerHTML=point;
    diebug();
}
function diebug(){
    start()
   
}
function missLife(){
    life-=1;
    Miss.innerHTML=life;

    if(life==0){
        gameover();
    }

}
function gameover(){
    clearInterval()
}

function move() {
  var x = random(wrapWidth - bugWidth);
  var y = random(wrapWidth - bugWidth);
  console.log(x, y);

  bug.style.left = x + 'px';
  bug.style.top = y + 'px';
}
function random(max) {
  return Math.floor(Math.random() * max);
}

function start(){
    clearInterval(timer);
    setInterval(move,bugSpeed);
}
start();



bug.addEventListener('click',addScore());
box.addEventListener('click',missLife());




