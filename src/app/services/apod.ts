import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface ApodResponse {
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: 'image' | 'video';
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApodService {
  private apiKey = 'iGaCfSMf2PPDbiweICxFl6fNrYO46gegmPgvLgJ5';
  private apiUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getTodayPicture(): Observable<ApodResponse> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&thumbs=true`;
    return this.http.get<ApodResponse>(url).pipe(
      catchError((err) => {
        console.error('Error APOD:', err);
        // fallback para que la UI no quede vacía
        return of({
          title: 'Pillars of Creation (fallback)',
          explanation: 'No se pudo obtener la imagen de NASA APOD, mostrando una de ejemplo.',
          url: 'https://apod.nasa.gov/apod/image/1501/2014_01_5_PillarsOfCreation1024.jpg',
          media_type: 'image',
          date: new Date().toISOString().slice(0, 10),
        } as ApodResponse);
      })
    );
  }
}
