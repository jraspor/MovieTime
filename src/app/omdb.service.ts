import { Observable } from 'rxjs/Rx';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OmdbService {
  searchMovieByTitle(title: string): Observable<any> {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=95d091807075bbbc0e231760cb20bb94&language=en-US&query=' + title + '&page=1&include_adult=false';

    return this.http
      .get<any>(url);
    }
  constructor(private http: HttpClient) { }
}
