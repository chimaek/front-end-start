//start...

//input입력받기

var input =document.getElementById("memo");
var form = document.querySelector(".new-task");
var list =document.querySelector("#list");


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
form.addEventListener("submit",addTodo);

function insertTodo(todo){
  var html=`<li>
  <button class="delete">×</button>
  <input type="checkbox" class="toggle-checked">
  <span class="text">${todo}</span>
  </li>`;

  list.innerHTML+=html;

}