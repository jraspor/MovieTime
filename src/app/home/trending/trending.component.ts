import { OmdbService } from './../../omdb.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  movies: Movie[] = [];


  constructor(public omdbService: OmdbService) {
    omdbService.getPopularMovies()
      .subscribe( data => {
        for(let movie of data.results) {
          this.movies.push(new Movie(movie.title, movie.release_date, movie.poster_path));
        }
      });
   }

  ngOnInit(): void {
  }

}
