import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieList } from '../models/movie-list.model';

@Injectable()
export class MoviesService {

    private _generalLink = "http://www.omdbapi.com/?apikey=" + environment.apiKey + "&s=star+wars";

    get GeneralLink() { return this._generalLink; }

    constructor(private http: HttpClient) { }

    getMovies(): Observable<MovieList> {
        return this.http.get<MovieList>(this.GeneralLink);
    }
}