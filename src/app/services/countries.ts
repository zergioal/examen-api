// src/app/services/countries.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  name: { common: string };
  flags: { png: string; svg: string };
  capital?: string[];
  region?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  // ✅ ahora especificamos los campos requeridos
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,region';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
