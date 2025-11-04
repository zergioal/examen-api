// src/app/pages/countries/countries.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService, Country } from '../../services/countries';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries implements OnInit {
  countries: Country[] = [];
  loading = true;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
      next: (data) => {
        console.log('PAISES:', data); // 👈 para ver en consola
        this.countries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error countries:', err);
        this.loading = false;
      },
    });
  }
}
