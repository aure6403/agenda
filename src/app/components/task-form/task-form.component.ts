import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../../services/taskservice.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor( public taskService: TaskserviceService) { }

  ngOnInit(): void {
  }
  addTask(t:HTMLInputElement, d: HTMLTextAreaElement){
    this.taskService.addTasks(
      {
        title: t.value,
        description : d.value,
        hide: true
      }
    );
    t.value = '';
    d.value = '';
    t.focus();
    return false;

  }

}
