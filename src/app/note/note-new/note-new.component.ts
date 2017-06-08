import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {


  @Output() addNote = new EventEmitter()

  note = {title: '' }
  
  constructor() { }

  ngOnInit() {
  }

  createNote(){
    console.log("creating in child component", this.note);
    this.addNote.emit(this.note);
    this.note = {
      title: ''
    }
  }

}
