import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MoviesService {

    private _generalLink = "http://www.omdbapi.com/?apikey=" + environment.apiKey;

    get GeneralLink() { return this._generalLink; }

    constructor(private http: HttpClient) { }

    getMovies(): Observable<any[]> {
        console.log(this.GeneralLink);
        return this.http.get<any[]>(this.GeneralLink);
    }
}