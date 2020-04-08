import { Movie } from './../../movie';
import { OmdbService } from './../../omdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = '';
  movies: Array<Movie>;

  searchMovie(title) {
    this.omdbService.searchMovieByTitle(this.title)
      .subscribe(data => {
        if(data.results !== null) {
          for (let movie of data.results) {
            this.movies.push(new Movie(movie.title, movie.release_date));
          }
        }
        console.log(this.movies);
      });
  }

  constructor(private omdbService: OmdbService) { }

  ngOnInit(): void {
    this.movies = new Array<Movie>();
  }
}
