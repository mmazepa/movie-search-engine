import { AfterViewInit, Component } from '@angular/core';
import { MovieList } from 'src/app/models/movie-list.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements AfterViewInit {

    movies: MovieList;

    constructor(
        private moviesService: MoviesService
    ) { }

    ngAfterViewInit() {
        this.getMovies();
    }

    getMovies() {
        this.moviesService.getMovies()
            .subscribe(result => {
                this.movies = result;
                console.log(result);
            }, error => {
                console.log(error);
            });
    }
}
