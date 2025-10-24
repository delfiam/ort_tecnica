import Factory from "../models/Factory.js";
import validation from "../utils/validation.js";

class TaskService {
    constructor() {
        this.model = Factory.create(process.env.PERSISTENCE);
    }
    getTasks = async () => {
        return await this.model.getTasks();
    }

    postTask = async (task) => {
        const { error } = validation.validate(task);
        if (error) {
            throw new Error(`Validation error: ${error.details[0].message}`);
        }
        return await this.model.postTask(task);
    }

    putTask = async (id) => {
        return await this.model.putTask(id);
    }

    deleteTask = async (id) => {
        return await this.model.deleteTask(id);
    }

}

export default TaskService;
