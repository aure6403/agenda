import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskserviceService } from '../../services/taskservice.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 task: Task[];

  constructor(public servicio: TaskserviceService) {
    this.task = this.servicio.getTask();
   }

  ngOnInit(): void {
  }

}
