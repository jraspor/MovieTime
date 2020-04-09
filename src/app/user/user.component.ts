import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: Array<Movie>;

  deleteMovie(movie: Movie) {
    const index = this.userList.indexOf(movie);
    this.userList.splice(index, 1);

    localStorage.setItem('userList', JSON.stringify(this.userList));
  }

  constructor() { }

  ngOnInit(): void {
    this.userList = JSON.parse(localStorage.getItem('userList'));
    console.log(this.userList);
  }

}
