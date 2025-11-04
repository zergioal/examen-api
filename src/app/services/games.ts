import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  release_date: string;
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  // 👇 este es el endpoint de RapidAPI (el que sí permite CORS)
  private apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

  // 👇 tus headers de RapidAPI
  private headers = new HttpHeaders({
    'x-rapidapi-key': '0c28d4890fmsh176183bc2d9914bp19d066jsn679ce4ee5487',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl, { headers: this.headers }).pipe(
      catchError((err) => {
        console.error('No se pudo traer juegos desde RapidAPI', err);
        // fallback para que tu página no quede vacía
        return of([
          {
            id: 1,
            title: 'Demo RPG',
            thumbnail: 'https://www.freetogame.com/g/1/thumbnail.jpg',
            short_description: 'Juego de ejemplo (fallback).',
            game_url: 'https://www.freetogame.com/',
            genre: 'RPG',
            platform: 'PC (Windows)',
            publisher: 'Demo Studio',
            release_date: '2024-01-01',
          },
        ] as Game[]);
      })
    );
  }

  getGamesByCategory(category: string): Observable<Game[]> {
    const url = `${this.apiUrl}?category=${category}`;
    return this.http.get<Game[]>(url, { headers: this.headers }).pipe(
      catchError((err) => {
        console.error('No se pudo traer categoría desde RapidAPI', err);
        return of([]);
      })
    );
  }
}
