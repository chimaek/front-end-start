var wrap= document.querySelector('.wrap'); //wrap 클래스를 선택함
var blockName=''; //클래스 이름정하는 변수
var str=''; 
var color=false; // true false 를 이용하여 색깔변경

for(var i=0;i<4;i++){  //반복문을 돌려 4x4 체스판을 만듬
  for(var j=0;j<4;j++){

    if(color){
      blockName='w';
    }else{
      blockName='b';
    }
    str += '<div class="'+ blockName +'"></div>';

    color=!color;
  }
  color=!color;
}
wrap.innerHTML=str; 

var allBoard=document.querySelectorAll('.wrap > div'); //wrap 클래스 밑에있는 div태그들을 전부 선택함.
var changeBlock=null;

for(var i=0;i<allBoard.length;i++){
  allBoard[i].addEventListener('click',function select(event){

    var board=event.currentTarget; //클릭한 보드를 찾음 current Target을 이용하여.
    
    if(changeBlock){
      changeBlock.classList.remove("r")
    }
    
    board.classList.add("r")
    console.log(board)
    changeBlock=board;
  });
}

/* 강사님 코드
var wrap = document.querySelector('.wrap');
var str = '';

for(let i = 1; i <= 4; i++) {
  for(let j = 1; j <= 4; j++) {
      // let block = document.createElement('div');
      // block.className = (i + j) % 2 == 1 ? 'black' : 'white';
      // wrap.appendChild(block);
      str += `<div class='${(i + j) % 2 == 1 ? 'b' : 'w'}'></div>`  
  }
}


wrap.innerHTML = str;

var blocks = document.querySelectorAll('.wrap > div');

blocks.forEach(function(block){

  block.addEventListener('click', function(event) { 
    console.log(block);

    // block.style.backgroundColor = 'yellow';
    // block.className += ' y';
  })

});

// for(var i=0; i < 16; i++) {
//   // console.log( blocks[i] );

//   blocks[i].addEventListener('click', function(event) {

//     debugger
//     blocks[i].style.backgroundColor = 'yellow';
    
//   });

// }
*/

