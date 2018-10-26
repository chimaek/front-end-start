//start...

//input입력받기
var html='';
var dhtml=""
var input =document.getElementById("memo");
var form = document.querySelector(".new-task");
var list =document.querySelector("#list");
var select=document.querySelector(".toggle-checked");
var del=document.querySelector(".delete");
function addTodo(event){

  //  if(event.keyCode===13){
    //    var todo = input.value;
   // }
  //console.log(event);
  //   return fal
  var todo=input.value;
  console.log(todo);
  insertTodo(todo);
  event.preventDefault();
}
    
//input.addEventListener('keydown',addTodo);

function insertTodo(todo){
  var html=`<li>
  <button class="delete" name="se">×</button>
  <input type="checkbox" class="toggle-checked">
  <span class="text">${todo}</span>
  </li>`;
  list.innerHTML+=html;
}
form.addEventListener("submit",addTodo);

function deleteTodo(){
  var chkObj = document.getElementsByName("se");
  for(i=0;i<chkObj.length;i++){
    console.log(chkObj);
    if(chkObj[i].checked){
      list.innerHTML-=chkObj[i];
    }
    
  }
}
del.addEventListener('click',deleteTodo);