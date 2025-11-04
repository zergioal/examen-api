import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogs.html',
  styleUrl: './dogs.css',
})
export class Dogs {
  imageUrl = '';
  loading = false;

  constructor(private http: HttpClient) {
    this.getRandomDog();
  }

  getRandomDog() {
    this.loading = true;
    this.http.get<{ message: string }>('https://dog.ceo/api/breeds/image/random').subscribe({
      next: (res) => {
        this.imageUrl = res.message;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
