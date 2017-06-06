import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() myTasks;
  // 1
  @Output() aTaskEventEmitter = new EventEmitter();
  constructor() { }
  triggerEvent(){
    this.aTaskEventEmitter.emit(7); //we can pass in any data type
  }
}
