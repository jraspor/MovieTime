import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  comment = '';

  addComment(comment) {
    this.comment = comment;
    return(comment);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
