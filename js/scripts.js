// //  selecting dom elements
// let taskInput = document.querySelector('input');
// let taskList = document.querySelector('#task-list');
// // let btn = document.querySelector('button');



// // creating newtask

// function createTask() {


//     if (taskInput.value === '') {
//         alert("input cannot be empty");
//     } else {

//         let todoItem = document.createElement('li');
//         todoItem.innerText = taskInput.value;
//         taskList.appendChild(todoItem);
//         // let editBtn = document.createElement('span');
//         // editBtn.innerHTML = "T";
//         // todoItem.appendChild(editBtn);
//         let deleteBtn = document.createElement('span');
//         deleteBtn.innerHTML = "\u00d7";
//         todoItem.appendChild(deleteBtn);
//     }
//     taskInput.value = "";


// }


// taskList.addEventListener("click", function (event) {
//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle("check")
//     } else if (event.target.tagName === "SPAN") {
//         event.target.parentElement.remove()
//     }
// }, false)

// function addItem() {
//     let newTask = createTask();
//     taskItemList.appendChild(newTask);
//     taskInput.value = " ";
// }


// btn.addEventListener('click', function () {
//     addItem();
// });

