import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService, Game } from '../../services/games';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games implements OnInit {
  games: Game[] = [];
  loading = true;
  selectedCategory = 'all';
  corsBlocked = false;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.loading = true;
    this.corsBlocked = false;

    if (this.selectedCategory !== 'all') {
      this.gamesService.getGamesByCategory(this.selectedCategory).subscribe({
        next: (data) => {
          this.games = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.corsBlocked = true;
        },
      });
    } else {
      this.gamesService.getGames().subscribe({
        next: (data) => {
          this.games = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.corsBlocked = true;
        },
      });
    }
  }

  changeCategory(cat: string): void {
    this.selectedCategory = cat;
    this.loadGames();
  }
}
