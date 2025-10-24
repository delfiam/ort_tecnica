import e from "express";
import TaskController from "../controllers/controller.js";
import express from "express";
class Router {
    constructor() {
        this.router = express.Router();
        this.controller = new TaskController();
    }
    startRoutes() {
        this.router.get("/tasks", this.controller.getTasks);
        this.router.post("/tasks", this.controller.postTask);
        this.router.put("/tasks/:id", this.controller.putTask);
        this.router.delete("/tasks/:id", this.controller.deleteTask);
        return this.router;
    }
}
export default Router;
