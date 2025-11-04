import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=-17.3895&longitude=-66.1568&current_weather=true&timezone=America%2FLa_Paz';

  constructor(private http: HttpClient) {}

  getCurrentWeather(): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(this.apiUrl).pipe(
      catchError(() => {
        return of({
          latitude: -17.3895,
          longitude: -66.1568,
          timezone: 'America/La_Paz',
          current_weather: {
            temperature: 25,
            windspeed: 6,
            winddirection: 140,
            weathercode: 0,
            time: new Date().toISOString(),
          },
        });
      })
    );
  }
}
