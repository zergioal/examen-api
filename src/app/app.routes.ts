import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dogs } from './pages/dogs/dogs';
import { Movies } from './pages/movies/movies';
import { Countries } from './pages/countries/countries';
import { Marvel } from './pages/marvel/marvel';
import { Nasa } from './pages/nasa/nasa';
import { Fbi } from './pages/fbi/fbi';
import { Games } from './pages/games/games';
import { Quotes } from './pages/quotes/quotes';
import { Weather } from './pages/weather/weather';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dogs', component: Dogs },
  { path: 'movies', component: Movies },
  { path: 'countries', component: Countries },
  { path: 'marvel', component: Marvel },
  { path: 'nasa', component: Nasa },
  { path: 'fbi', component: Fbi },
  { path: 'games', component: Games },
  { path: 'quotes', component: Quotes },
  { path: 'weather', component: Weather },
];
