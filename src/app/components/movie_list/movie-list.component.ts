import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    constructor(
        private moviesService: MoviesService
    ) { }

    ngOnInit() {
        console.log(this.moviesService.getMovies());
    }
}
