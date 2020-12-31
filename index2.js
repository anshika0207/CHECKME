
const todoList= document.querySelector(".todo-list");
const todoInput=document.querySelector(".todo-input");

$('.todo-button').click(addTodo);
$(".todo-list").click(deletethis);
$(".todo-list").click(check);



function addTodo(event){
  event.preventDefault();

//new div
  const newDiv=document.createElement("div");
  newDiv.classList.add("todo");
//new List
  const newList=document.createElement("li");
  newList.innerText= todoInput.value;
  newList.classList.add("todo-item");
  newDiv.appendChild(newList);
//new button
  const newButton1= document.createElement("button");
  newButton1.innerHTML='<i class="far fa-check-circle"></i>';
  newButton1.classList.add("completeButton1");
  newDiv.appendChild(newButton1);

  const newButton2= document.createElement("button");
  newButton2.innerHTML='<i class="far fa-trash-alt"></i>';
  newButton2.classList.add("completeButton2");
  newDiv.appendChild(newButton2);

//append to original

todoList.appendChild(newDiv);

todoInput.value="";

}

function deletethis(e){
  e.preventDefault();
  const selected=e.target;
  if(selected.classList[0] === "completeButton2"){
    const par= selected.parentElement;
    par.remove();
  }
}


function check(eve){
  eve.preventDefault();
  const select=eve.target;
  if(select.classList[0] === "completeButton1"){
    const pare=select.parentElement;
    pare.classList.add("strike");
  }

}
