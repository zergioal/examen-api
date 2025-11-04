import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

interface QuoteContents {
  quotes: Array<{
    quote: string;
    author: string;
    title?: string;
  }>;
}

interface QuoteResponse {
  contents: QuoteContents;
}

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  // endpoint público
  private apiUrl = 'https://quotes.rest/qod?language=en';

  // a veces esta API pide un User-Agent, pero vamos a probar así primero
  private headers = new HttpHeaders({
    Accept: 'application/json',
  });

  constructor(private http: HttpClient) {}

  getQuoteOfTheDay(): Observable<QuoteResponse> {
    return this.http.get<QuoteResponse>(this.apiUrl, { headers: this.headers }).pipe(
      catchError((err) => {
        console.error('Quotes API no respondió, usando fallback...', err);
        // devolvemos un objeto con la misma forma que la API
        return of({
          contents: {
            quotes: [
              {
                quote: 'La disciplina tarde o temprano vencerá a la inteligencia.',
                author: 'Anónimo',
                title: 'Fallback quote',
              },
            ],
          },
        });
      })
    );
  }
}
