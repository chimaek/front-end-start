//start...

//input입력받기
var html='';
var input =document.getElementById("memo");
var form = document.querySelector(".new-task");
var list =document.querySelector("#list");
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
  var a=document.querySelectorAll(".delete");
 for(i=0;i<a.length;i++){
    if(a[i].checked=true){
      a[i].addEventListener('click',deleteTodo);
    }
  }
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

function deleteTodo(e){
  e.target.parentNode.remove()
}
del.addEventListener('click',deleteTodo);

