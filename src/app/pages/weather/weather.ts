import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService, WeatherResponse } from '../../services/weather';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather implements OnInit {
  data?: WeatherResponse;
  loading = true;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCurrentWeather().subscribe((res) => {
      this.data = res;
      this.loading = false;
    });
  }

  // opcional: traducir el weathercode a texto
  getWeatherText(code: number): string {
    const map: Record<number, string> = {
      0: 'Cielo despejado',
      1: 'Mayormente despejado',
      2: 'Parcialmente nublado',
      3: 'Nublado',
      45: 'Niebla',
      48: 'Niebla con escarcha',
      51: 'Llovizna ligera',
      61: 'Lluvia ligera',
      63: 'Lluvia moderada',
      65: 'Lluvia fuerte',
    };
    return map[code] ?? 'Condición desconocida';
  }
}
