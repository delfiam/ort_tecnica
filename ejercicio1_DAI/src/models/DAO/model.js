class TaskModel {
    constructor() {
        this.tasks = [{"id":1,"name":"Tarea de ejemplo","completed":false}];
    }
    getTasks = async () => {
        return this.tasks
    }
    postTask = async (task) => {
        task.id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
        task.completed = false;
        this.tasks.push(task)
        return task;
    }
    putTask = async (id) => {
        const taskIndex = this.tasks.findIndex(t => t.id === parseInt(id));
        if (taskIndex === -1) {
            return null;
        }
        this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
        return this.tasks[taskIndex];
    }
    deleteTask = async (id) => {
        const taskIndex = this.tasks.findIndex(t => t.id === parseInt(id));
        if (taskIndex === -1) {
            return null;
        }
        const deletedTask = this.tasks.splice(taskIndex, 1);
        return deletedTask[0];
    }
}
export default TaskModel;