import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: Array<Movie>

  constructor() { }

  ngOnInit(): void {
    this.userList = JSON.parse(localStorage.getItem('userList'));
    console.log(this.userList);
  }

}
