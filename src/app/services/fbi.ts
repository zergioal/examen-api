// src/app/services/fbi/fbi.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FbiItem {
  title: string;
  description: string;
  images?: { original: string }[];
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class FbiService {
  private apiUrl = 'https://api.fbi.gov/wanted/v1/list';

  constructor(private http: HttpClient) {}

  getWanted(): Observable<{ items: FbiItem[] }> {
    return this.http.get<{ items: FbiItem[] }>(this.apiUrl);
  }
}
