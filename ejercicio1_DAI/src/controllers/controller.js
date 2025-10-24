import TaskService from "../services/service.js";

class TaskController {
    constructor() {
        this.service = new TaskService();
    }
    getTasks = async (req, res) => {
        try {
            const tasks = await this.service.getTasks();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las tareas: " + error.message });
        }
    }
    postTask = async (req, res) => {
        try {
            const newTask = await this.service.postTask(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(400).json({ error: "Error al crear la tarea: " + error.message });
        }
    }
    putTask = async (req, res) => {
        try {
            const updatedTask = await this.service.putTask(req.params.id);
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(400).json({ error: "Error al actualizar la tarea: " + error.message });
        }
    }
    deleteTask = async (req, res) => {
        try {
            const deletedTask = await this.service.deleteTask(req.params.id);
            res.status(200).json(deletedTask);
        } catch (error) {
            res.status(400).json({ error: "Error al eliminar la tarea: " + error.message });
        }
    }
}

export default TaskController;