import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbiService, FbiItem } from '../../services/fbi';

@Component({
  selector: 'app-fbi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fbi.html',
  styleUrl: './fbi.css',
})
export class Fbi implements OnInit {
  wanted: FbiItem[] = [];
  loading = true;

  constructor(private fbiService: FbiService) {}

  ngOnInit(): void {
    this.fbiService.getWanted().subscribe({
      next: (res) => {
        this.wanted = res.items;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error FBI:', err);
        this.loading = false;
      },
    });
  }
}
