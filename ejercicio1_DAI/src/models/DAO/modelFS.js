import fs from 'fs';
class TaskModelFS {
    constructor() {
        this.path = 'tasks.json';
    }
    getTasks = async () => {
        const allTasks = await fs.promises.readFile(this.path, 'utf-8');
        return JSON.parse(allTasks);
    }
    postTask = async (task) => {
        const allTasks = await this.getTasks();
        task.id = allTasks.length ? allTasks[allTasks.length - 1].id + 1 : 1;
        task.completed = false;
        allTasks.push(task);
        await fs.promises.writeFile(this.path, JSON.stringify(allTasks, null, 2), 'utf-8');
        return task;
    }

    putTask = async (id) => {
        const allTasks = await this.getTasks();
        const taskIndex = allTasks.findIndex(t => t.id === parseInt(id));
        if (taskIndex === -1) {
            return null;
        }
        allTasks[taskIndex].completed = !allTasks[taskIndex].completed;
        await fs.promises.writeFile(this.path, JSON.stringify(allTasks, null, 2), 'utf-8');
        return allTasks[taskIndex];
    }
    deleteTask = async (id) => {
        const allTasks = await this.getTasks();
        const taskIndex = allTasks.findIndex(t => t.id === parseInt(id));
        if (taskIndex === -1) {
            return null;
        }
        const deletedTask = allTasks.splice(taskIndex, 1);
        await fs.promises.writeFile(this.path, JSON.stringify(allTasks, null, 2), 'utf-8');
        return deletedTask[0];
    }

}
export default TaskModelFS;
