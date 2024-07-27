import { Injectable } from "@angular/core";

import { dummy_tasks } from "./dummy-tasks";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn:'root'})
export class TasksService{
    private tasks=dummy_tasks;
    constructor(){
        const tasks = localStorage.getItem('dummy_tasks');
        if(tasks) this.tasks=JSON.parse(tasks);
    }

    getTasks(id:string){
        this.tasks = this.tasks.filter((d)=>d.userId === id);
        return this.tasks;
    }

    addTask(data:NewTaskData,userId:string){
        this.tasks.unshift({
            id: new Date().getTime.toString(),
            userId: userId,
            title:data.title,
            summary:data.summary,
            dueDate:data.date
        })
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }

    removeTask(id:string){
        this.tasks = this.tasks.filter((d)=>d.id !== id);
        this.saveTasks();
    }
}