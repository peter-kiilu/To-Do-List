let currentEdit = null;
let currentCategory = '';

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="remove" onclick="removeTask(this)">Remove</button>`;
    li.onclick = function() {
        updateTask(li);
    };

    const taskList = document.getElementById(currentCategory);
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
}

function updateTask(li) {
    const taskInput = document.getElementById("taskInput");
    taskInput.value = li.firstChild.textContent; // Get the task text
    currentEdit = li; // Store the current task for editing
    currentCategory = li.parentElement.id; // Store the current category
}

function editTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    if (currentEdit) {
        currentEdit.firstChild.textContent = taskText; // Update the task text
        currentEdit = null; // Clear current edit reference
        taskInput.value = ""; // Clear input field
    }
}

// Function to set current category for adding tasks
function setCategory(categoryId) {
    currentCategory = categoryId;
}
