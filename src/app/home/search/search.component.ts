import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from './../../movie';
import { OmdbService } from './../../omdb.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = '';
  movies: Array<Movie>;
  userList: Movie[] = [];
  comment = '';

  searchMovie(title) {
    this.movies = [];

    this.omdbService.searchMovieByTitle(this.title)
      .subscribe(data => {
        if(data.results !== null) {
          for (let movie of data.results) {
            this.movies.push(new Movie(movie.title, movie.release_date, movie.poster_path));
          }
        }
        // console.log(this.movies);
      });
  }

  addToFavorites(movie: Movie) {
    const userList = JSON.parse(localStorage.getItem('userList'));

    userList.push(new Movie(movie.Title, movie.Year, movie.Poster, this.comment));

    localStorage.setItem('userList', JSON.stringify(userList));
    //console.log(this.userList);
  }

  openDialog(movie: Movie) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.comment = result;

      if(this.comment) {
        this.addToFavorites(movie);
      }
    });
  }

  constructor(private omdbService: OmdbService, public dialog: MatDialog) {
   }

  ngOnInit(): void {
    this.movies = new Array<Movie>();
  }
}
