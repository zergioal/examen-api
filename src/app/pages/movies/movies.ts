import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../services/tmdb';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies implements OnInit {
  movies: any[] = [];
  loading = true;
  imageBase = 'https://image.tmdb.org/t/p/w500';

  constructor(private tmdb: TmdbService) {}

  ngOnInit(): void {
    this.tmdb.getPopularMovies().subscribe({
      next: (data) => {
        this.movies = data.results ?? [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error TMDB:', err);
        this.loading = false;
      },
    });
  }
}
