import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.html',
  styleUrl: './quotes.css',
})
export class Quotes implements OnInit {
  quote = '';
  author = '';
  loading = true;

  // por si la API no responde
  private localQuotes = [
    {
      text: 'El éxito ocurre cuando la preparación se encuentra con la oportunidad.',
      author: 'Zig Ziglar',
    },
    { text: 'La disciplina es el puente entre metas y logros.', author: 'Jim Rohn' },
    {
      text: 'No tienes que ser grande para empezar, pero tienes que empezar para ser grande.',
      author: 'Zig Ziglar',
    },
    { text: 'La motivación te inicia, el hábito te mantiene.', author: 'Jim Ryun' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadQuote();
  }

  loadQuote(): void {
    this.loading = true;

    // API pública de frases
    this.http.get<any[]>('https://type.fit/api/quotes').subscribe({
      next: (res) => {
        if (Array.isArray(res) && res.length > 0) {
          const randomIndex = Math.floor(Math.random() * res.length);
          const q = res[randomIndex];
          this.quote = q.text || 'Sin texto';
          this.author = q.author || 'Anónimo';
        } else {
          this.setFallback();
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Quotes API no respondió, usando fallback...', err);
        this.setFallback();
        this.loading = false;
      },
    });
  }

  private setFallback() {
    const randomIndex = Math.floor(Math.random() * this.localQuotes.length);
    const q = this.localQuotes[randomIndex];
    this.quote = q.text;
    this.author = q.author;
  }
}
