var wrapWidth = 300;
var bugWidth = 30;
var bug = document.querySelector('#bug');
var Score=document.querySelector('.score');
var Life=document.querySelector('.miss');
var box=document.querySelector('.box');
var Level=document.querySelector('.level');
var bugSpeed=1500;
var timer=3000;
var point=0;
var life=10;
var level=1;
var Miss=0;
function random(max) {
  return Math.floor(Math.random() * max); //랜덤으로 값주기
}

function move() { //버그움직이기
    var x = random(wrapWidth - bugWidth);
    var y = random(wrapWidth - bugWidth);
   
    bug.style.left = x + 'px';
    bug.style.top = y + 'px';
  }
function addScore(e){ //클릭시 추가
        
        
        if(point==9){
            point=0;
            bugSpeed+=500;
            level+=1;
            Level.innerHTML=level;
        }else{point+=1;}
        Score.innerHTML=point;
        
}
function Misscount(e){
    if(e.target.className=='box'){
        if(Miss==10){
            alert("게임종료");
        }
        else{Miss+=1;
        Life.innerHTML=Miss;}
    }
    
    
}

bug.addEventListener('click',addScore);
box.addEventListener('click',Misscount);
setInterval(move, bugSpeed);

/*
function diebug(){
   
    start();
    move();
   
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



function start(){
    clearInterval(timer);
    setInterval(move,bugSpeed);
}



bug.addEventListener('click',addScore());
box.addEventListener('click',missLife());
*/
