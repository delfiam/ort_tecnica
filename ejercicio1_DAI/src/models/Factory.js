import TaskModel from "./DAO/model.js";
import TaskModelFS from "./DAO/modelFS.js";

class Factory {
    static create(persistence) {
        switch (persistence) {
            case "memory":
                console.log("memory persistence");
                return new TaskModel();
            case "fs":
                console.log("file system persistence");
                return new TaskModelFS();

            default:
                console.log("default persistence");
                return new TaskModel();
        }
    }
}
export default Factory;