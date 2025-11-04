import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

export interface NasaImageItem {
  title: string;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiUrl = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image';

  constructor(private http: HttpClient) {}

  getRandomImage(): Observable<NasaImageItem> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((res) => {
        const items = res?.collection?.items ?? [];
        if (!items.length) {
          throw new Error('No hay imágenes');
        }

        // selecciona una imagen aleatoria
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        const data = randomItem.data?.[0];
        const links = randomItem.links?.[0];

        return {
          title: data?.title ?? 'NASA Image',
          description: data?.description ?? 'Imagen del espacio.',
          imageUrl: links?.href ?? '',
        } as NasaImageItem;
      }),
      catchError((err) => {
        console.error('Error NASA images, usando fallback...', err);
        return of({
          title: 'Galaxy (fallback)',
          description:
            'No se pudo obtener la imagen desde la API de NASA, mostrando una de ejemplo.',
          imageUrl: 'https://images-assets.nasa.gov/image/PIA12235/PIA12235~orig.jpg',
        });
      })
    );
  }
}
