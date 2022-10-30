class LocalStorageController {
    getList() {
        let data = localStorage.getItem('task_list') || "[]";
        data = JSON.parse(data);
        let array = data.filter((task) => !task.solved);
        localStorage['task_list'] = JSON.stringify(array);
        return array;
    }
    addTask(task) {
        let data = JSON.parse(localStorage.getItem('task_list'));
        if (!data) {
            data = [];
        }
        task.solved = false;
        data.push(task);
        localStorage['task_list'] = JSON.stringify(data);
        return data;
    }
    removeTask(task) {
        let data = JSON.parse(localStorage.getItem('task_list'));
        data = data.filter(tsk => (tsk.link != task.link));
        localStorage['task_list'] = JSON.stringify(data);
        return data;
    }
}

export default new LocalStorageController