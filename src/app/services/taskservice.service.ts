import { Injectable } from '@angular/core';
import { Task } from '../models/Task';



@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  tasks: Task[];

  constructor() { 

    this.tasks = [];

  }

  getTask(){
    if(localStorage.getItem('tarea1')===null){
      return this.tasks;
    }
    else{
      this.tasks = JSON.parse(localStorage.getItem('tarea1')!);
      return this.tasks;
    }
  }

  addTasks(task : Task){
    this.tasks.push(task);
    let tasks:Task[] = [];
    if(localStorage.getItem('tarea1') === null){
      tasks.push(task);
      localStorage.setItem('tarea1', JSON.stringify(tasks));
    }else{
      tasks= JSON.parse(localStorage.getItem('tarea1')!);
      tasks.push(task);
      localStorage.setItem('tarea1', JSON.stringify(tasks));

    }
  }

  deleteTask(task: Task){
    for (let i = 0; i < this.tasks.length; i++) {
      if(task == this.tasks[1]){
        this.tasks.splice(i, 1);//Elimina del arreglo
        localStorage.setItem('tarea1', JSON.stringify(this.tasks));
      }
      
    }
  }

}