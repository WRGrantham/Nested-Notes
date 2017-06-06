import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {


@Output() addNote = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  createNote(){
    console.log("creating in child component", this.newNote);
    this.addNote.emit(this.newNote);
    this.newNote = {
      title: ''
    }
  }

}
