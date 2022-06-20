import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Itask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    @Input() task : Itask | undefined;
    // emitter task i want to delete
    @Output() delete:  EventEmitter<Itask> = new EventEmitter<Itask>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask() {
     this.delete.emit(this.task);  // notify at component task i clear
  }
}
