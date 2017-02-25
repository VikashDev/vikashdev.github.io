let addtask = document.querySelector("#addTODo");

let addToDoList = function() {
    let task = document.querySelector("#task").value;
    console.log(task);
}


document.addEventListener('click', addToDoList);