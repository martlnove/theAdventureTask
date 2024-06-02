document.addEventListener('DOMContentLoaded', function() {
    const tasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
    const taskTableBody = document.getElementById('taskTableBody');

    tasks.forEach(task => {
        const row = document.createElement('tr');

        const taskCell = document.createElement('td');
        taskCell.textContent = task.task;
        taskCell.classList.add('task-cell'); // Adicionando classe para alinhar à esquerda
        row.appendChild(taskCell);

        const difficultyCell = document.createElement('td');
        difficultyCell.textContent = task.difficulty;
        row.appendChild(difficultyCell);

        const durationCell = document.createElement('td');
        durationCell.textContent = task.duration;
        row.appendChild(durationCell);

        const statusCell = document.createElement('td');
        statusCell.classList.add('status-cell'); // Adicionando classe para centralizar
        const statusCheckbox = document.createElement('input');
        statusCheckbox.type = 'checkbox';
        statusCheckbox.addEventListener('change', function() {
            if (this.checked) {
                row.classList.add('completed-task');
            } else {
                row.classList.remove('completed-task');
            }
        });
        statusCell.appendChild(statusCheckbox);
        row.appendChild(statusCell);

        taskTableBody.appendChild(row);
    });
});
