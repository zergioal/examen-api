import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private baseUrl = 'https://api.themoviedb.org/3';

  // 🔹 Tu token de lectura (v4)
  private authHeader = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzQ3M2RhNGZlYmU4NjkyYTdmNzU1MWJhOTlkYTA0MSIsIm5iZiI6MTc2MjIyMjQ4NS43NTIsInN1YiI6IjY5MDk2MTk1YzI1M2EwZThjNDFlNWFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iXhU4mdRKZCG4RTSGxVAMPYvY4TxU9a4re-I-Rh-dGc',
  });

  constructor(private http: HttpClient) {}

  // 🔹 Ejemplo: películas populares
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/popular?language=es-ES&page=1`, {
      headers: this.authHeader,
    });
  }

  // 🔹 Ejemplo: tendencias
  getTrending(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?language=es-ES`, {
      headers: this.authHeader,
    });
  }
}
