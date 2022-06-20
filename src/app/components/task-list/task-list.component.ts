import { Component, OnInit } from '@angular/core';
import { Itask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

    task1: Itask = {
      title: 'Task 1',
      description: 'Task 1 description',
      completed: false, 
      level: Levels.Info
    }

    task2: Itask = {
      title: 'Task 2',
      description: 'Task 2 description',
      completed: true, 
      level: Levels.Urgent  
    }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: Itask): void {
    alert(`You are Going to delete: ${task.title}`)
  }

}
