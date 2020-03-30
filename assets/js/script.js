var buttonEL = window.document.querySelector("#save-task");
var taskToDoEl = window.document.querySelector("#task-to-do");

var createTaskHandlder = function (){
    var taskItemEl = window.document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(taskItemEl);
}

buttonEL.addEventListener ("click",createTaskHandlder()) ;

console.log(buttonEL);



