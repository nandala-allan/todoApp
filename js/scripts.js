// // Selecting DOM elements
const taskInput = document.querySelector('input');
const taskList = document.querySelector('#task-list');
const deleteListBtn = document.querySelector('#delete-list-btn');

// Function to create a new task
function createTask() {
    if (taskInput.value === '') {
        alert("Input cannot be empty");
    } else {
        // Create a new <li> element for the task
        const todoItem = document.createElement('li');
        todoItem.innerText = taskInput.value;

        // Create a delete button for the task
        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = "\u00d7";
        todoItem.appendChild(deleteBtn);

        // Append the task to the task list
        taskList.appendChild(todoItem);

        // Save the task list to local storage
        saveList();
    }

    // Clear the input field
    taskInput.value = "";
}

// Event listener for creating a task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        createTask();
    }
});

// Event listener for checking/unchecking tasks and deleting tasks
taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("check");
        saveList();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveList();
    }
}, false);

// Event listener for deleting the task list from local storage
deleteListBtn.addEventListener('click', function () {
    deleteList();
});

// Save the task list to local storage
function saveList() {
    localStorage.setItem("todo-data", taskList.innerHTML);
}

// Load the task list from local storage
function loadList() {
    const savedList = localStorage.getItem("todo-data");
    if (savedList) {
        taskList.innerHTML = savedList;
    }
}

// Delete the task list from local storage
function deleteList() {
    localStorage.removeItem("todo-data");
    taskList.innerHTML = "";
}

// Load the task list when the page is loaded
document.addEventListener('DOMContentLoaded', loadList);
