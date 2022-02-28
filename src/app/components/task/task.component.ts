import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskserviceService } from '../../services/taskservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

@Input() task: Task;

  constructor(public taskService: TaskserviceService) {
    this.task ={
      title:'',
      description:'',
      hide: true

    }
   }


  ngOnInit(): void {
  }
  deleteTask(task: Task){
    if(confirm('¿Confirmar eliminar registro?')){
      this.taskService.deleteTask(task)
    }
  }

}
