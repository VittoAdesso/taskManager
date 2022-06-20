import { Component, Input, OnInit } from '@angular/core';
import { Itask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    @Input() task : Itask | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask() {
    console.log("Delete Task", this.task?.title)
  }
}
