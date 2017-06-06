import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: any [] = [
    {title: 'first task'},
    {title: 'second task'}
  ];
  constructor() { }
  // 4
  dataFromChild(eventData){
    console.log(eventData);
  }
}
