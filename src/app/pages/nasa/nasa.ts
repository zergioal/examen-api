import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService, NasaImageItem } from '../../services/nasa';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nasa.html',
  styleUrl: './nasa.css',
})
export class Nasa implements OnInit {
  item?: NasaImageItem;
  loading = true;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage(): void {
    this.loading = true;
    this.nasaService.getRandomImage().subscribe((img) => {
      this.item = img;
      this.loading = false;
    });
  }

  nextImage(): void {
    this.loadImage();
  }
}
