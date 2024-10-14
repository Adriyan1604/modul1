let taskToEdit = null;

document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskTitle = taskInput.value;

    if (taskTitle) {
        addTask(taskTitle);
        taskInput.value = '';
        updateTaskCount();
    }
});

document.getElementById('update-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const newTitle = taskInput.value;

    if (newTitle && taskToEdit) {
        taskToEdit.querySelector('.task-title').textContent = newTitle;
        taskInput.value = '';

        document.getElementById('update-task-btn').style.display = 'none';
        document.getElementById('add-task-btn').style.display = 'inline';

        taskToEdit = null;
    }
});

function addTask(taskTitle) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.className = 'task-item';

    const taskTitleSpan = document.createElement('span');
    taskTitleSpan.className = 'task-title';
    taskTitleSpan.textContent = taskTitle;

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';

    editButton.addEventListener('click', function() {

        const taskInput = document.getElementById('task-input');
        taskInput.value = taskTitleSpan.textContent;

        document.getElementById('update-task-btn').style.display = 'inline';
        document.getElementById('add-task-btn').style.display = 'none';

        taskToEdit = li;
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
        updateTaskCount();
    });

    li.appendChild(taskTitleSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

function updateTaskCount() {
    const taskList = document.getElementById('task-list');
    const taskCount = taskList.getElementsByTagName('li').length;
    document.getElementById('task-count').textContent = taskCount;
}
