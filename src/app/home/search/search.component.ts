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
  result: Object;

  searchMovie(title: string) {
    this.omdbService.searchMovieByTitle(title)
    .subscribe((result: any) => {
        this.result = result;
        //console.log(result);
        console.log(this.result);
      }
    );
  }

  constructor(private omdbService: OmdbService) { }

  ngOnInit(): void {
  }

}
