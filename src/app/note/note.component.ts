import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes = [
    {title: 'first note'},
    {title: 'second note'}
  ];

  invoked(){
    console.log("Invoked");
  }

  constructor() { }

  ngOnInit() {
  }

  addNote(notes: any){
    console.log("Invoking method in parent note component")
    this.notes.push(newNote);
  }

}
