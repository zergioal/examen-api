import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// importa aquí tus páginas stand-alone
import { Dogs } from './pages/dogs/dogs';
import { Movies } from './pages/movies/movies';
import { Countries } from './pages/countries/countries';
import { Nasa } from './pages/nasa/nasa';
import { Fbi } from './pages/fbi/fbi';
import { Games } from './pages/games/games';
import { Quotes } from './pages/quotes/quotes';
import { Weather } from './pages/weather/weather';

@Component({
  selector: 'app-root',
  standalone: true,
  // 👇 metemos todos los componentes que vamos a mostrar en tabs
  imports: [CommonModule, Dogs, Movies, Countries, Nasa, Fbi, Games, Quotes, Weather],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // pestaña activa
  activeTab = signal<
    'dogs' | 'movies' | 'countries' | 'nasa' | 'fbi' | 'games' | 'quotes' | 'weather'
  >('dogs');

  setTab(tab: typeof this.activeTab extends infer T ? any : never) {
    this.activeTab.set(tab);
  }
}
