import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private apiUrl = 'https://gateway.marvel.com/v1/public/characters';
  private publicKey = 'tu_public_key_aqui'; // No pongas tu privada

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    const params = new HttpParams().set('limit', 10).set('apikey', this.publicKey);

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError((err) => {
        console.warn('Marvel API bloqueada o sin clave. Usando datos locales...');
        return of({
          data: {
            results: [
              {
                id: 1009368,
                name: 'Iron Man',
                description: 'Genius, billionaire, playboy, philanthropist.',
                thumbnail: {
                  path: 'https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
                  extension: 'jpg',
                },
              },
              {
                id: 1009610,
                name: 'Spider-Man',
                description:
                  'Bitten by a radioactive spider, Peter Parker uses his powers for good.',
                thumbnail: {
                  path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/526547e2d90ad',
                  extension: 'jpg',
                },
              },
            ],
          },
        });
      })
    );
  }
}
