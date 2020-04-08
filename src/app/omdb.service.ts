import { Observable } from 'rxjs/Rx';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  searchMovieByTitle(title: string) {
    const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=eff75e42';
    return this.http.get(url);
    }
  constructor(private http: HttpClient) { }
}
