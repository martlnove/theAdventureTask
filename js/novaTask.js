const tasks = JSON.parse(sessionStorage.getItem('tasks')) || [];

function novaTask() {
    const task = document.getElementById('task').value;
    const duration = document.getElementById('duration').value;
    const difficulty = document.querySelector('input[name="dificuldade"]:checked').value;
    const newTask = {
        task: task,
        duration: duration,
        difficulty: difficulty
    };

    tasks.push(newTask);
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
    
    document.getElementById('taskForm').reset();
    alert('Tarefa adicionada com sucesso!');
    window.location.href = 'minhasTasks.html';
}
